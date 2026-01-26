import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory store for development - replace with database in production
// For production, use Supabase or similar
const subscribers = new Set<string>();

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

    // Check if already subscribed (in production, check your database)
    if (subscribers.has(email.toLowerCase())) {
      return NextResponse.json(
        { error: "You're already on the list" },
        { status: 409 }
      );
    }

    // Add to Resend audience
    // You'll need to create an audience in Resend dashboard first
    // and replace this with your audience ID
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email: email.toLowerCase(),
        audienceId: process.env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      });
    }

    // Send confirmation email
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "FlyQuest <onboarding@resend.dev>",
      to: email,
      subject: "You're on the list. Let's build.",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #000000; color: #ffffff;">
          <h1 style="color: #ffcf00; font-size: 28px; margin-bottom: 24px;">Welcome to FlyQuest</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin-bottom: 20px;">
            You just joined a waitlist of students and graduates who are done waiting for permission to succeed.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #a3a3a3; margin-bottom: 20px;">
            Here's what you can expect from us: <strong style="color: #ffffff;">no spam, no fluff, no motivational nonsense.</strong> 
            Just practical insights, real frameworks, and the playbook the education system never gave you.
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #a3a3a3; margin-bottom: 20px;">
            We're building this alongside you — your feedback, your questions, your experiences will shape what FlyQuest becomes. 
            When we launch, you'll be first to know.
          </p>
          
          <div style="border-left: 3px solid #ffcf00; padding-left: 20px; margin: 32px 0;">
            <p style="font-size: 14px; color: #ffffff; font-style: italic; margin: 0;">
              "Education is free. Learning is priceless."
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #a3a3a3; margin-bottom: 20px;">
            In the meantime, if you want to see the journey unfold in real time:
          </p>

          <p style="margin-bottom: 32px;">
            <a href="https://www.linkedin.com/in/tlangi/" style="color: #ffcf00; text-decoration: none;">→ Follow on LinkedIn</a>
            <br><br>
            <a href="https://www.youtube.com/watch?v=lwmURnsLQpE" style="color: #ffcf00; text-decoration: none;">→ Watch the TEDx Talk</a>
          </p>
          
          <p style="font-size: 14px; color: #525252; margin-top: 40px;">
            — Tlangelani Khosa (TK)<br>
            Founder, FlyQuest
          </p>
        </div>
      `,
    });

    // Add to local store (replace with database insert in production)
    subscribers.add(email.toLowerCase());

    // Log for analytics (in production, log to your analytics service)
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
