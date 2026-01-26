"use client";

import { useState, useEffect } from "react";

// Typewriter effect for cycling through pain points
function TypewriterText() {
  const phrases = [
    "spatial constraints",
    "lack of clear processes", 
    "gatekept information",
    "no real mentorship",
    "systems nobody explained",
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);
  
  return (
    <span className="text-flyquest-gold">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function FlyQuestLanding() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're in. We'll be in touch.");
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
      {/* Noise Texture Overlay - using CSS for hydration safety */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 pb-32">
        {/* Logo/Wordmark */}
        <div className="absolute top-8 left-6 md:left-12 lg:left-24">
          <span className="text-flyquest-gold font-display text-2xl font-bold tracking-tight">
            FlyQuest
          </span>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-6 animate-fade-in">
            Built by students, just like you.
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 animate-slide-up">
            Education is free.
            <br />
            <span className="text-flyquest-gold">Learning is priceless.</span>
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-slide-up animation-delay-100">
            Whether you're a first-year trying to see the path ahead, or a graduate stuck 
            in the black hole between your degree and your first job—FlyQuest is the 
            playbook the education system never gave you.
          </p>

          {/* Email Capture */}
          <form onSubmit={handleSubmit} className="animate-slide-up animation-delay-200">
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
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
                className="bg-flyquest-gold text-black font-display font-bold px-8 py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide uppercase"
              >
                {status === "loading" ? "..." : status === "success" ? "You're In" : "Join the Waitlist"}
              </button>
            </div>
            {message && (
              <p className={`mt-4 text-sm font-mono ${status === "success" ? "text-flyquest-gold" : "text-red-400"}`}>
                {message}
              </p>
            )}
          </form>
        </div>

        {/* Scroll Indicator - repositioned to avoid overlap */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-px h-12 bg-gradient-to-b from-flyquest-gold to-transparent" />
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-32 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-12">
            The Reality
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20">
            <div className="group">
              <p className="font-display text-6xl md:text-7xl font-bold text-flyquest-gold mb-4 group-hover:scale-105 transition-transform origin-left">
                925K
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Matriculants compete for university admission every year in South Africa.
              </p>
            </div>

            <div className="group">
              <p className="font-display text-6xl md:text-7xl font-bold text-flyquest-gold mb-4 group-hover:scale-105 transition-transform origin-left">
                230K
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed">
                University spots actually exist. The rest are told to figure it out.
              </p>
            </div>

            <div className="group">
              <p className="font-display text-6xl md:text-7xl font-bold text-flyquest-gold mb-4 group-hover:scale-105 transition-transform origin-left">
                60%
              </p>
              <p className="text-neutral-400 text-lg leading-relaxed">
                First-year dropout rate. Not because they can't learn—because the system can't support.
              </p>
            </div>
          </div>

          {/* The Human Context - with typewriter effect */}
          <div className="border-l-2 border-flyquest-gold pl-8 max-w-3xl">
            <p className="text-2xl md:text-3xl font-display leading-relaxed text-neutral-200">
              <span className="text-flyquest-gold">I've heard this story hundreds of times.</span> Students 
              who couldn't progress because of <span className="inline-block min-w-[280px] md:min-w-[320px]"><TypewriterText /></span>
              <br />
              —not because they lacked talent or drive. The system failed them. And for those 
              who do make it through? The job market becomes another maze with no map.
            </p>
          </div>
        </div>
      </section>

      {/* What's Coming Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-32 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-6">
            What We're Building
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            The FlyQuest Playbook
          </h2>
          
          <p className="text-neutral-400 text-lg mb-16 max-w-2xl">
            Everything the system should've given you, in one place. Not another career blog—a 
            tactical playbook for South African students and graduates navigating the real world.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start gap-4">
                  <span className="text-flyquest-gold font-mono text-sm mt-1">01</span>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-flyquest-gold transition-colors">
                      The Insider Perspective
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Built by someone still in it, not theorising from the outside. Real insights 
                      on the South African education landscape, graduate job market, and the 
                      unwritten rules nobody tells you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <span className="text-flyquest-gold font-mono text-sm mt-1">02</span>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-flyquest-gold transition-colors">
                      Practical Frameworks
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      ATS-optimised CV templates that actually get past the robots. Career 
                      roadmaps for your specific field. Tactical strategies—not motivational 
                      fluff—for landing your first job after university.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4">
                  <span className="text-flyquest-gold font-mono text-sm mt-1">03</span>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-flyquest-gold transition-colors">
                      Transparent Industry Breakdowns
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      What it actually takes to break into your field. The real requirements 
                      (not the job listing fantasy), actual salary ranges, and the paths people 
                      really took to get there.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-32">
                <div className="border border-neutral-800 p-8 bg-black">
                  <p className="font-mono text-sm text-flyquest-gold mb-4">THE PHILOSOPHY</p>
                  <p className="text-xl leading-relaxed text-neutral-300 mb-4">
                    "I built this because I was tired of watching talented students fall through 
                    the cracks for reasons that had nothing to do with their ability."
                  </p>
                  <p className="text-lg leading-relaxed text-neutral-400 mb-6">
                    "You deserve the playbook. I'm making it yours."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-flyquest-gold flex items-center justify-center">
                      <span className="font-display font-bold text-black text-lg">TK</span>
                    </div>
                    <div>
                      <a 
                        href="https://www.linkedin.com/in/tlangi/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-display font-bold hover:text-flyquest-gold transition-colors"
                      >
                        Tlangelani Khosa (TK)
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/flyquestsa/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-neutral-500 text-sm hover:text-flyquest-gold transition-colors block"
                      >
                        Founder, FlyQuest
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-32 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-8">
            Why This Exists
          </p>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.1]">
            In 2021, I was rejected from every South African university I applied to.
          </h2>

          <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
            <p>
              Not because I wasn't good enough. Because there simply wasn't room. I was 
              waitlisted, sidelined, and left wondering if the path to a meaningful career 
              was closed before I'd even started.
            </p>
            
            <p>
              I refused to let that define my trajectory. I pivoted into software engineering—not 
              just to get a degree, but to learn how to build my own doors when the traditional 
              ones were locked.
            </p>

            <p>
              Today, I work as a software engineer with a BSc IT in Software Engineering, and 
              I've shared my story on the TEDx stage. I still plan to complete my Honours—a 
              dream delayed, not denied. My career is proof that the gatekeepers of education 
              are not the final authority on your success.
            </p>

            <p className="text-neutral-400">
              But here's the thing: my outcome was an exception, not the rule.
            </p>

            <p>
              I've heard this story hundreds of times now. Students who couldn't progress 
              through university because of unclear processes, gatekept information, or simply 
              not knowing the right questions to ask. The difference between those who make it 
              and those who fall through the cracks is rarely talent—it's{" "}
              <span className="text-white">access to the playbook</span>.
            </p>

            <p>
              I learned this by doing the things nobody told me to do: barging into offices, 
              asking uncomfortable questions, getting information that shouldn't have been 
              "inside information" in the first place. I navigated both the private and public 
              education sectors the hard way—and realised someone needed to share what I learned.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-neutral-800">
            <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-4">
              Who This Is For
            </p>
            <p className="text-2xl md:text-3xl font-display leading-relaxed text-neutral-200">
              I'm building FlyQuest for the students who are where I was in 2021. For the 
              graduates who feel like their degree is a map to a place that no longer exists. 
              For anyone ready to stop waiting for permission and take control of their own path.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a
              href="https://www.youtube.com/watch?v=lwmURnsLQpE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-flyquest-gold hover:text-white transition-colors font-mono text-sm"
            >
              <span>Watch the TEDx Talk</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/tlangi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-flyquest-gold transition-colors font-mono text-sm"
            >
              <span>Follow the journey on LinkedIn</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-32 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Ready to stop waiting for
            <br />
            <span className="text-flyquest-gold">permission to succeed?</span>
          </h2>

          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
            Join the waitlist. Be first to access The FlyQuest Playbook when we launch.
          </p>

          {/* Secondary Email Capture */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-neutral-900 border border-neutral-800 px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-flyquest-gold transition-colors font-mono text-sm text-center sm:text-left"
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="bg-flyquest-gold text-black font-display font-bold px-8 py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide uppercase"
              >
                {status === "loading" ? "..." : status === "success" ? "You're In" : "Join the Waitlist"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="text-flyquest-gold font-display text-xl font-bold">FlyQuest</span>
            <span className="text-neutral-600 text-sm">© 2025</span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/tlangi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/watch?v=lwmURnsLQpE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono"
            >
              TEDx Talk
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
