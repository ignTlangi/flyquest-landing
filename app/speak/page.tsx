"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-flyquest-gold selection:text-black">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      <Navigation />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-16">
        <div className="max-w-4xl">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-6">
            Speaking
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
            Bring TK to Your Stage
          </h1>

          <p className="text-neutral-400 text-xl md:text-2xl max-w-2xl leading-relaxed">
            I speak to students and young professionals about navigating education, building careers, 
            and finding your path when the system isn't built for you.
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute top-32 right-12 lg:right-24 w-64 h-64 bg-flyquest-gold/5 blur-3xl rounded-full hidden lg:block" />
      </section>

      {/* Credentials Bar */}
      <section className="relative px-6 md:px-12 lg:px-24 py-8 border-t border-b border-neutral-900 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-center">
            <div>
              <p className="text-flyquest-gold font-display font-bold text-lg">TEDx</p>
              <p className="text-neutral-500 text-sm">Speaker</p>
            </div>
            <div className="hidden sm:block w-px bg-neutral-800"></div>
            <div>
              <p className="text-flyquest-gold font-display font-bold text-lg">Elevate Africa</p>
              <p className="text-neutral-500 text-sm">Top 25 Speaker (2025)</p>
            </div>
            <div className="hidden sm:block w-px bg-neutral-800"></div>
            <div>
              <p className="text-flyquest-gold font-display font-bold text-lg">Golden Key</p>
              <p className="text-neutral-500 text-sm">Honour Society</p>
            </div>
            <div className="hidden sm:block w-px bg-neutral-800"></div>
            <div>
              <p className="text-flyquest-gold font-display font-bold text-lg">10,000+</p>
              <p className="text-neutral-500 text-sm">LinkedIn Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Speak About */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            What I Speak About
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-950 border border-neutral-800 p-8 hover:border-flyquest-gold/50 transition-colors group">
              <div className="w-12 h-12 bg-flyquest-gold/10 flex items-center justify-center mb-6 group-hover:bg-flyquest-gold/20 transition-colors">
                <span className="text-flyquest-gold font-display font-bold text-xl">01</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                The Power of Not Knowing Who You Are
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                My TEDx talk explores how identity uncertainty can become your greatest asset. 
                When you're not boxed in by expectations, you're free to build something new.
              </p>
              <a
                href="https://www.youtube.com/watch?v=lwmURnsLQpE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-flyquest-gold mt-4 hover:text-white transition-colors text-sm"
              >
                <span>Watch the TEDx Talk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-8 hover:border-flyquest-gold/50 transition-colors group">
              <div className="w-12 h-12 bg-flyquest-gold/10 flex items-center justify-center mb-6 group-hover:bg-flyquest-gold/20 transition-colors">
                <span className="text-flyquest-gold font-display font-bold text-xl">02</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Navigating Education When the System Isn't Built for You
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                From university rejection to graduation with distinctions. I share the tactical 
                strategies and mindset shifts that helped me navigate a system designed to filter 
                people out.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-8 hover:border-flyquest-gold/50 transition-colors group">
              <div className="w-12 h-12 bg-flyquest-gold/10 flex items-center justify-center mb-6 group-hover:bg-flyquest-gold/20 transition-colors">
                <span className="text-flyquest-gold font-display font-bold text-xl">03</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Career Readiness for Students & Graduates
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                What they don't teach you in university: how to actually land a job. CVs that 
                pass ATS systems, LinkedIn that opens doors, and the unwritten rules of 
                professional integration.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-8 hover:border-flyquest-gold/50 transition-colors group">
              <div className="w-12 h-12 bg-flyquest-gold/10 flex items-center justify-center mb-6 group-hover:bg-flyquest-gold/20 transition-colors">
                <span className="text-flyquest-gold font-display font-bold text-xl">04</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Building Resilience Through Rejection
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Rejection isn't failure — it's redirection. I share my journey from being told 
                "consider alternatives" to building a career and platform that helps thousands 
                of students.
              </p>
            </div>
          </div>

          <p className="text-neutral-500 text-sm mt-8 text-center">
            Have a specific topic in mind? I'm happy to tailor presentations to your audience's needs.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            Who I Speak To
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-2 border-flyquest-gold pl-6">
              <h3 className="font-display text-xl font-bold mb-2">Universities</h3>
              <p className="text-neutral-400 text-sm">
                Career services, orientation weeks, faculty events, student development programmes
              </p>
            </div>

            <div className="border-l-2 border-flyquest-gold pl-6">
              <h3 className="font-display text-xl font-bold mb-2">Conferences</h3>
              <p className="text-neutral-400 text-sm">
                Youth summits, education conferences, career fairs, industry events
              </p>
            </div>

            <div className="border-l-2 border-flyquest-gold pl-6">
              <h3 className="font-display text-xl font-bold mb-2">Corporates</h3>
              <p className="text-neutral-400 text-sm">
                Graduate programme orientations, early career development, mentorship launches
              </p>
            </div>

            <div className="border-l-2 border-flyquest-gold pl-6">
              <h3 className="font-display text-xl font-bold mb-2">Schools</h3>
              <p className="text-neutral-400 text-sm">
                Matric prep, career guidance days, motivational assemblies, parent evenings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            Formats
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-950 border border-neutral-800 p-6 text-center hover:border-flyquest-gold/50 transition-colors">
              <div className="w-12 h-12 bg-flyquest-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-display font-bold mb-2">Keynotes</h3>
              <p className="text-neutral-500 text-sm">20-45 minutes</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 text-center hover:border-flyquest-gold/50 transition-colors">
              <div className="w-12 h-12 bg-flyquest-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold mb-2">Workshops</h3>
              <p className="text-neutral-500 text-sm">60-90 minutes</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 text-center hover:border-flyquest-gold/50 transition-colors">
              <div className="w-12 h-12 bg-flyquest-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-display font-bold mb-2">Panels</h3>
              <p className="text-neutral-500 text-sm">As scheduled</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6 text-center hover:border-flyquest-gold/50 transition-colors">
              <div className="w-12 h-12 bg-flyquest-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold mb-2">Virtual</h3>
              <p className="text-neutral-500 text-sm">Webinars & online events</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            What You Get
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-flyquest-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Pre-event consultation</h3>
                <p className="text-neutral-400">We'll discuss your audience, goals, and how to make the talk most impactful for your specific context.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-flyquest-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Customised content</h3>
                <p className="text-neutral-400">I tailor my presentations to your audience — whether that's first-years, final-years, graduates, or mixed groups.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-flyquest-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Q&A session</h3>
                <p className="text-neutral-400">I stay for questions after the talk — the real conversations often happen here.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-flyquest-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-flyquest-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Follow-up resources</h3>
                <p className="text-neutral-400">Attendees get access to FlyQuest resources — including the free CV template — so the value continues after the event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            My Philosophy
          </p>
          
          <div className="border-l-4 border-flyquest-gold pl-8">
            <p className="text-2xl md:text-3xl font-display leading-relaxed text-white mb-6">
              "There is no lack of answers in the world. But there is a clear shortage of 
              people willing to ask the questions."
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              That's what I try to do on every stage — ask the questions that nobody else is asking, 
              and equip students with the courage to ask their own.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Let's Make It Happen
          </h2>
          <p className="text-neutral-400 text-lg mb-4 max-w-2xl mx-auto">
            Fees vary based on format, audience size, and travel requirements. 
            Reach out and let's discuss what works for your event.
          </p>
          <p className="text-neutral-500 text-sm mb-8">
            I'm particularly passionate about speaking to student audiences and am flexible 
            on fees for student-led organisations.
          </p>
          
          <a
            href="mailto:tlangi@flyquest.co.za?subject=Speaking%20Inquiry%20-%20[Your%20Organisation]&body=Hi%20TK,%0A%0AI'm%20reaching%20out%20about%20a%20potential%20speaking%20opportunity.%0A%0AOrganisation:%0AEvent%20Name:%0AProposed%20Date:%0AExpected%20Audience%20Size:%0AAudience%20Type%20(students%2C%20graduates%2C%20professionals):%0AFormat%20(keynote%2C%20workshop%2C%20panel):%0A%0AAdditional%20Details:%0A%0ALooking%20forward%20to%20hearing%20from%20you."
            className="inline-flex items-center gap-3 bg-flyquest-gold text-black font-display font-bold px-8 py-4 hover:bg-white transition-colors text-sm tracking-wide uppercase"
          >
            <span>Get in Touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          
          <p className="text-neutral-600 text-sm mt-4">
            tlangi@flyquest.co.za
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
