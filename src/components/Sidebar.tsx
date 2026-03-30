import {
  User,
  FileText,
  ClipboardList,
  BookOpen,
  GraduationCap,
  LogOut,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import kiisLogo from "../assets/Images/kisLogoUngu.png";
import { clearAuthSession } from "../lib/auth";

interface SidebarProps {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
  onNavigate: (view: string, tab: string) => void;
}

export function Sidebar({ showMenu, setShowMenu, onNavigate }: SidebarProps) {
  const navigate = useNavigate();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);

  const handleLogout = () => {
    clearAuthSession();
    navigate("/", { replace: true });
  };

  const handleMenuClick = (label: string) => {
    const menuActions: { [key: string]: { view: string; tab: string } } = {
      "Lihat Nilai": { view: "nilai", tab: "nilai" },
      "Edit Profile": { view: "editProfile", tab: "editProfile" },
      "Ubah Password": { view: "ubahPassword", tab: "ubahPassword" },
      "Rekap Kuliah": { view: "rekapKuliah", tab: "rekapKuliah" },
      "Detail Rekap Kuliah": { view: "detailRekapKuliah", tab: "rekapKuliah" },
      "Jadwal Mahasiswa": { view: "jadwalMahasiswa", tab: "jadwal" },
      "Jadwal Ujian Mahasiswa": { view: "jadwalUjianMahasiswa", tab: "jadwal" },
      Kuesioner: { view: "kuesioner", tab: "kuesioner" },
      "Beranda Registrasi": { 
        view: "berandaRegistrasi", 
        tab: "registrasiMataKuliah" 
      },
      "Registrasi Mata Kuliah": {
        view: "registrasiMataKuliah",
        tab: "registrasiMataKuliah",
      },
      "Status Registrasi": {
        view: "statusRegistrasi",
        tab: "registrasiMataKuliah",
      },
      "Tagihan Registrasi": {
        view: "tagihanRegistrasi",
        tab: "registrasiMataKuliah",
      },
      "Detail Tagihan": {
        view: "detailTagihan",
        tab: "registrasiMataKuliah",
      },
      "Registrasi Ujian Susulan": {
        view: "registrasiUjianSusulan",
        tab: "registrasiUjianSusulan",
      },
      "Beranda Wisuda": {
        view: "berandaWisuda",
        tab: "berandaWisuda",
      },
      "Pendaftaran Wisuda": {
        view: "pendaftaranWisuda",
        tab: "pendaftaranWisuda",
      },
      "Pengajuan Bebas Pustaka": {
        view: "pengajuanBebasPustaka",
        tab: "pengajuanBebasPustaka",
      },
    };

    const action = menuActions[label];
    if (action) {
      onNavigate(action.view, action.tab);
      // Auto-close sidebar on mobile only
      if (window.innerWidth < 768) {
        setShowMenu(false);
      }
    }
  };

  const menuItems = [
    {
      icon: User,
      label: "Akun Mahasiswa",
      color: "bg-[#5b468a]",
      subMenus: [
        {
          label: "Profil Saya",
          subMenus: [{ label: "Edit Profile" }, { label: "Ubah Password" }],
        },
      ],
    },
    {
      icon: FileText,
      label: "Nilai",
      color: "bg-blue-500",
      subMenus: [
        {
          label: "KHS",
          subMenus: [{ label: "Lihat Nilai" }],
        },
      ],
    },
    {
      icon: ClipboardList,
      label: "Presensi Mahasiswa",
      color: "bg-green-500",
      subMenus: [{ label: "Rekap Kuliah" }],
    },
    {
      icon: BookOpen,
      label: "Registrasi",
      color: "bg-orange-500",
      subMenus: [
        { label: "Beranda Registrasi" },
        {
          label: "Jadwal",
          subMenus: [
            { label: "Jadwal Mahasiswa" },
            { label: "Jadwal Ujian Mahasiswa" },
          ],
        },
        { label: "Registrasi Mata Kuliah" },
        { label: "Status Registrasi" },
        { label: "Tagihan Registrasi" },
        {
          label: "Ujian Susulan",
          subMenus: [{ label: "Registrasi Ujian Susulan" }],
        },
      ],
    },
    {
      icon: GraduationCap,
      label: "Wisuda",
      color: "bg-pink-500",
      subMenus: [
        { label: "Beranda Wisuda" },
        { label: "Pendaftaran Wisuda" },
        { label: "Pengajuan Bebas Pustaka" },
      ],
    },
  ];

  return (
    <>
      {/* Overlay - Only for mobile */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setShowMenu(false)}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full bg-white w-72 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header with Logo */}
        <div className="bg-white p-6 flex items-center justify-center border-b border-gray-200">
          <img src={kiisLogo} alt="KIIS Logo" className="h-16 object-contain" />
        </div>

        <div className="p-4 pb-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className={`w-full flex items-center gap-4 p-4 transition-all ${
                    expandedMenu === item.label
                      ? "bg-[#5b468a]/5"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    if (item.subMenus) {
                      setExpandedMenu(
                        expandedMenu === item.label ? null : item.label
                      );
                    }
                  }}
                >
                  <div
                    className={`${item.color} w-11 h-11 rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="flex-1 text-left font-semibold text-gray-800">
                    {item.label}
                  </span>
                  {item.subMenus && (
                    <div
                      className={`transition-transform duration-200 ${
                        expandedMenu === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-[#5b468a]" />
                    </div>
                  )}
                  {!item.subMenus && (
                    <ChevronRight className="w-5 h-5 text-gray-300" />
                  )}
                </button>

                {item.subMenus && expandedMenu === item.label && (
                  <div className="bg-[#5b468a]/5 px-4 py-2 border-t border-[#5b468a]/10">
                    {item.subMenus.map((subMenu, subIndex) => (
                      <div key={subIndex}>
                        <button
                          className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-white hover:text-[#5b468a] rounded-lg transition-all mb-1 flex items-center gap-3 font-medium group"
                          onClick={() => {
                            if (subMenu.subMenus) {
                              setExpandedSubMenu(
                                expandedSubMenu === subMenu.label
                                  ? null
                                  : subMenu.label
                              );
                            } else if (subMenu.label === "Rekap Kuliah") {
                              handleMenuClick("Rekap Kuliah");
                            } else if (subMenu.label === "Beranda Registrasi") {
                              handleMenuClick("Beranda Registrasi");
                            } else if (
                              subMenu.label === "Registrasi Mata Kuliah"
                            ) {
                              handleMenuClick("Registrasi Mata Kuliah");
                            } else if (
                              subMenu.label === "Status Registrasi"
                            ) {
                              handleMenuClick("Status Registrasi");
                            } else if (
                              subMenu.label === "Tagihan Registrasi"
                            ) {
                              handleMenuClick("Tagihan Registrasi");
                            } else if (subMenu.label === "Beranda Wisuda") {
                              handleMenuClick("Beranda Wisuda");                            } else if (subMenu.label === "Pendaftaran Wisuda") {
                              handleMenuClick("Pendaftaran Wisuda");
                            } else if (subMenu.label === "Pengajuan Bebas Pustaka") {
                              handleMenuClick("Pengajuan Bebas Pustaka");                            }
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5b468a] group-hover:scale-150 transition-transform"></div>
                          <span className="flex-1">{subMenu.label}</span>
                          {subMenu.subMenus && (
                            <div
                              className={`transition-transform duration-200 ${
                                expandedSubMenu === subMenu.label
                                  ? "rotate-180"
                                  : ""
                              }`}
                            >
                              <ChevronDown className="w-4 h-4 text-[#5b468a]" />
                            </div>
                          )}
                        </button>

                        {subMenu.subMenus &&
                          expandedSubMenu === subMenu.label && (
                            <div className="ml-6 mb-2 space-y-1 bg-white/50 rounded-lg p-2">
                              {subMenu.subMenus.map((nestedMenu, nestedIndex) => (
                                <button
                                  key={nestedIndex}
                                  className="w-full text-left px-3 py-2 text-xs text-gray-600 hover:bg-[#5b468a]/10 hover:text-[#5b468a] rounded-md transition-all flex items-center gap-2 font-medium"
                                  onClick={() => handleMenuClick(nestedMenu.label)}
                                >
                                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                                  {nestedMenu.label}
                                </button>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 p-4 bg-red-50 hover:bg-red-100 rounded-xl transition-all border border-red-200"
            >
              <div className="bg-red-500 w-11 h-11 rounded-xl flex items-center justify-center shadow-md">
                <LogOut className="w-6 h-6 text-white" />
              </div>
              <span className="flex-1 text-left font-semibold text-red-600">
                Keluar
              </span>
              <ChevronRight className="w-5 h-5 text-red-400" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
