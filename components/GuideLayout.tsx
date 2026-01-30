import { GuideMetadata } from '@/types/guide';
import Link from 'next/link';

interface GuideLayoutProps {
  metadata: GuideMetadata;
  children: React.ReactNode;
}

export default function GuideLayout({ metadata, children }: GuideLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link 
            href="/playbook"
            className="text-sm text-gray-400 hover:text-[#ffcf00] transition"
          >
            ← Back to Playbook
          </Link>
        </div>
      </header>

      {/* Guide Header */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-[#ffcf00]">
              {metadata.category}
            </span>
            <span className="text-sm text-gray-500">
              {metadata.readTime}
            </span>
          </div>
          
          <h1 className="font-bold text-4xl md:text-5xl mb-4">
            {metadata.title}
          </h1>
          
          <p className="text-xl text-gray-400">
            {metadata.description}
          </p>
          
          <div className="mt-6 text-sm text-gray-500">
            Last updated: {new Date(metadata.date).toLocaleDateString('en-ZA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <article className="max-w-4xl mx-auto px-6 pb-20 prose prose-invert prose-lg max-w-none">
        {children}
      </article>

      {/* Share Section */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="p-8 bg-[#ffcf00]/10 border border-[#ffcf00] rounded-lg">
          <h3 className="font-bold text-2xl mb-4">Share This Guide</h3>
          <p className="text-gray-300 mb-4">
            Just read this guide on {metadata.title.toLowerCase()}. If you're navigating {metadata.category.toLowerCase()}, check it out:
          </p>
          <div className="p-4 bg-black/50 rounded font-mono text-sm">
            https://flyquest.co.za/playbook/{metadata.slug}
            <br /><br />
            #SouthAfricanStudents #FlyQuest
          </div>
        </div>
      </div>
    </div>
  );
}