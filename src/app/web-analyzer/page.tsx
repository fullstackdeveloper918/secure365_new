"use client";

import { useEffect, useState } from "react";
import LandingPage from "@/components/WebAnalyzer/LandingPage";
import UrlInputForm from "@/components/WebAnalyzer/UrlInputForm";
import ScanningAnimation from "@/components/WebAnalyzer/ScanningAnimation";
import ResultsModal from "@/components/WebAnalyzer/ResultsModal";

export default function WebAnalyzer() {
  const [currentStep, setCurrentStep] = useState<string>("landing");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [showPartialResults, setShowPartialResults] = useState(false);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [showFullResults, setShowFullResults] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [requestId, setRequestId] = useState<string | undefined>();
  const [status, setStatus] = useState<any>(null);

  // 🔹 Restore step on refresh
  useEffect(() => {
    const savedStep = sessionStorage.getItem("currentStep");
    const savedUrl = sessionStorage.getItem("websiteUrl");
    const savedEmail = sessionStorage.getItem("email");
    const savedRequestId = sessionStorage.getItem("reportId");

    if (savedStep) setCurrentStep(savedStep);
    if (savedUrl) setWebsiteUrl(savedUrl);
    if (savedEmail) setEmail(savedEmail);
    if (savedRequestId) setRequestId(savedRequestId);
  }, []);

  // 🔹 Save step whenever it changes
  useEffect(() => {
    sessionStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  // 🔹 Save URL & Email
  useEffect(() => {
    if (websiteUrl) sessionStorage.setItem("websiteUrl", websiteUrl);
  }, [websiteUrl]);

  useEffect(() => {
    if (email) sessionStorage.setItem("email", email);
  }, [email]);

  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!email.includes("@")) return "Email must contain @ symbol";

    const parts = email.split("@");
    if (parts.length !== 2) return "Invalid email format";

    const [localPart, domain] = parts;
    if (!localPart) return "Email must have text before @";
    if (!domain) return "Email must have domain after @";
    if (!domain.includes(".")) return "Email domain must contain a dot (.)";

    const validExtensions = [
      ".com",
      ".org",
      ".net",
      ".edu",
      ".gov",
      ".mil",
      ".int",
      ".co",
      ".io",
      ".ai",
      ".tech",
      ".info",
      ".biz",
      ".name",
      ".pro",
    ];
    const hasValidExtension = validExtensions.some((ext) =>
      domain.toLowerCase().endsWith(ext)
    );
    if (!hasValidExtension)
      return "Email must end with a valid domain extension (.com, .org, etc.)";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";

    return "";
  };

  const validateUrl = (url: string) => {
    if (!url) return "Website URL is required";
    try {
      const urlObj = new URL(url);
      if (!["http:", "https:"].includes(urlObj.protocol)) {
        return "URL must start with http:// or https://";
      }
      return "";
    } catch {
      return "Please enter a valid URL (e.g., https://example.com)";
    }
  };

  const handleAuditClick = (auditType: string) => {
    setCurrentStep("url-input");
  };

  const handleAnalyze = async () => {
    const urlValidation = validateUrl(websiteUrl);
    const emailValidation = validateEmail(email);
    setUrlError(urlValidation);
    setEmailError(emailValidation);
    if (urlValidation || emailValidation || !captchaChecked) return;

    setCurrentStep("scanning");
    setIsScanning(true);

    try {
      const response = await fetch(
        "https://secureanalyser.goaideme.com/report",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: websiteUrl, email }),
        }
      );

      const data = await response.json();
      setRequestId(data?.requestId);

      if (!response.ok) {
        throw new Error(data.message || "Failed to analyze website");
      }

      const { requestId } = data;
      if (requestId) {
        sessionStorage.setItem("reportId", requestId);
      } else {
        throw new Error("No ID returned from the API");
      }

      setIsScanning(false);
      setShowPartialResults(true);
      setCurrentStep("partial-results");
    } catch (error: any) {
      setIsScanning(false);
      setUrlError(
        error.message || "An error occurred while analyzing the website"
      );
    }
  };

  useEffect(() => {
    if (!requestId) return;
    let interval: NodeJS.Timeout;
    const fetchStatus = async () => {
      try {
        const res = await fetch(
          `https://secureanalyser.goaideme.com/report/status/${requestId}`
        );
        if (!res.ok) throw new Error("Failed to fetch status");
        const data = await res.json();
        setStatus(data);
        if (data.status === "completed") {
          clearInterval(interval);
        }
      } catch (error) {
        console.error("Error fetching report status:", error);
      }
    };
    fetchStatus();
    interval = setInterval(fetchStatus, 15000);
    return () => clearInterval(interval);
  }, [requestId]);

  const handleViewAllResults = () => {
    setShowEmailGate(true);
  };

  const handleEmailSubmit = () => {
    setShowEmailGate(false);
    setShowFullResults(true);
    // setCurrentStep("full-results");
  };

  return (
    <>
      {currentStep === "landing" && (
        <LandingPage handleAuditClick={handleAuditClick} />
      )}
      {currentStep === "url-input" && (
        <UrlInputForm
          websiteUrl={websiteUrl}
          setWebsiteUrl={setWebsiteUrl}
          email={email}
          setEmail={setEmail}
          urlError={urlError}
          setUrlError={setUrlError}
          emailError={emailError}
          setEmailError={setEmailError}
          captchaChecked={captchaChecked}
          setCaptchaChecked={setCaptchaChecked}
          handleAnalyze={handleAnalyze}
        />
      )}
      {(currentStep === "scanning" || status?.status === "processing") && (
        <ScanningAnimation />
      )}
      {currentStep === "partial-results" && status?.status === "completed" && (
        <ResultsModal
          status={status}
          websiteUrl={websiteUrl}
          showEmailGate={showEmailGate}
          setShowEmailGate={setShowEmailGate}
          handleViewAllResults={handleViewAllResults}
          handleEmailSubmit={handleEmailSubmit}
        />
      )}
    </>
  );
}
