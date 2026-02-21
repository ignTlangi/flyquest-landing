import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-flyquest-gold selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 noise-overlay" aria-hidden="true" />

      <Navigation />

      <section className="relative px-6 md:px-12 lg:px-24 pt-28 md:pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-flyquest-gold font-mono text-sm tracking-widest uppercase mb-4">
            Legal
          </p>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            Privacy Policy
          </h1>

          <p className="text-neutral-400 mb-8">
            Last updated: February 2025
          </p>

          <div className="space-y-8 text-neutral-300 leading-relaxed">
            
            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">1. Who We Are</h2>
              <p>
                FlyQuest is operated by Tlangelani Khosa ("TK", "we", "us", "our"). 
                We help students and graduates navigate tertiary education and early career 
                through CV templates, career resources, and personalised CV review services.
              </p>
              <p className="mt-4">
                <strong className="text-white">Contact:</strong> tlangi@flyquest.co.za
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">2. What Data We Collect</h2>
              <p>We collect the following personal information:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-400">
                <li><strong className="text-neutral-300">Email address</strong> — when you download templates or join our mailing list</li>
                <li><strong className="text-neutral-300">Name</strong> — when you book a CV Clarity Call</li>
                <li><strong className="text-neutral-300">CV/Resume</strong> — when you submit for a paid review (only used for the review)</li>
                <li><strong className="text-neutral-300">Payment confirmation</strong> — proof of payment for paid services</li>
              </ul>
              <p className="mt-4">
                We do not collect sensitive personal information such as ID numbers, 
                banking details (beyond payment confirmation), or health information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">3. Why We Collect It</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-400">
                <li>Send you the CV templates you requested</li>
                <li>Deliver paid CV review services</li>
                <li>Send occasional updates about FlyQuest (you can unsubscribe anytime)</li>
                <li>Respond to your questions or support requests</li>
              </ul>
              <p className="mt-4">
                We will never sell, rent, or share your personal information with third parties 
                for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">4. How We Store Your Data</h2>
              <p>Your data is stored securely using the following services:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-400">
                <li><strong className="text-neutral-300">Resend</strong> — for email delivery and subscriber management</li>
                <li><strong className="text-neutral-300">Tally</strong> — for form submissions</li>
                <li><strong className="text-neutral-300">Vercel</strong> — for website hosting</li>
              </ul>
              <p className="mt-4">
                All services we use comply with industry-standard security practices. 
                Data is transmitted over encrypted connections (HTTPS).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">5. Your Rights (POPIA & GDPR)</h2>
              <p>Under the Protection of Personal Information Act (POPIA) and GDPR, you have the right to:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-400">
                <li><strong className="text-neutral-300">Access</strong> — request a copy of the data we hold about you</li>
                <li><strong className="text-neutral-300">Correction</strong> — ask us to correct inaccurate data</li>
                <li><strong className="text-neutral-300">Deletion</strong> — ask us to delete your data</li>
                <li><strong className="text-neutral-300">Unsubscribe</strong> — opt out of marketing emails at any time</li>
                <li><strong className="text-neutral-300">Portability</strong> — receive your data in a portable format</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:tlangi@flyquest.co.za" className="text-flyquest-gold hover:text-white transition-colors">
                  tlangi@flyquest.co.za
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">6. Cookies</h2>
              <p>
                We use minimal cookies for essential website functionality and analytics 
                (via Vercel Analytics). We do not use advertising cookies or trackers.
              </p>
              <p className="mt-4">
                You can disable cookies in your browser settings, though this may affect 
                website functionality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">7. Data Retention</h2>
              <p>
                We retain your email address for as long as you remain subscribed to our mailing list. 
                You can unsubscribe at any time using the link in any email.
              </p>
              <p className="mt-4">
                CV documents submitted for paid reviews are deleted within 90 days of the review 
                being delivered, unless you request earlier deletion.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify subscribers 
                of significant changes via email. The "last updated" date at the top of this page 
                indicates when the policy was last revised.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, 
                please contact us:
              </p>
              <p className="mt-4">
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:tlangi@flyquest.co.za" className="text-flyquest-gold hover:text-white transition-colors">
                  tlangi@flyquest.co.za
                </a>
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-neutral-800">
            <Link href="/" className="text-flyquest-gold hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
