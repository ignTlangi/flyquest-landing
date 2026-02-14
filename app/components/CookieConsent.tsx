"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("flyquest-cookie-consent");
    if (!consent) {
      // Small delay before showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("flyquest-cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("flyquest-cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-neutral-300 text-sm leading-relaxed">
            We use cookies to improve your experience and analyse site traffic. 
            By continuing, you agree to our use of cookies in accordance with POPIA.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-neutral-400 hover:text-white transition-colors text-sm font-mono"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-flyquest-gold text-black font-bold hover:bg-white transition-colors text-sm font-mono"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
