"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PaymentPage() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("63101880416");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendPOPEmail = () => {
    const reference = name ? `FQ ${name.toUpperCase().split(' ')[0]} CV` : "FQ [NAME] CV";
    const subject = encodeURIComponent("CV Clarity Call - Proof of Payment");
    const body = encodeURIComponent(`Hi TK,

I've just made payment for the CV Clarity Call.

Name: ${name || "[Your Name]"}
Reference Used: ${reference}
Amount: R440

[Please attach your proof of payment to this email]

Thanks!`);
    window.location.href = `mailto:tlangi@flyquest.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-flyquest-gold selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      <Navigation />

      <section className="relative px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-flyquest-gold/10 border border-flyquest-gold/30 px-4 py-2 mb-6">
              <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-flyquest-gold font-mono text-sm">Secure Checkout</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Complete Your Booking
            </h1>
            <p className="text-neutral-400">
              You're one step away from getting personalised CV feedback.
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-neutral-950 border border-neutral-800 p-8 mb-8">
            <p className="text-flyquest-gold font-mono text-sm mb-6">ORDER SUMMARY</p>
            
            <div className="flex justify-between items-start mb-6 pb-6 border-b border-neutral-800">
              <div>
                <h3 className="font-display font-bold text-xl mb-2">CV Clarity Call</h3>
                <ul className="space-y-2 text-neutral-400 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalised video review (10-15 mins)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Delivered within 48 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Follow-up questions included
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Satisfaction guaranteed
                  </li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-neutral-500 line-through text-sm">R650</p>
                <p className="font-display text-3xl font-bold text-flyquest-gold">R440</p>
                <p className="text-neutral-500 text-xs">Launch pricing</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-lg">
              <span className="font-bold">Total</span>
              <span className="font-display font-bold text-2xl">R440</span>
            </div>
          </div>

          {/* EFT Payment Details */}
          <div className="bg-flyquest-gold/5 border-2 border-flyquest-gold p-8 mb-8">
            <p className="text-flyquest-gold font-mono text-sm mb-4">PAYMENT DETAILS (EFT)</p>
            
            <div className="space-y-4 text-white">
              <div className="flex justify-between">
                <span className="text-neutral-400">Bank:</span>
                <span className="font-mono">FNB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Account Holder:</span>
                <span className="font-mono">Tlangelani N N Khosa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Account Type:</span>
                <span className="font-mono">FNB Fusion Aspire</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Account Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono">63101880416</span>
                  <button
                    onClick={copyAccountNumber}
                    className="text-flyquest-gold hover:text-white transition-colors p-1"
                    title="Copy account number"
                  >
                    {copied ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Branch Code:</span>
                <span className="font-mono">250655</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-neutral-400">Reference:</span>
                <div className="text-right">
                  <span className="font-mono text-flyquest-gold">FQ [NAME] CV</span>
                  <p className="text-neutral-500 text-xs mt-1">e.g. FQ JSMITH CV</p>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Amount:</span>
                <span className="font-mono font-bold">R440.00</span>
              </div>
            </div>
          </div>

          {/* Send Proof of Payment */}
          <div className="bg-neutral-950 border border-neutral-800 p-6 mb-8">
            <p className="text-flyquest-gold font-mono text-sm mb-4">AFTER PAYMENT</p>
            <p className="text-neutral-400 text-sm mb-4">
              Enter your name and click below to send your proof of payment:
            </p>
            <div className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full bg-neutral-900 border border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-flyquest-gold transition-colors font-mono text-sm"
              />
              <button
                onClick={sendPOPEmail}
                className="w-full bg-flyquest-gold text-black font-display font-bold px-6 py-4 hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Proof of Payment Email
              </button>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-neutral-950 border border-neutral-800 p-6 mb-8">
            <p className="font-bold mb-4">After sending proof of payment:</p>
            <ol className="space-y-3 text-neutral-400 text-sm">
              <li className="flex gap-3">
                <span className="text-flyquest-gold font-mono">1.</span>
                I'll confirm receipt within a few hours
              </li>
              <li className="flex gap-3">
                <span className="text-flyquest-gold font-mono">2.</span>
                Your personalised video review will be delivered within 48 hours
              </li>
              <li className="flex gap-3">
                <span className="text-flyquest-gold font-mono">3.</span>
                Reply to the email with any follow-up questions
              </li>
            </ol>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-500 text-sm mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>48-hour delivery</span>
            </div>
          </div>

          {/* Reviewer */}
          <div className="pt-8 border-t border-neutral-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/flyquest-tk-headshot-head.jpg"
                  alt="TK - Tlangelani Khosa"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-bold">Reviewed by TK</p>
                <p className="text-neutral-500 text-sm">TEDx Speaker • Software Engineer • 10K+ LinkedIn community</p>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link href="/cv" className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm">
              ← Back to CV page
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
