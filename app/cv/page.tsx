"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function CVPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleTemplateDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/template-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Check your inbox! The template is on its way.");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection failed. Check your internet and try again.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-flyquest-gold selection:text-black">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      <Navigation />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-500 font-mono text-sm">Now accepting bookings</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
            Get Your CV Right
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Your CV is your first impression. Most get filtered out by robots before a human 
            ever sees them. Let's fix that.
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute top-32 right-12 lg:right-24 w-64 h-64 bg-flyquest-gold/5 blur-3xl rounded-full hidden lg:block" />
      </section>

      {/* Free Template Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 border border-white/20 px-4 py-2 mb-6">
                <span className="text-white font-mono text-sm font-bold">FREE RESOURCE</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                The FlyQuest CV Template
              </h2>
              
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                The same ATS-optimised framework I use to help students land interviews. 
                Clean, professional, and designed to get past the robots.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ATS-friendly format that passes automated screening</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Clear structure that highlights your strengths</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Guidelines on what to include (and what to leave out)</span>
                </li>
              </ul>

              {/* Email Capture for Template */}
              <form onSubmit={handleTemplateDownload}>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 bg-neutral-900 border border-neutral-800 px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-flyquest-gold transition-colors font-mono text-sm"
                    disabled={status === "loading" || status === "success"}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="bg-white text-black font-display font-bold px-6 py-4 hover:bg-flyquest-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide uppercase whitespace-nowrap"
                  >
                    {status === "loading" ? "..." : status === "success" ? "Sent!" : "Get Template"}
                  </button>
                </div>
                {message && (
                  <p className={`mt-4 text-sm font-mono ${status === "success" ? "text-flyquest-gold" : "text-red-400"}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>

            {/* Template Preview - Actual CV Image Blurred */}
            <div className="relative">
              <div className="bg-white aspect-[3/4] overflow-hidden relative select-none">
                {/* Actual CV Preview - Light blur to show structure */}
                <img 
                  src="/images/cv-preview.webp"
                  alt="CV Template Preview"
                  className="w-full h-full object-cover object-top blur-[3px] pointer-events-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />

                {/* Gradient Overlay - lighter at top to show content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-8">
                  <div className="text-center px-4">
                    <p className="text-white font-display font-bold text-xl mb-2">FlyQuest CV Template</p>
                    <p className="text-neutral-300 text-sm">Enter your email to unlock</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-flyquest-gold text-black font-display font-bold px-4 py-2 text-sm">
                FREE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="flex-1 h-px bg-neutral-800"></div>
          <span className="text-neutral-600 font-mono text-sm">or get personalised help</span>
          <div className="flex-1 h-px bg-neutral-800"></div>
        </div>
      </div>

      {/* How It Works */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8 text-center">
            How It Works
          </p>

          <div className="grid sm:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-flyquest-gold text-black font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-display font-bold mb-2">Submit</h3>
              <p className="text-neutral-500 text-sm">Fill out the form and upload your CV</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-flyquest-gold text-black font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-display font-bold mb-2">Pay</h3>
              <p className="text-neutral-500 text-sm">Complete secure payment via Yoco</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-flyquest-gold text-black font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-display font-bold mb-2">Review</h3>
              <p className="text-neutral-500 text-sm">I record your personalised video within 48hrs</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-flyquest-gold text-black font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-display font-bold mb-2">Improve</h3>
              <p className="text-neutral-500 text-sm">Implement feedback and land interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Service Section */}
      <section id="paid" className="relative px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-black via-neutral-950 to-black scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-flyquest-gold px-4 py-2 mb-6">
                <span className="text-black font-mono text-sm font-bold">PERSONALISED REVIEW</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                CV Clarity Call
              </h2>
              
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                A detailed, personalised video breakdown of your CV. I'll show you exactly 
                what's working, what's not, and how to tailor it for your dream role.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalised Loom video (10-15 min) reviewing your CV line by line</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Specific feedback tailored to your target role and industry</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ATS optimisation tips to get past automated screening</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Actionable next steps you can implement immediately</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One round of follow-up questions included</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-300">
                  <svg className="w-5 h-5 text-flyquest-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Delivered within 48 hours</span>
                </li>
              </ul>

              {/* Satisfaction Guarantee */}
              <div className="bg-flyquest-gold/5 border border-flyquest-gold/20 p-4 mb-8">
                <p className="text-neutral-300 text-sm">
                  <span className="text-flyquest-gold font-bold">Satisfaction Guarantee:</span> If you're 
                  not satisfied with your review, I'll re-review your CV or give you a full refund. No questions asked.
                </p>
              </div>

              <a
                href="https://tally.so/r/Gxd4YL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-flyquest-gold text-black font-display font-bold px-8 py-4 hover:bg-white transition-colors text-sm tracking-wide uppercase"
              >
                <span>Book Your Review</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Condensed Bio */}
              <div className="mt-8 pt-8 border-t border-neutral-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/flyquest-tk-headshot-head.jpg"
                      alt="TK - Tlangelani Khosa"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold mb-1">Your Reviewer: TK</p>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      TEDx Speaker. Software Engineer. Elevate Africa Top 25. I've reviewed hundreds of CVs 
                      and know what gets past ATS systems and what catches a hiring manager's eye.
                    </p>
                    <Link href="/about" className="text-flyquest-gold text-sm mt-2 inline-block hover:text-white transition-colors">
                      Learn more about me →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative">
              <div className="bg-black border-2 border-flyquest-gold p-8 sticky top-32">
                {/* Launch Badge */}
                <div className="absolute -top-4 -right-4 bg-flyquest-gold text-black font-mono text-xs font-bold px-3 py-1">
                  LAUNCH PRICE
                </div>

                <p className="text-flyquest-gold font-mono text-sm mb-2">CV CLARITY CALL</p>
                
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-neutral-500 line-through font-display text-2xl">R650</span>
                  <span className="font-display text-5xl md:text-6xl font-bold">R440</span>
                </div>
                <p className="text-neutral-500 text-sm mb-6">Launch pricing — limited time</p>

                <div className="border-t border-neutral-800 pt-6 mb-6">
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    This isn't a generic template or automated feedback. It's me, personally 
                    reviewing your CV, understanding your goals, and giving you a clear path forward.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm">Personalised video review</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm">48-hour turnaround</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm">Follow-up questions included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 text-sm">Satisfaction guaranteed</span>
                  </div>
                </div>

                <a
                  href="https://tally.so/r/Gxd4YL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-flyquest-gold text-black font-display font-bold px-8 py-4 hover:bg-white transition-colors text-sm tracking-wide uppercase text-center"
                >
                  Book Now — R440
                </a>

                <p className="text-neutral-600 text-xs text-center mt-4">
                  Limited to 5 spots per week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Who is this for?
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-neutral-950 border border-neutral-800 p-6 hover:border-flyquest-gold/50 transition-colors">
              <div className="w-10 h-10 bg-flyquest-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-flyquest-gold font-display font-bold">1</span>
              </div>
              <p className="text-flyquest-gold font-mono text-sm mb-3">STUDENTS</p>
              <p className="text-neutral-400">
                Applying for internships, bursaries, or graduate programmes. Your CV needs to stand out from thousands.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 hover:border-flyquest-gold/50 transition-colors">
              <div className="w-10 h-10 bg-flyquest-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-flyquest-gold font-display font-bold">2</span>
              </div>
              <p className="text-flyquest-gold font-mono text-sm mb-3">GRADUATES</p>
              <p className="text-neutral-400">
                Stuck in the application black hole. You've sent 50+ CVs with no response. Something's not working.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 hover:border-flyquest-gold/50 transition-colors">
              <div className="w-10 h-10 bg-flyquest-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-flyquest-gold font-display font-bold">3</span>
              </div>
              <p className="text-flyquest-gold font-mono text-sm mb-3">CAREER CHANGERS</p>
              <p className="text-neutral-400">
                Pivoting to a new field and need to reframe your experience for a different audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            What People Are Saying
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-950 border border-neutral-800 p-6 text-left">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-flyquest-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 italic mb-4">
                "TK's feedback was incredibly detailed and specific. He pointed out things I never would have noticed. 
                Within two weeks of updating my CV, I landed three interviews."
              </p>
              <p className="text-neutral-500 text-sm">— Mogau Sehlapelo</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 text-left">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-flyquest-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-300 italic mb-4">
                "I was sending out applications for months with no response. After implementing TK's suggestions, 
                I finally understood what I was doing wrong. Game changer."
              </p>
              <p className="text-neutral-500 text-sm">— Shingai Dzino</p>
            </div>
          </div>

          <p className="text-neutral-600 text-sm mt-6">
            Reviews from students who transformed their job search.
          </p>
        </div>
      </section>

      {/* About the Reviewer - Expanded */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            Your Reviewer
          </p>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 overflow-hidden flex-shrink-0">
              <Image
                src="/images/flyquest-tk-headshot-head.jpg"
                alt="TK - Tlangelani Khosa"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-display text-3xl font-bold mb-6">
                Tlangelani Khosa (TK)
              </h3>
              
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  Software Engineer. TEDx Speaker. Someone who's been rejected, redirected, and 
                  finally figured out how to get through the door.
                </p>
                
                <p>
                  In 2021, I was rejected from every university I applied to. Today, I work as a 
                  software engineer, I've spoken on the TEDx stage at the University of Pretoria, 
                  and I've built a community of <span className="text-white">10,000+ students</span> navigating the same journey.
                </p>

                <p>
                  I've reviewed hundreds of CVs and seen the same mistakes over and over. I know 
                  what gets filtered out by ATS systems and what catches a hiring manager's eye 
                  in the first 6 seconds. I've been on both sides — the desperate applicant 
                  sending out 50+ applications, and the person helping screen candidates.
                </p>

                <p className="text-neutral-300">
                  This isn't theory. It's pattern recognition from real experience.
                </p>
              </div>

              <div className="mt-8 p-6 bg-black border border-neutral-800">
                <p className="text-flyquest-gold font-mono text-sm mb-4">WHAT I'VE SEEN WORK:</p>
                <ul className="space-y-2 text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="text-flyquest-gold">→</span>
                    <span>Students land interviews at companies they thought were "out of reach"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flyquest-gold">→</span>
                    <span>Graduates break out of the application black hole after 50+ rejections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flyquest-gold">→</span>
                    <span>Career changers successfully reframe their experience for new industries</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/tlangi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-flyquest-gold hover:text-white transition-colors font-mono text-sm"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://www.youtube.com/watch?v=lwmURnsLQpE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-flyquest-gold hover:text-white transition-colors font-mono text-sm"
                >
                  TEDx Talk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Common Questions
          </h2>

          <div className="space-y-8">
            <div className="border-b border-neutral-800 pb-8">
              <h3 className="font-display text-xl font-bold mb-3">How does the CV Clarity Call work?</h3>
              <p className="text-neutral-400">
                After you book and pay, you'll fill out a short form with your CV and target role. 
                Within 48 hours, you'll receive a personalised Loom video where I walk through 
                your CV, highlight what's working, and give specific recommendations for improvement.
              </p>
            </div>

            <div className="border-b border-neutral-800 pb-8">
              <h3 className="font-display text-xl font-bold mb-3">What format should my CV be in?</h3>
              <p className="text-neutral-400">
                PDF or Word (.docx) works best. Please avoid image files, screenshots, or Google Docs links. 
                I need to be able to clearly read and reference specific sections.
              </p>
            </div>

            <div className="border-b border-neutral-800 pb-8">
              <h3 className="font-display text-xl font-bold mb-3">What if I'm not happy with the review?</h3>
              <p className="text-neutral-400">
                If you're not satisfied, I'll either re-review your CV addressing your concerns, 
                or give you a full refund. No awkward conversations, no questions asked. I stand 
                behind my work.
              </p>
            </div>

            <div className="border-b border-neutral-800 pb-8">
              <h3 className="font-display text-xl font-bold mb-3">I'm a student with no work experience. Will this help?</h3>
              <p className="text-neutral-400">
                Absolutely. In fact, that's who I work with most. I'll help you frame your 
                education, projects, volunteering, part-time work, and transferable skills in a way 
                that actually resonates with employers. Everyone has more to offer than they realise.
              </p>
            </div>

            <div className="border-b border-neutral-800 pb-8">
              <h3 className="font-display text-xl font-bold mb-3">How do I receive my review?</h3>
              <p className="text-neutral-400">
                You'll get an email with a private Loom video link within 48 hours of payment. 
                The video is yours to keep and rewatch as many times as you need.
              </p>
            </div>

            <div className="border-b border-neutral-800 pb-8">
              <h3 className="font-display text-xl font-bold mb-3">What if I have follow-up questions after watching?</h3>
              <p className="text-neutral-400">
                You can reply to the delivery email with one round of clarifying questions, and 
                I'll respond within 24 hours. I want to make sure you have everything you need 
                to take action.
              </p>
            </div>

            <div className="border-b border-neutral-800 pb-8">
              <h3 className="font-display text-xl font-bold mb-3">Do you review LinkedIn profiles too?</h3>
              <p className="text-neutral-400">
                Not yet, but it's coming soon. Join the waitlist on the homepage to be first to know 
                when LinkedIn profile reviews launch.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-3">Why should I pay when there are free CV reviews online?</h3>
              <p className="text-neutral-400">
                Free reviews are usually generic templates or AI-generated feedback. This is me, 
                personally spending 30+ minutes understanding your goals and giving you specific, 
                actionable advice tailored to your situation. The students I've helped have landed 
                interviews they never expected. That's the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-neutral-950 to-black border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to fix your CV?
          </h2>
          <p className="text-neutral-400 text-lg mb-8">
            Start with the free template. Or skip ahead and get personalised feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
              className="bg-neutral-800 text-white font-display font-bold px-8 py-4 hover:bg-neutral-700 transition-colors text-sm tracking-wide uppercase border border-neutral-700"
            >
              Get Free Template
            </button>
            <a
              href="https://tally.so/r/Gxd4YL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-flyquest-gold text-black font-display font-bold px-8 py-4 hover:bg-white transition-colors text-sm tracking-wide uppercase"
            >
              Book CV Clarity Call — R440
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
