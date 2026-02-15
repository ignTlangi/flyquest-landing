"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 md:py-6 flex justify-between items-center bg-black border-b border-neutral-800">
        <Link 
          href="/" 
          className="text-flyquest-gold font-display text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          FlyQuest
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/about" 
            className={`${isActive('/about') ? 'text-flyquest-gold' : 'text-neutral-400 hover:text-flyquest-gold'} transition-colors font-mono text-sm`}
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
            className={`${isActive('/speak') ? 'text-flyquest-gold' : 'text-neutral-400 hover:text-flyquest-gold'} transition-colors font-mono text-sm`}
          >
            Speaking
          </Link>
          <a
            href="https://www.linkedin.com/in/tlangi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-flyquest-gold transition-colors font-mono text-sm flex items-center gap-1"
          >
            LinkedIn
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-flyquest-gold transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-flyquest-gold transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-flyquest-gold transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu - Full screen solid background */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className={`${isActive('/about') ? 'text-flyquest-gold' : 'text-white'} font-display text-3xl font-bold hover:text-flyquest-gold transition-colors`}
            >
              About
            </Link>
            <Link 
              href="/cv" 
              onClick={() => setIsOpen(false)}
              className="bg-flyquest-gold text-black font-display text-2xl font-bold px-8 py-4 flex items-center gap-3"
            >
              CV Template
              <span className="bg-black text-flyquest-gold text-sm px-2 py-1 font-bold">FREE</span>
            </Link>
            <Link 
              href="/speak" 
              onClick={() => setIsOpen(false)}
              className={`${isActive('/speak') ? 'text-flyquest-gold' : 'text-white'} font-display text-3xl font-bold hover:text-flyquest-gold transition-colors`}
            >
              Speaking
            </Link>
            <a
              href="https://www.linkedin.com/in/tlangi/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 font-display text-xl flex items-center gap-2 hover:text-flyquest-gold transition-colors"
            >
              LinkedIn
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
              <a href="mailto:tlangi@flyquest.co.za" className="text-flyquest-gold font-mono">
                tlangi@flyquest.co.za
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
