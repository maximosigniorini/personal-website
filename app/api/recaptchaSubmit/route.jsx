import { NextResponse } from "next/server";
import axios from "axios";

export const runtime = "edge";

export async function POST(request) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // Parse the JSON body from the request
  const postData = await request.json();
  const { gRecaptchaToken } = postData;

  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    // Make a POST request to verify the reCAPTCHA token
    const res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    // Check if reCAPTCHA verification was successful and the score is acceptable
    if (res.data?.success && res.data?.score > 0.5) {
      console.log("reCAPTCHA Score:", res.data.score);
      return NextResponse.json({
        success: true,
        score: res.data.score,
      });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return NextResponse.json({ success: false });
  }
}
