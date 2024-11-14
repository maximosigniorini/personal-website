"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React from "react";

export default function GoogleCaptchaWrapper({ children }) {
  // Get the reCAPTCHA site key from environment variables
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY || "NOT DEFINED";

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
