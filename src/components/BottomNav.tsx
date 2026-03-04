import { Home, BarChart3, Clock } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showMenu: boolean;
}

export function BottomNav({ activeTab, onTabChange, showMenu }: BottomNavProps) {
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-30 transition-all duration-300 ease-in-out ${
        showMenu ? "md:ml-72" : "md:ml-0"
      }`}
    >
      <div className="flex items-center justify-around px-6 py-3">
        <button
          onClick={() => onTabChange("home")}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all ${
            activeTab === "home"
              ? "bg-[#5b468a] text-white shadow-lg"
              : "text-gray-500 hover:text-[#5b468a]"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </button>

        <button
          onClick={() => onTabChange("nilai")}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all ${
            activeTab === "nilai"
              ? "bg-[#5b468a] text-white shadow-lg"
              : "text-gray-500 hover:text-[#5b468a]"
          }`}
        >
          <BarChart3 className="w-6 h-6" />
          <span className="text-xs font-medium">Nilai</span>
        </button>

        <button
          onClick={() => onTabChange("jadwal")}
          className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all ${
            activeTab === "jadwal"
              ? "bg-[#5b468a] text-white shadow-lg"
              : "text-gray-500 hover:text-[#5b468a]"
          }`}
        >
          <Clock className="w-6 h-6" />
          <span className="text-xs font-medium">Jadwal</span>
        </button>
      </div>
    </div>
  );
}
