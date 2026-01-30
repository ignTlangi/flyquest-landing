interface Partner {
  name: string;
  url: string;
  description: string;
}

interface CollaborationResourcesProps {
  partners?: Partner[];
}

export default function CollaborationResources({ partners }: CollaborationResourcesProps) {
  if (!partners || partners.length === 0) return null;

  return (
    <div className="my-12 p-8 bg-white/5 rounded-lg border border-white/10">
      <h3 className="font-bold text-2xl mb-6">Collaboration Resources</h3>
      <div className="space-y-4">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-2 h-2 mt-2 rounded-full bg-[#ffcf00] flex-shrink-0" />
            <div>
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold hover:text-[#ffcf00] transition"
              >
                {partner.name} →
              </a>
              <p className="text-sm text-gray-400 mt-1">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}