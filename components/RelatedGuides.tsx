import Link from 'next/link';
import { getGuideBySlug } from '@/lib/markdown';

interface RelatedGuidesProps {
  guides?: string[];
}

export default function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (!guides || guides.length === 0) return null;

  return (
    <div className="my-12">
      <h3 className="font-bold text-2xl mb-6">Related Guides</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {guides.map((slug) => {
          try {
            const guide = getGuideBySlug(slug);
            return (
              <Link
                key={slug}
                href={`/playbook/${slug}`}
                className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ffcf00] transition group"
              >
                <div className="text-sm text-[#ffcf00] mb-2">
                  {guide.metadata.category}
                </div>
                <h4 className="font-bold text-lg group-hover:text-[#ffcf00] transition">
                  {guide.metadata.title}
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  {guide.metadata.description}
                </p>
              </Link>
            );
          } catch (error) {
            return null;
          }
        })}
      </div>
    </div>
  );
}