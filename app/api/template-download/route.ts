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
      subject: "Here's the CV template you requested",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 24px; background-color: #0a0a0a; color: #ffffff;">
          
          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin: 0 0 20px 0;">
            Hey,
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin: 0 0 24px 0;">
            Thanks for downloading. Here are your templates:
          </p>

          <div style="margin: 0 0 12px 0;">
            <a href="https://flyquest.co.za/downloads/FlyQuest-CV-Template-General.docx" style="display: inline-block; background-color: #ffcf00; color: #000000; padding: 12px 24px; text-decoration: none; font-weight: bold; font-size: 14px;">
              Download General Template
            </a>
          </div>
          
          <div style="margin: 0 0 28px 0;">
            <a href="https://flyquest.co.za/downloads/FlyQuest-CV-Template-Tech.docx" style="display: inline-block; background-color: transparent; color: #ffcf00; padding: 12px 24px; text-decoration: none; font-weight: bold; font-size: 14px; border: 2px solid #ffcf00;">
              Download Tech Template
            </a>
          </div>

          <div style="background-color: #141414; padding: 20px; margin: 0 0 28px 0;">
            <p style="font-size: 14px; color: #ffffff; margin: 0 0 12px 0; font-weight: bold;">Quick tips:</p>
            <p style="font-size: 14px; line-height: 1.8; color: #a3a3a3; margin: 0;">
              • Keep it to 1 page (2 max if you have 3+ years experience)<br>
              • Quantify achievements — numbers catch the eye<br>
              • Save as PDF: <span style="color: #e5e5e5;">FirstName_LastName_CV.pdf</span>
            </p>
          </div>

          <div style="background-color: #171717; border-left: 3px solid #ffcf00; padding: 20px; margin: 0 0 28px 0;">
            <p style="font-size: 16px; line-height: 1.5; color: #ffffff; margin: 0 0 12px 0; font-weight: bold;">
              Still not getting callbacks?
            </p>
            <p style="font-size: 14px; line-height: 1.5; color: #a3a3a3; margin: 0 0 16px 0;">
              I'll personally review your CV and record a video showing you exactly what to fix. 48-hour turnaround.
            </p>
            <a href="https://flyquest.co.za/cv#paid" style="display: inline-block; background-color: #ffcf00; color: #000000; padding: 12px 24px; text-decoration: none; font-weight: bold; font-size: 14px;">
              Book a CV Clarity Call — R440
            </a>
          </div>
          
          <p style="font-size: 14px; color: #737373; margin: 0 0 0 0; line-height: 1.5;">
            — TK<br>
            <span style="font-size: 13px; color: #525252;">tlangi@flyquest.co.za</span>
          </p>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #333;">
            <p style="font-size: 11px; color: #525252; margin: 0;">
              You received this because you downloaded a CV template from FlyQuest.<br>
              <a href="mailto:tlangi@flyquest.co.za?subject=Unsubscribe&body=Please remove me from the FlyQuest mailing list. Email: ${email}" style="color: #525252;">Unsubscribe</a> · 
              <a href="https://flyquest.co.za/privacy" style="color: #525252;">Privacy Policy</a>
            </p>
          </div>
        </div>
      `,
    });

    // Send admin notification if enabled
    if (process.env.SEND_ADMIN_NOTIFICATION === 'true' && process.env.ADMIN_EMAIL) {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "FlyQuest <tlangi@flyquest.co.za>",
        to: process.env.ADMIN_EMAIL,
        subject: `📥 New CV template download: ${email}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
            <p><strong>New CV template download</strong></p>
            <p>Email: ${email}</p>
            <p>Time: ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}</p>
          </div>
        `,
      });
    }

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
