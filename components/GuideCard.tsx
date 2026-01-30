import Link from 'next/link';
import { GuideMetadata } from '@/types/guide';

interface GuideCardProps {
  guide: GuideMetadata;
}

export default function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link
      href={`/playbook/${guide.slug}`}
      className="group block p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#ffcf00] transition cursor-pointer"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-[#ffcf00] font-medium">
          {guide.category}
        </span>
        <span className="text-sm text-gray-500">
          {guide.readTime}
        </span>
      </div>
      
      <h3 className="font-bold text-xl mb-3 group-hover:text-[#ffcf00] transition">
        {guide.title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4">
        {guide.description}
      </p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">
          {new Date(guide.date).toLocaleDateString('en-ZA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
        <span className="text-[#ffcf00] group-hover:translate-x-1 transition inline-block">
          Read →
        </span>
      </div>
    </Link>
  );
}