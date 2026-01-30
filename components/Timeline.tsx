interface TimelinePhase {
  week: string;
  title: string;
  description: string;
}

interface TimelineProps {
  phases: TimelinePhase[];
}

export default function Timeline({ phases }: TimelineProps) {
  return (
    <div className="my-8">
      <h3 className="font-bold text-xl mb-6">Timeline</h3>
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-[#ffcf00] flex items-center justify-center">
                <span className="font-bold text-black text-sm">W{phase.week}</span>
              </div>
            </div>
            <div className="flex-1 pt-2">
              <h4 className="font-bold text-lg mb-1">{phase.title}</h4>
              <p className="text-gray-300">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}