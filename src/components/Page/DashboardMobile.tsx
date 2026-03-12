import { Menu, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import kiisLogoPutih from "../../assets/Images/kisLogoPutih.png";
import { Sidebar } from "../Sidebar";
import { BottomNav } from "../BottomNav";
import { DashboardContent } from "./DashboardContent";
import { AppRouter } from "../Router/AppRouter";
import { useNavigation } from "../../hooks/useNavigation";
import type { ViewType } from "../../hooks/useNavigation";

export function DashboardMobile() {
  const [showMenu, setShowMenu] = useState(false);
  const [statusRegistrasiKRS, setStatusRegistrasiKRS] = useState(0);

  // Use navigation hook
  const {
    currentView,
    activeTab,
    selectedMataKuliah,
    selectedTagihan,
    navigate,
    handleTabChange,
    selectMataKuliah,
    selectTagihan,
    getPageTitle,
  } = useNavigation();

  // Detect screen size and set initial sidebar state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Unified navigation handler for Sidebar
  const handleNavigate = (view: string, tab: string) => {
    navigate(view as ViewType, tab);

    // Auto-close sidebar on mobile only
    if (window.innerWidth < 768) {
      setShowMenu(false);
    }
  };

  // Handle back navigation
  const handleBack = (view: ViewType, tab: string) => {
    navigate(view, tab);
  };

  // Handle mata kuliah selection with navigation
  const handleMataKuliahSelect = (
    mataKuliah: any,
    view: ViewType,
    tab: string
  ) => {
    selectMataKuliah(mataKuliah);
    navigate(view, tab);
  };

  // Handle tagihan selection with navigation
  const handleTagihanSelect = (tagihan: any, view: ViewType, tab: string) => {
    selectTagihan(tagihan);
    navigate(view, tab);
  };

  // Handle back button click based on current view
  const handleBackClick = () => {
    const backRoutes: Record<string, { view: ViewType; tab: string }> = {
      editProfile: { view: "dashboard", tab: "home" },
      ubahPassword: { view: "dashboard", tab: "home" },
      nilai: { view: "dashboard", tab: "home" },
      rekapKuliah: { view: "dashboard", tab: "home" },
      detailRekapKuliah: { view: "rekapKuliah", tab: "rekapKuliah" },
      jadwalMahasiswa: { view: "dashboard", tab: "home" },
      jadwalUjianMahasiswa: { view: "dashboard", tab: "home" },
      kuesioner: { view: "jadwalUjianMahasiswa", tab: "jadwal" },
      berandaRegistrasi: { view: "dashboard", tab: "home" },
      registrasiMataKuliah: { view: "dashboard", tab: "home" },
      statusRegistrasi: { view: "dashboard", tab: "home" },
      tagihanRegistrasi: { view: "dashboard", tab: "home" },
      detailTagihan: { view: "tagihanRegistrasi", tab: "registrasiMataKuliah" },
      registrasiUjianSusulan: { view: "dashboard", tab: "home" },
      pendaftaranWisuda: { view: "dashboard", tab: "home" },
      pengajuanBebasPustaka: { view: "dashboard", tab: "home" },
    };

    const backRoute = backRoutes[currentView];
    if (backRoute) {
      navigate(backRoute.view, backRoute.tab);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white">
      {/* Sidebar Component */}
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        onNavigate={handleNavigate}
      />

      {/* Main Content Wrapper - Push layout for desktop */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showMenu ? "md:ml-72" : "md:ml-0"
        }`}
      >
        {/* Max width container for desktop - wider for better scaling */}
        <div className="w-full max-w-[1800px] mx-auto">
          {/* Header */}
          <div className="sticky top-0 z-20 bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white px-4 md:px-8 lg:px-12 py-6 shadow-lg">
            <div className="flex items-center justify-between mb-4 gap-4">
              <div className="flex items-center gap-3">
                <button
                  className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <Menu className="w-6 h-6" />
                </button>
                {(currentView === "kuesioner" || currentView === "detailRekapKuliah") && (
                  <button
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition"
                    onClick={handleBackClick}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}
                {currentView !== "dashboard" && (
                  <h1 className="font-bold text-lg md:text-xl">
                    {getPageTitle()}
                  </h1>
                )}
              </div>
              {currentView === "dashboard" && (
                <img
                  src={kiisLogoPutih}
                  alt="KIIS Logo"
                  className="h-12 object-contain"
                />
              )}
            </div>
          </div>

          {/* Main Content - Route based on currentView */}
          {currentView === "dashboard" ? (
            <DashboardContent />
          ) : (
            <AppRouter
              currentView={currentView}
              onBack={handleBack}
              onMenuToggle={() => setShowMenu(!showMenu)}
              selectedMataKuliah={selectedMataKuliah}
              selectedTagihan={selectedTagihan}
              statusRegistrasiKRS={statusRegistrasiKRS}
              onMataKuliahSelect={handleMataKuliahSelect}
              onTagihanSelect={handleTagihanSelect}
            />
          )}

          {/* DEMO ONLY: Toggle Button untuk Test 2 Status - HAPUS NANTI KALAU BACKEND SUDAH READY */}
          {currentView === "registrasiMataKuliah" && (
            <button
              onClick={() =>
                setStatusRegistrasiKRS(statusRegistrasiKRS === 0 ? 1 : 0)
              }
              className="fixed bottom-24 right-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-lg font-bold text-xs z-40 transition-all active:scale-95"
            >
              🔄 DEMO: Toggle Status (
              {statusRegistrasiKRS === 0 ? "Belum Isi" : "Sudah Isi"})
            </button>
          )}

          {/* Floating Bottom Navigation */}
          <BottomNav
            activeTab={activeTab}
            onTabChange={handleTabChange}
            showMenu={showMenu}
          />
        </div>
      </div>
    </div>
  );
}