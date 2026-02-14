import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Add to Resend audience if configured
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email: email.toLowerCase(),
          audienceId: process.env.RESEND_AUDIENCE_ID,
          unsubscribed: false,
        });
      } catch (e) {
        // Contact might already exist, continue anyway
        console.log("[FlyQuest] Contact may already exist:", e);
      }
    }

    // Send email with template download link
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "FlyQuest <tlangi@flyquest.co.za>",
      to: email,
      subject: "Your FlyQuest CV Template is here",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #000000; color: #ffffff;">
          <h1 style="color: #ffcf00; font-size: 28px; margin-bottom: 24px;">Your CV Template is Ready</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin-bottom: 20px;">
            Thanks for downloading The FlyQuest CV Template. This is the same framework I use to help students land interviews.
          </p>

          <div style="background-color: #171717; border: 1px solid #262626; padding: 24px; margin: 24px 0;">
            <p style="font-size: 14px; color: #ffcf00; margin: 0 0 12px 0; font-weight: bold;">DOWNLOAD YOUR TEMPLATE:</p>
            <p style="margin: 0;">
              <a href="https://docs.google.com/document/d/YOUR_TEMPLATE_ID/copy" style="color: #ffcf00; text-decoration: none; font-size: 16px;">
                → Google Docs Version (click to make a copy)
              </a>
            </p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #a3a3a3; margin-bottom: 20px;">
            <strong style="color: #ffffff;">Quick tips for using the template:</strong>
          </p>
          
          <ul style="font-size: 15px; line-height: 1.8; color: #a3a3a3; padding-left: 20px; margin-bottom: 24px;">
            <li>Keep it to 1-2 pages max</li>
            <li>Use keywords from the job description</li>
            <li>Quantify your achievements where possible</li>
            <li>Remove the "References available on request" line — it's outdated</li>
          </ul>

          <div style="border-left: 3px solid #ffcf00; padding-left: 20px; margin: 32px 0;">
            <p style="font-size: 15px; color: #e5e5e5; margin: 0 0 12px 0;">
              <strong>Want personalised feedback on your CV?</strong>
            </p>
            <p style="font-size: 14px; color: #a3a3a3; margin: 0;">
              Book a CV Clarity Call and get a detailed video breakdown tailored to your target role.
            </p>
            <p style="margin: 16px 0 0 0;">
              <a href="https://flyquest.co.za/services" style="color: #ffcf00; text-decoration: none;">
                Learn more →
              </a>
            </p>
          </div>
          
          <p style="font-size: 14px; color: #525252; margin-top: 40px;">
            — Tlangelani Khosa (TK)<br>
            Founder, FlyQuest
          </p>
        </div>
      `,
    });

    // Log for analytics
    console.log(`[FlyQuest] Template download: ${email} at ${new Date().toISOString()}`);

    return NextResponse.json(
      { message: "Template sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[FlyQuest] Template download error:", error);
    return NextResponse.json(
      { error: "Failed to send template. Please try again." },
      { status: 500 }
    );
  }
}
