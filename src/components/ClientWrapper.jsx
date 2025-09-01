"use client";
import { useEffect, useState } from "react";
import AnimationHeader from "./animation_header";
import Login from "@/components/Login/page";
import { config } from "../../config";

export default function ClientWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // new state
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetchHomeData().finally(() => setIsCheckingAuth(false));
    } else {
      setIsCheckingAuth(false); // done checking, user not logged in
    }
  }, []);

  const fetchHomeData = async () => {
    try {
      const res = await fetch(`${config.APP_URL}/secure-plugin/v1/home`, { cache: "no-store" });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching home data:", err);
    }
  };

  const handleLoginSuccess = () => {
    localStorage.setItem("token", "true"); // store login status
    setIsLoggedIn(true); // update state immediately
    fetchHomeData(); // fetch data after login
  };

  // Wait until we finish checking auth
  if (isCheckingAuth) {
    return null; // or you can return a small loader if you want
  }

  if (!isLoggedIn) {
    return <Login onSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      <AnimationHeader />

      {typeof children === "function" ? children(data) : children}
    </>
  );
}
