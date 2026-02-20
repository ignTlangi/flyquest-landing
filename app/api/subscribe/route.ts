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

    // Send confirmation email
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "FlyQuest <tlangi@flyquest.co.za>",
      to: email,
      subject: "Welcome to FlyQuest",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 24px; background-color: #0a0a0a; color: #ffffff;">
          
          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin: 0 0 20px 0;">
            Hey,
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin: 0 0 20px 0;">
            Thanks for joining. You're now part of a community of students and grads who are figuring it out together.
          </p>
          
          <p style="font-size: 15px; line-height: 1.6; color: #a3a3a3; margin: 0 0 28px 0;">
            No spam, no fluff. Just practical stuff that actually helps.
          </p>

          <div style="margin: 0 0 28px 0;">
            <p style="font-size: 14px; color: #737373; margin: 0 0 12px 0;">Start here:</p>
            <a href="https://flyquest.co.za/cv" style="display: inline-block; background-color: #ffcf00; color: #000000; padding: 12px 24px; text-decoration: none; font-weight: bold; font-size: 14px;">
              Download CV Templates
            </a>
          </div>

          <div style="border-top: 1px solid #333; padding-top: 24px;">
            <p style="font-size: 14px; color: #737373; margin: 0 0 12px 0;">Follow the journey:</p>
            <p style="margin: 0 0 8px 0;">
              <a href="https://www.linkedin.com/in/tlangi/" style="color: #ffcf00; text-decoration: none; font-size: 15px;">→ LinkedIn</a>
            </p>
            <p style="margin: 0;">
              <a href="https://www.youtube.com/watch?v=lwmURnsLQpE" style="color: #ffcf00; text-decoration: none; font-size: 15px;">→ TEDx Talk</a>
            </p>
          </div>
          
          <p style="font-size: 14px; color: #737373; margin: 32px 0 0 0; line-height: 1.5;">
            — TK<br>
            <span style="font-size: 13px; color: #525252;">tlangi@flyquest.co.za</span>
          </p>

          <p style="font-size: 12px; color: #525252; margin: 28px 0 0 0;">
            If this landed in Promotions, move it to Primary so you don't miss anything.
          </p>
        </div>
      `,
    });

    // Log for analytics
    console.log(`[FlyQuest] New subscriber: ${email} at ${new Date().toISOString()}`);

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[FlyQuest] Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
