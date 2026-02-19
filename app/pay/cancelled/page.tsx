"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function PaymentCancelledPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-flyquest-gold selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      <Navigation />

      <section className="relative px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Payment Cancelled
          </h1>
          
          <p className="text-neutral-400 text-lg mb-8">
            No worries — your payment wasn't processed and you haven't been charged.
          </p>

          {/* Options */}
          <div className="space-y-4 mb-12">
            <Link
              href="/pay"
              className="block w-full bg-flyquest-gold text-black font-display font-bold px-8 py-4 hover:bg-white transition-colors text-center tracking-wide uppercase"
            >
              Try Again
            </Link>
            
            <Link
              href="/cv"
              className="block w-full bg-transparent border border-neutral-700 text-white font-display font-bold px-8 py-4 hover:border-flyquest-gold hover:text-flyquest-gold transition-colors text-center tracking-wide uppercase"
            >
              Back to CV Page
            </Link>
          </div>

          {/* Help */}
          <div className="bg-neutral-950 border border-neutral-800 p-6">
            <p className="text-neutral-400 mb-4">
              Having trouble with payment? Common fixes:
            </p>
            <ul className="text-neutral-500 text-sm space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-flyquest-gold">•</span>
                Check your card has sufficient funds
              </li>
              <li className="flex items-start gap-2">
                <span className="text-flyquest-gold">•</span>
                Try a different card or payment method
              </li>
              <li className="flex items-start gap-2">
                <span className="text-flyquest-gold">•</span>
                Disable your VPN if you have one active
              </li>
              <li className="flex items-start gap-2">
                <span className="text-flyquest-gold">•</span>
                Contact your bank if the issue persists
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-neutral-800">
              <p className="text-neutral-500 text-sm">
                Still stuck? Email me at{" "}
                <a href="mailto:tlangi@flyquest.co.za" className="text-flyquest-gold hover:text-white transition-colors">
                  tlangi@flyquest.co.za
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
