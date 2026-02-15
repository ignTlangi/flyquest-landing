import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-neutral-800 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Logo + Email */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link href="/" className="text-flyquest-gold font-display text-xl font-bold hover:opacity-80 transition-opacity">
              FlyQuest
            </Link>
            <span className="hidden sm:block text-neutral-700">|</span>
            <a 
              href="mailto:tlangi@flyquest.co.za" 
              className="text-flyquest-gold font-mono text-sm hover:text-white transition-colors"
            >
              tlangi@flyquest.co.za
            </a>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link href="/about" className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono">
              About
            </Link>
            <Link href="/cv" className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono">
              CV Template
            </Link>
            <Link href="/speak" className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono">
              Speaking
            </Link>
            <a
              href="https://www.linkedin.com/in/tlangi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-flyquest-gold transition-colors text-sm font-mono flex items-center gap-1"
            >
              LinkedIn
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-6 pt-6 border-t border-neutral-900 text-center">
          <span className="text-neutral-600 text-sm">© 2025 FlyQuest</span>
        </div>
      </div>
    </footer>
  );
}
