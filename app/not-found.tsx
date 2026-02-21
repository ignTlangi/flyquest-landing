import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-flyquest-gold selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      <Navigation />

      <section className="relative px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-20 min-h-[70vh] flex items-center">
        <div className="max-w-2xl">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-4">
            404 Error
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Page Not Found
          </h1>

          <p className="text-neutral-400 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-block bg-flyquest-gold text-black font-display font-bold px-8 py-4 hover:bg-white transition-colors text-sm tracking-wide uppercase text-center"
            >
              Go Home
            </Link>
            <Link
              href="/cv"
              className="inline-block border-2 border-flyquest-gold text-flyquest-gold font-display font-bold px-8 py-4 hover:bg-flyquest-gold hover:text-black transition-colors text-sm tracking-wide uppercase text-center"
            >
              Get CV Templates
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
