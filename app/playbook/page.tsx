import { getAllGuides } from '@/lib/markdown';
import GuideCard from '@/components/GuideCard';
import Link from 'next/link';

export const metadata = {
  title: 'The FlyQuest Playbook',
  description: 'The playbook the education system never gave you. Built by students, just like you.',
};

export default function PlaybookPage() {
  const guides = getAllGuides();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link 
            href="/"
            className="text-sm text-gray-400 hover:text-[#ffcf00] transition"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="font-bold text-5xl md:text-6xl mb-6">
          The FlyQuest Playbook
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          The playbook the education system never gave you. Built by students, just like you.
        </p>

        {/* Guides Grid */}
        {guides.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map(guide => (
              <GuideCard key={guide.metadata.slug} guide={guide.metadata} />
            ))}
          </div>
        ) : (
          <div className="p-12 bg-white/5 rounded-lg border border-white/10 text-center">
            <p className="text-gray-400">
              Guides coming soon. Join the waitlist to be notified when we launch.
            </p>
            <Link 
              href="/#join"
              className="inline-block mt-4 px-6 py-3 bg-[#ffcf00] text-black font-bold rounded hover:bg-[#ffcf00]/90 transition"
            >
              Join Waitlist
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}