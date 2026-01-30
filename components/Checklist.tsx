interface ChecklistProps {
  items: string[];
}

export default function Checklist({ items }: ChecklistProps) {
  return (
    <div className="my-8 p-6 bg-[#ffcf00]/10 border-l-4 border-[#ffcf00] rounded-r">
      <h3 className="font-bold text-xl mb-4">✓ Checklist</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <input 
              type="checkbox" 
              className="mt-1 w-5 h-5 accent-[#ffcf00] cursor-pointer"
              id={`checklist-${index}`}
            />
            <label 
              htmlFor={`checklist-${index}`}
              className="cursor-pointer select-none flex-1"
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}