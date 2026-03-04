import { useState } from "react";

export type ViewType =
  | "dashboard"
  | "nilai"
  | "jadwal"
  | "editProfile"
  | "ubahPassword"
  | "rekapKuliah"
  | "detailRekapKuliah"
  | "jadwalMahasiswa"
  | "jadwalUjianMahasiswa"
  | "kuesioner"
  | "registrasiMataKuliah"
  | "statusRegistrasi"
  | "tagihanRegistrasi"
  | "detailTagihan"
  | "registrasiUjianSusulan"
  | "pendaftaranWisuda"
  | "pengajuanBebasPustaka";

export function useNavigation() {
  const [currentView, setCurrentView] = useState<ViewType>("dashboard");
  const [activeTab, setActiveTab] = useState("home");
  const [selectedMataKuliah, setSelectedMataKuliah] = useState<any>(null);
  const [selectedTagihan, setSelectedTagihan] = useState<any>(null);

  const navigate = (view: ViewType, tab: string) => {
    setCurrentView(view);
    setActiveTab(tab);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "home") {
      setCurrentView("dashboard");
    } else if (tab === "nilai") {
      setCurrentView("nilai");
    } else if (tab === "jadwal") {
      setCurrentView("jadwalMahasiswa");
    }
  };

  const selectMataKuliah = (mataKuliah: any) => {
    setSelectedMataKuliah(mataKuliah);
  };

  const selectTagihan = (tagihan: any) => {
    setSelectedTagihan(tagihan);
  };

  const getPageTitle = () => {
    const pageTitles: Record<ViewType, string> = {
      dashboard: "Dashboard",
      nilai: "Lihat Nilai",
      jadwal: "Jadwal",
      editProfile: "Edit Profil",
      ubahPassword: "Ubah Password",
      rekapKuliah: "Rekap Kuliah",
      detailRekapKuliah: "Detail Rekap Kuliah",
      jadwalMahasiswa: "Jadwal Mahasiswa",
      jadwalUjianMahasiswa: "Jadwal Ujian",
      kuesioner: "Kuesioner",
      registrasiMataKuliah: "Registrasi Mata Kuliah",
      statusRegistrasi: "Status Registrasi",
      tagihanRegistrasi: "Tagihan Registrasi",
      detailTagihan: "Detail Tagihan",
      registrasiUjianSusulan: "Registrasi Ujian Susulan",
      pendaftaranWisuda: "Pendaftaran Wisuda",
      pengajuanBebasPustaka: "Pengajuan Bebas Pustaka",
    };
    return pageTitles[currentView] || "Dashboard";
  };

  return {
    currentView,
    activeTab,
    selectedMataKuliah,
    selectedTagihan,
    navigate,
    handleTabChange,
    selectMataKuliah,
    selectTagihan,
    getPageTitle,
  };
}
