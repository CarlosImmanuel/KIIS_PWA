import {
  UserCircle,
  FileText,
  Calendar,
  Download,
} from "lucide-react";
import logoKis from "../../assets/Images/KIS_logo.png";
import { FooterInfo } from "../FooterInfo";

export function DashboardContent() {
  const newsItems = [
    {
      title: "Pengumuman Perkuliahan dan Pelatihan UAS dan UAS Susulan...",
      date: "21-08-2025",
      category: "Akademik",
    },
    {
      title: "Kalender Akademik 2026/2027",
      date: "13-08-2025",
      category: "Kalender",
    },
    {
      title: "Kalender Akademik 2025/2026",
      date: "08-08-2025",
      category: "Kalender",
    },
    {
      title: "Surat Edaran Libur Natal dan Tahun Baru 2026",
      date: "31-01-2025",
      category: "Pengumuman",
    },
  ];

  const quickLinks = [
    {
      icon: UserCircle,
      title: "HelpDesk",
      description: "+62 813-8988-8933",
      color: "bg-gradient-to-br from-[#5b468a] to-[#4a3771]",
    },
    {
      icon: UserCircle,
      title: "Kendala Akses",
      description: "+62 8988-8988",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: UserCircle,
      title: "Kendala Keuangan",
      description: "+62 8988-8988",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      icon: UserCircle,
      title: "Layanan Terpadu",
      description: "+62 895-3263-18795",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      icon: UserCircle,
      title: "Manual Book",
      description: "Panduan Sistem",
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    },
    {
      icon: UserCircle,
      title: "Panduan Pengisian KRS",
      description: "Buku Panduan",
      color: "bg-gradient-to-br from-red-500 to-red-600",
    },
  ];

  return (
    <div className="px-4 md:px-8 py-6 space-y-6">
      {/* Info Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#5b468a] to-[#4a3771] text-white p-5 md:p-6 rounded-2xl shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative flex items-start gap-3">
          <div className="bg-white p-3 rounded-xl backdrop-blur-sm">
            <img src={logoKis} alt="KIS Logo" className="h-10 object-contain" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg md:text-xl mb-1">
              CARLOS IMMANUEL TAMPUBOLON
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              222310064
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#ff5f15] to-[#5b468a] text-white p-5 md:p-6 rounded-2xl shadow-xl">
        <p>
          Jika ada kendala atau pertanyaan, silakan hubungi HelpDesk atau akses
          Manual Book untuk panduan lengkap dibawah ini.
        </p>
      </div>

      {/* Quick Links - Grid for Desktop */}
      <div>
        <h2 className="font-bold text-gray-800 text-lg md:text-xl mb-4 px-1">
          Akses Cepat
        </h2>
        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden flex gap-3 overflow-x-auto pb-2 px-1 scrollbar-hide">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              className={`${link.color} min-w-[140px] text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex flex-col items-center justify-center gap-2`}
            >
              <link.icon className="w-8 h-8" />
              <div className="text-center">
                <p className="text-xs font-bold">{link.title}</p>
                <p className="text-[10px] opacity-90 mt-0.5">
                  {link.description}
                </p>
              </div>
            </button>
          ))}
        </div>
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <button
              key={index}
              className={`${link.color} text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex flex-col items-center justify-center gap-3`}
            >
              <link.icon className="w-10 h-10" />
              <div className="text-center">
                <p className="text-sm font-bold">{link.title}</p>
                <p className="text-xs opacity-90 mt-1">{link.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* News Section - Grid for Desktop */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="font-bold text-gray-800 text-lg md:text-xl">
            Kabar Berita
          </h2>
          <button className="text-[#5b468a] text-sm font-medium hover:text-[#4a3771]">
            Lihat Semua
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-5 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-block px-2 py-0.5 bg-[#5b468a]/10 text-[#5b468a] text-xs rounded-md font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <button className="bg-[#5b468a] text-white p-2 rounded-lg hover:bg-[#4a3771] transition">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterInfo />
    </div>
  );
}
