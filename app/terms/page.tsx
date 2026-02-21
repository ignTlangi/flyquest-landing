import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function TermsPage() {
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
            Terms & Conditions
          </h1>

          <p className="text-neutral-400 mb-8">
            Last updated: February 2025
          </p>

          <div className="space-y-8 text-neutral-300 leading-relaxed">
            
            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">1. Overview</h2>
              <p>
                These Terms and Conditions govern your use of flyquest.co.za ("the Website") 
                and any services offered by FlyQuest, operated by Tlangelani Khosa ("TK", "we", "us", "our").
              </p>
              <p className="mt-4">
                By using our Website or purchasing our services, you agree to these terms. 
                If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">2. Services Offered</h2>
              
              <h3 className="font-bold text-white mt-6 mb-2">Free CV Templates</h3>
              <p>
                We offer free downloadable CV templates. By providing your email address, 
                you agree to receive the templates and occasional updates from FlyQuest. 
                You can unsubscribe at any time.
              </p>

              <h3 className="font-bold text-white mt-6 mb-2">CV Clarity Call (Paid Service)</h3>
              <p>The CV Clarity Call is a personalised CV review service that includes:</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-400">
                <li>A 10-15 minute personalised video review of your CV</li>
                <li>Specific, actionable feedback tailored to your target role</li>
                <li>Delivery within 48 hours of confirmed payment</li>
                <li>Follow-up questions via email</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">Price:</strong> R440 (subject to change for future bookings)
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">3. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-400">
                <li>Payment is made via EFT (Electronic Funds Transfer) to the bank details provided on the payment page</li>
                <li>Your booking is confirmed once we receive proof of payment</li>
                <li>The 48-hour delivery window begins once payment is confirmed</li>
                <li>Prices are quoted in South African Rand (ZAR)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">4. Delivery</h2>
              <p>
                CV Clarity Call video reviews are delivered via a private video link (Loom or similar) 
                sent to the email address you provided.
              </p>
              <p className="mt-4">
                We commit to delivering within 48 hours of confirmed payment. If we cannot meet 
                this deadline, we will notify you and offer a full refund if you prefer not to wait.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">5. Satisfaction Guarantee & Refunds</h2>
              <p>
                We want you to be satisfied with your CV review. If you feel the review did not 
                provide value, contact us within 7 days of receiving your video and we will:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-400">
                <li>Discuss your concerns and provide additional feedback at no extra cost, or</li>
                <li>Offer a full refund if we cannot resolve your concerns</li>
              </ul>
              <p className="mt-4">
                Refund requests must be made to{" "}
                <a href="mailto:tlangi@flyquest.co.za" className="text-flyquest-gold hover:text-white transition-colors">
                  tlangi@flyquest.co.za
                </a>{" "}
                within 7 days of receiving your review.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">6. No Job Guarantee</h2>
              <p>
                While we provide professional CV feedback designed to improve your chances of 
                getting interviews, <strong className="text-white">we do not guarantee employment outcomes</strong>.
              </p>
              <p className="mt-4">
                Hiring decisions are made by employers based on many factors beyond your CV. 
                Our service is educational and advisory in nature.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">7. Your CV & Intellectual Property</h2>
              <p>
                You retain full ownership of your CV and all content you submit. We will:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-neutral-400">
                <li>Only use your CV for the purpose of providing the review service</li>
                <li>Not share your CV with third parties</li>
                <li>Delete your CV within 90 days of delivering your review</li>
                <li>Never use your personal information in marketing without explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">8. Testimonials</h2>
              <p>
                If you provide feedback or a testimonial, we may ask for permission to use it 
                (with your first name or anonymously) on our website or marketing materials. 
                We will always ask before publishing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, FlyQuest and its operator shall not be 
                liable for any indirect, incidental, or consequential damages arising from your 
                use of our services.
              </p>
              <p className="mt-4">
                Our total liability for any claim related to our services shall not exceed the 
                amount you paid for that service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">10. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions from time to time. Significant changes 
                will be communicated via email to subscribers. Continued use of our services 
                after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">11. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Republic of South Africa. 
                Any disputes will be resolved in the courts of South Africa.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-white mb-4">12. Contact</h2>
              <p>
                For any questions about these Terms and Conditions, please contact:
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
