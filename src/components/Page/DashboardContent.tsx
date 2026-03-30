import { useEffect, useState } from "react";
import {
  UserCircle,
  FileText,
  Calendar,
  Download,
  Loader,
} from "lucide-react";
import logoKis from "../../assets/Images/KIS_logo.png";
import { FooterInfo } from "../FooterInfo";
import { apiAuth, apiAkademik, ApiError } from "../../lib/api";

interface UserData {
  nama_lengkap_akun: string;
  username: string;
}

interface UserProfileResponse {
  status: number;
  data: UserData;
}

interface KabarBerita {
  id_kabar_berita: number;
  judul_kabar: string;
  tanggal_rilis: string;
  file_url_link?: string;
}

interface KabarBeritaResponse {
  status: number;
  data: {
    data: KabarBerita[];
  };
}

interface QuickLinkItem {
  icon: typeof UserCircle;
  title: string;
  description: string;
  color: string;
  href: string;
}

function formatTanggal(dateStr: string): string {
  const date = new Date(dateStr);
  const bulan = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Ags", "Sep", "Okt", "Nov", "Des"
  ];
  const tanggal = date.getDate();
  const bulanIndex = date.getMonth();
  const tahun = date.getFullYear();
  return `${tanggal}-${bulan[bulanIndex]}-${tahun}`;
}

export function DashboardContent() {
  const [userData, setUserData] = useState<UserData | null>(() => {
    const nama = sessionStorage.getItem("nama_lengkap");
    const username = sessionStorage.getItem("username");
    if (!nama && !username) {
      return null;
    }

    return {
      nama_lengkap_akun: nama ?? "",
      username: username ?? "",
    };
  });
  const [kabarBerita, setKabarBerita] = useState<KabarBerita[]>([]);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isLoadingNews, setIsLoadingNews] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [showAllNews, setShowAllNews] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingProfile(true);
      setIsLoadingNews(true);
      setNewsError(null);

      const idUser = sessionStorage.getItem("id");
      const userPath = idUser
        ? `/user/manajemen-user/view?id_user=${encodeURIComponent(idUser)}`
        : "/user/manajemen-user/view";

      const [userResult, beritaResult] = await Promise.allSettled([
        apiAuth<UserProfileResponse>(userPath, { withAuth: true }),
        apiAkademik<KabarBeritaResponse>(
          "/administrator-akademik/kabar-berita/index?status=1"
        ),
      ]);

      if (userResult.status === "fulfilled") {
        setUserData(userResult.value.data);
      }
      setIsLoadingProfile(false);

      if (beritaResult.status === "fulfilled") {
        setKabarBerita(beritaResult.value.data?.data || []);
      } else {
        const reason = beritaResult.reason;
        const message =
          reason instanceof ApiError ? reason.message : "Gagal memuat data";
        setNewsError(message);
      }
      setIsLoadingNews(false);
    };

    fetchData();
  }, []);

  const quickLinks: QuickLinkItem[] = [
    {
      icon: UserCircle,
      title: "HelpDesk",
      description: "+62 813-8988-8933",
      color: "bg-gradient-to-br from-[#5b468a] to-[#4a3771]",
      href: "https://wa.me/6281389888933",
    },
    {
      icon: UserCircle,
      title: "Kendala Akses",
      description: "+62 8988-8988",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      href: "https://wa.me/62898889888",
    },
    {
      icon: UserCircle,
      title: "Kendala Keuangan",
      description: "+62 8988-8988",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      href: "https://wa.me/62898889888",
    },
    {
      icon: UserCircle,
      title: "Layanan Terpadu",
      description: "+62 895-3263-18795",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      href: "https://wa.me/62895326318795",
    },
    {
      icon: UserCircle,
      title: "Manual Book",
      description: "Panduan Sistem",
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      href: "https://example.com/manual-book",
    },
    {
      icon: UserCircle,
      title: "Panduan Pengisian KRS",
      description: "Buku Panduan",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      href: "https://example.com/panduan-krs",
    },
  ];

  const canToggleNewsList = kabarBerita.length > 4;
  const visibleNews = showAllNews ? kabarBerita : kabarBerita.slice(0, 4);

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
            {isLoadingProfile ? (
              <>
                <div className="h-6 bg-white/20 rounded animate-pulse mb-2 w-3/4"></div>
                <div className="h-4 bg-white/20 rounded animate-pulse w-1/4"></div>
              </>
            ) : (
              <>
                <h3 className="font-bold text-lg md:text-xl mb-1">
                  {userData?.nama_lengkap_akun || "Memuat..."}
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  {userData?.username || "---"}
                </p>
              </>
            )}
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
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} min-w-[140px] text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex flex-col items-center justify-center gap-2`}
            >
              <link.icon className="w-8 h-8" />
              <div className="text-center">
                <p className="text-xs font-bold">{link.title}</p>
                <p className="text-[10px] opacity-90 mt-0.5">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 flex flex-col items-center justify-center gap-3`}
            >
              <link.icon className="w-10 h-10" />
              <div className="text-center">
                <p className="text-sm font-bold">{link.title}</p>
                <p className="text-xs opacity-90 mt-1">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* News Section - Grid for Desktop */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="font-bold text-gray-800 text-lg md:text-xl">
            Kabar Berita
          </h2>
          {canToggleNewsList && (
            <button
              onClick={() => setShowAllNews((prev) => !prev)}
              className="text-[#5b468a] text-sm font-medium hover:text-[#4a3771]"
            >
              {showAllNews ? "Tampilkan Sedikit" : "Lihat Semua"}
            </button>
          )}
        </div>
        {isLoadingNews ? (
          <div className="flex items-center justify-center py-8">
            <Loader className="w-6 h-6 animate-spin text-[#5b468a]" />
          </div>
        ) : newsError ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
            {newsError}
          </div>
        ) : kabarBerita.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4">
            {visibleNews.map((item) => (
              <div
                key={item.id_kabar_berita}
                className="bg-white p-4 md:p-5 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block px-2 py-0.5 bg-[#5b468a]/10 text-[#5b468a] text-xs rounded-md font-medium">
                        Berita
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
                      {item.judul_kabar}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatTanggal(item.tanggal_rilis)}</span>
                      </div>
                      {item.file_url_link && (
                        <a
                          href={item.file_url_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#5b468a] text-white p-2 rounded-lg hover:bg-[#4a3671] transition"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            Tidak ada kabar berita.
          </div>
        )}
      </div>

      <FooterInfo />
    </div>
  );
}
