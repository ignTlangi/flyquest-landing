"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-flyquest-gold selection:text-black">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 lg:px-24 py-6 flex justify-between items-center bg-black/80 backdrop-blur-sm border-b border-neutral-900/50">
        <Link href="/" className="text-flyquest-gold font-display text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          FlyQuest
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="/about" 
            className="text-flyquest-gold transition-colors font-mono text-sm"
          >
            About
          </Link>
          <Link 
            href="/cv" 
            className="bg-flyquest-gold/10 border border-flyquest-gold/50 text-flyquest-gold px-4 py-2 transition-all hover:bg-flyquest-gold hover:text-black font-mono text-sm flex items-center gap-2"
          >
            CV Template
            <span className="bg-flyquest-gold text-black text-xs px-1.5 py-0.5 font-bold">FREE</span>
          </Link>
          <Link 
            href="/speak" 
            className="text-neutral-400 hover:text-flyquest-gold transition-colors font-mono text-sm"
          >
            Speaking
          </Link>
          <a
            href="https://www.linkedin.com/in/tlangi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-flyquest-gold transition-colors font-mono text-sm hidden sm:block"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <div className="max-w-4xl">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-6">
            About
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
            Hey, I'm TK.
          </h1>

          <p className="text-neutral-400 text-xl md:text-2xl max-w-2xl leading-relaxed">
            Software Engineer. TEDx Speaker. Someone who figured out the system by breaking through it.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Photo Placeholder */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-flyquest-gold flex items-center justify-center">
                <span className="font-display font-bold text-black text-6xl md:text-7xl">TK</span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
              <p>
                In 2021, I was rejected from every university I applied to in South Africa. 
                Not because I wasn't capable — because there simply wasn't room.
              </p>

              <p>
                That rejection could have been the end of the story. Instead, it became the beginning.
              </p>

              <p>
                I enrolled at a private institution, threw myself into software engineering, and 
                decided that if the traditional doors were locked, I'd learn how to build my own. 
                I graduated with 19 module distinctions, served on the Student Representative Council 
                for Academics, and landed a job as a Software Engineer — ironically, at the same 
                institution that gave me a chance when the public system couldn't.
              </p>

              <p>
                Along the way, I shared my journey publicly on LinkedIn. Not because I had it figured 
                out, but because I knew other students were going through the same thing and feeling 
                alone. That community grew to over <span className="text-white">10,000 people</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Do This */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            Why I Do This
          </p>

          <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
            <p className="text-2xl md:text-3xl font-display text-white leading-relaxed">
              I'm not here to build a business empire. I'm here because I remember what it felt like 
              to have no one in my corner.
            </p>

            <p>
              I remember the confusion of navigating applications with no guidance. I remember 
              sending CVs into the void and wondering if something was wrong with me. I remember 
              the fear that maybe I just wasn't cut out for this.
            </p>

            <p>
              I was lucky. I had enough stubbornness to keep going, and eventually I found the 
              information and the people who helped me through. But I know most students don't 
              make it past that point — not because they lack talent, but because they lack 
              access to the playbook.
            </p>

            <p className="text-white">
              That's what FlyQuest is. The playbook I wish someone had given me.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            Background
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-neutral-950 border border-neutral-800 p-6">
              <p className="text-flyquest-gold font-mono text-sm mb-2">EDUCATION</p>
              <p className="text-white font-display font-bold text-lg mb-1">BSc IT — Software Engineering</p>
              <p className="text-neutral-500 text-sm">19 Module Distinctions</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6">
              <p className="text-flyquest-gold font-mono text-sm mb-2">CAREER</p>
              <p className="text-white font-display font-bold text-lg mb-1">Software Engineer</p>
              <p className="text-neutral-500 text-sm">Microsoft Dynamics 365 / Power Pages</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6">
              <p className="text-flyquest-gold font-mono text-sm mb-2">SPEAKING</p>
              <p className="text-white font-display font-bold text-lg mb-1">TEDx Speaker</p>
              <p className="text-neutral-500 text-sm">University of Pretoria</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6">
              <p className="text-flyquest-gold font-mono text-sm mb-2">RECOGNITION</p>
              <p className="text-white font-display font-bold text-lg mb-1">Elevate Africa Top 25</p>
              <p className="text-neutral-500 text-sm">Speaker (2025)</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6">
              <p className="text-flyquest-gold font-mono text-sm mb-2">HONOURS</p>
              <p className="text-white font-display font-bold text-lg mb-1">Golden Key Member</p>
              <p className="text-neutral-500 text-sm">International Honour Society</p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-6">
              <p className="text-flyquest-gold font-mono text-sm mb-2">LEADERSHIP</p>
              <p className="text-white font-display font-bold text-lg mb-1">SRC — Academics Portfolio</p>
              <p className="text-neutral-500 text-sm">Student Representative Council</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            The Mission
          </p>

          <div className="border-l-4 border-flyquest-gold pl-8">
            <p className="text-2xl md:text-3xl font-display leading-relaxed text-white mb-6">
              FlyQuest exists to make sure no student navigates tertiary education and early 
              career alone.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              By giving them the playbook, the tools, and the presence the system never provided. 
              It starts with me, but it's built to outlast me.
            </p>
          </div>

          <div className="mt-12 p-6 bg-black border border-neutral-800">
            <p className="text-flyquest-gold font-mono text-sm mb-4">THE PHILOSOPHY</p>
            <p className="text-xl text-white font-display italic">
              "Education is free. Learning is priceless."
            </p>
          </div>
        </div>
      </section>

      {/* Speaking CTA */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-flyquest-gold/10 to-transparent border border-flyquest-gold/30 p-8 md:p-12">
            <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-4">
              Want Me to Share This With Your Students?
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              I speak at universities, conferences, and youth events.
            </h2>
            <p className="text-neutral-400 mb-8 max-w-2xl">
              If you're looking for someone to talk to your students about navigating education, 
              career readiness, or building resilience when the system isn't built for you — let's chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/speak"
                className="inline-flex items-center gap-2 bg-flyquest-gold text-black font-display font-bold px-6 py-4 hover:bg-white transition-colors text-sm tracking-wide uppercase"
              >
                <span>Learn More About Speaking</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a
                href="mailto:tlangi@flyquest.co.za?subject=Speaking%20Inquiry&body=Hi%20TK,%0A%0AI'm%20reaching%20out%20about%20a%20potential%20speaking%20opportunity.%0A%0AOrganisation:%0AEvent:%0ADate:%0AAudience:%0A%0ALooking%20forward%20to%20hearing%20from%20you."
                className="inline-flex items-center gap-2 bg-transparent border border-neutral-700 text-white font-display font-bold px-6 py-4 hover:border-flyquest-gold hover:text-flyquest-gold transition-colors text-sm tracking-wide uppercase"
              >
                <span>Email Me Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="relative px-6 md:px-12 lg:px-24 py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-6">
            Connect
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Let's stay in touch.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/tlangi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-flyquest-gold transition-colors font-mono text-sm"
            >
              <span>LinkedIn (Personal)</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/flyquestsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-flyquest-gold transition-colors font-mono text-sm"
            >
              <span>LinkedIn (FlyQuest)</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/watch?v=lwmURnsLQpE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-flyquest-gold transition-colors font-mono text-sm"
            >
              <span>TEDx Talk</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="mailto:tlangi@flyquest.co.za?subject=Hello%20from%20FlyQuest"
              className="flex items-center gap-2 text-neutral-400 hover:text-flyquest-gold transition-colors font-mono text-sm"
            >
              <span>Email</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-flyquest-gold font-display text-xl font-bold hover:opacity-80 transition-opacity">
              FlyQuest
            </Link>
            <span className="text-neutral-600 text-sm">© 2025</span>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/about" className="text-flyquest-gold transition-colors text-sm font-mono">
              About
            </Link>
            <Link href="/cv" className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono">
              CV
            </Link>
            <Link href="/speak" className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono">
              Speaking
            </Link>
            <a
              href="https://www.linkedin.com/in/tlangi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
