"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-flyquest-gold selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      <Navigation />

      <section className="relative px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-flyquest-gold rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            You're All Set!
          </h1>
          
          <p className="text-neutral-400 text-lg mb-12">
            Payment received. Your CV Clarity Call is being prepared.
          </p>

          {/* What Happens Next */}
          <div className="bg-neutral-950 border border-neutral-800 p-8 text-left mb-12">
            <p className="text-flyquest-gold font-mono text-sm mb-6">WHAT HAPPENS NEXT</p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-flyquest-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-flyquest-gold font-display font-bold">1</span>
                </div>
                <div>
                  <p className="font-bold mb-1">I review your CV</p>
                  <p className="text-neutral-400 text-sm">I'll go through your CV in detail, noting what's working and what needs improvement.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-flyquest-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-flyquest-gold font-display font-bold">2</span>
                </div>
                <div>
                  <p className="font-bold mb-1">You receive your video</p>
                  <p className="text-neutral-400 text-sm">Within 48 hours, you'll get an email with a link to your personalised Loom video (10-15 mins).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-flyquest-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-flyquest-gold font-display font-bold">3</span>
                </div>
                <div>
                  <p className="font-bold mb-1">Ask follow-up questions</p>
                  <p className="text-neutral-400 text-sm">Got questions after watching? Reply to the email — one round of follow-ups is included.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Check Email Reminder */}
          <div className="bg-flyquest-gold/10 border border-flyquest-gold/30 p-6 mb-12">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-flyquest-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-left">
                <p className="font-bold mb-1">Check your inbox</p>
                <p className="text-neutral-400 text-sm">
                  You should receive a confirmation email shortly. If you don't see it, check your spam folder or contact me at{" "}
                  <a href="mailto:tlangi@flyquest.co.za" className="text-flyquest-gold hover:text-white transition-colors">
                    tlangi@flyquest.co.za
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <p className="text-neutral-500">While you wait, let's connect:</p>
            <a
              href="https://www.linkedin.com/in/tlangi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-flyquest-gold hover:text-white transition-colors"
            >
              Follow me on LinkedIn
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Back to Home */}
          <div className="mt-12">
            <Link 
              href="/" 
              className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm"
            >
              ← Back to FlyQuest
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
