import { ChevronDown } from "lucide-react";

const categories = [
  { id: 1, name: "Business", icon: "💼" },
  { id: 2, name: "Design", icon: "🎨" },
  { id: 3, name: "Marketing", icon: "📈" },
  { id: 4, name: "Programming", icon: "💻" },
  { id: 5, name: "Photography", icon: "📷" },
  { id: 6, name: "Music", icon: "🎵" },
];

export default function ExploreMenu() {
  return (
    <div className="relative group hidden lg:block">
      {/* Button */}
      <button className="flex items-center gap-2 px-4 py-2 font-semibold hover:text-blue-600 transition">
        Explore
        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
      </button>

      {/* Dropdown */}
      <div className="absolute left-0 mt-2 w-60 bg-white border rounded-lg shadow-lg p-2 hidden group-hover:block">
        <p className="text-xs text-gray-500 uppercase px-2 mb-2">
          Categories
        </p>

        {categories.map((item) => (
          <button
            key={item.id}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-left hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}