import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Search } from "lucide-react";

interface UrlInputFormProps {
  websiteUrl: string;
  setWebsiteUrl: (url: string) => void;
  email: string;
  setEmail: (email: string) => void;
  urlError: string;
  setUrlError: (error: string) => void;
  emailError: string;
  setEmailError: (error: string) => void;
  captchaChecked: boolean;
  setCaptchaChecked: (checked: boolean) => void;
  handleAnalyze: () => void;
}

export default function UrlInputForm({
  websiteUrl,
  setWebsiteUrl,
  email,
  setEmail,
  urlError,
  setUrlError,
  emailError,
  setEmailError,
  captchaChecked,
  setCaptchaChecked,
  handleAnalyze,
}: UrlInputFormProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/galaxy-glowing-earth.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <main className="relative mt-24 mb-16 z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-2xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free Website <span style={{ color: "#34AEDB" }}>Grader</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Quickly see how your website performs with ROI Amplified's Free
            Website Grader. Just enter your URL to get an instant report filled
            with clear, actionable recommendations to improve your SEO and
            overall site performance.
          </p>
        </div>
        <div className="w-full max-w-md space-y-4">
          <div className="relative">
            <input
              type="url"
              placeholder="Enter your website URL (e.g., https://example.com)"
              value={websiteUrl}
              onChange={(e) => {
                setWebsiteUrl(e.target.value);
                if (urlError) setUrlError("");
              }}
              className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all hover:bg-slate-700/50 ${
                urlError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-slate-600"
              }`}
              // style={{
              //   focusRingColor: urlError ? undefined : "#34AEDB",
              // }}
            />
            {urlError && (
              <p className="text-red-400 text-sm mt-1">{urlError}</p>
            )}
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all hover:bg-slate-700/50 ${
                emailError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-slate-600"
              }`}
              // style={{
              //   focusRingColor: emailError ? undefined : "#34AEDB",
              // }}
            />
            {emailError && (
              <p className="text-red-400 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="captcha"
              checked={captchaChecked}
              onChange={(e) => setCaptchaChecked(e.target.checked)}
              className="w-5 h-5 bg-slate-800/50 border-slate-600 rounded focus:ring-2"
              style={{
                accentColor: "#34AEDB",
              }}
            />
            <label htmlFor="captcha" className="text-gray-300 text-sm">
              I'm not a robot (Captcha verification)
            </label>
          </div>
          <Button
            onClick={handleAnalyze}
            className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg w-full text-white primary-btn-style"
            disabled={!websiteUrl || !email || !captchaChecked}
          >
            Analyze Now →
          </Button>
          <p className="text-sm text-gray-400 text-center">
            Free analysis • No signup required • Results in 30 seconds
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl">
          <Card className="bg-slate-800/50 border-slate-600 p-6 text-center hover:bg-slate-700/50 transition-colors">
            <Zap
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: "#34AEDB" }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Performance Analysis
            </h3>
            <p className="text-gray-400 text-sm">
              Check loading speed, Core Web Vitals, and optimization
              opportunities
            </p>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 p-6 text-center hover:bg-slate-700/50 transition-colors">
            <Search
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: "#34AEDB" }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">SEO Audit</h3>
            <p className="text-gray-400 text-sm">
              Analyze meta tags, content structure, and search visibility
            </p>
          </Card>
          <Card className="bg-slate-800/50 border-slate-600 p-6 text-center hover:bg-slate-700/50 transition-colors">
            <Shield
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: "#34AEDB" }}
            />
            <h3 className="text-xl font-semibold text-white mb-2">
              Security Check
            </h3>
            <p className="text-gray-400 text-sm">
              Identify vulnerabilities and security best practices
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
}
