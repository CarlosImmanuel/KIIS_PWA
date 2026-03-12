import {
  BookOpen,
  User,
  GraduationCap,
  DollarSign,
  FileText,
  Eye,
  Download,
  X,
  Trash2,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface RegistrasiMataKuliahViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
  // Nanti dari backend: 0 = belum isi KRS, 1 = sudah isi KRS
  statusRegistrasi?: number;
}

interface MataKuliah {
  kode: string;
  nama: string;
  sks: number;
  kelas: string;
  harga: string;
  status?: "available" | "full";
}

export function RegistrasiMataKuliahView({
  statusRegistrasi = 0,
}: RegistrasiMataKuliahViewProps) {
  const [showPreviewJadwal, setShowPreviewJadwal] =
    useState(false);
  const [isClosingPreview, setIsClosingPreview] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedMataKuliah, setSelectedMataKuliah] = useState<
    MataKuliah[]
  >([]);
  const [kelasDropdown, setKelasDropdown] =
    useState("TI-22-PA");

  const handleClosePreviewJadwal = () => {
    setIsClosingPreview(true);
    setTimeout(() => {
      setShowPreviewJadwal(false);
      setIsClosingPreview(false);
    }, 300);
  };

  // Data untuk SEBELUM registrasi (status = 0)
  const mataKuliahTersedia: MataKuliah[] = [
    {
      kode: "TIFA3M0",
      nama: "LAB. PENGOLAHAN CITRA",
      sks: 0,
      kelas: "TI-22-PB",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA3M0",
      nama: "LAB. PENGOLAHAN CITRA",
      sks: 0,
      kelas: "TI-22-KA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA3M3",
      nama: "PENGOLAHAN CITRA",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA3M3",
      nama: "PENGOLAHAN CITRA",
      sks: 3,
      kelas: "TI-22-PB",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA3M3",
      nama: "PENGOLAHAN CITRA",
      sks: 3,
      kelas: "TI-22-KA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4D3",
      nama: "ROBOTIKA",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4D3",
      nama: "ROBOTIKA",
      sks: 3,
      kelas: "TI-22-PB",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4D3",
      nama: "ROBOTIKA",
      sks: 3,
      kelas: "TI-22-KA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4F3",
      nama: "MACHINE LEARNING",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4F3",
      nama: "MACHINE LEARNING",
      sks: 3,
      kelas: "TI-22-PB",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4F3",
      nama: "MACHINE LEARNING",
      sks: 3,
      kelas: "TI-22-KA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4H3",
      nama: "SEMINAR",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4H3",
      nama: "SEMINAR",
      sks: 3,
      kelas: "TI-22-PB",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4H3",
      nama: "SEMINAR",
      sks: 3,
      kelas: "TI-22-KA",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TIFA4E6",
      nama: "SKRIPSI",
      sks: 6,
      kelas: "TI-21-KA",
      harga: "Rp 0",
      status: "full",
    },
    {
      kode: "TIFA3M0",
      nama: "LAB. PENGOLAHAN CITRA",
      sks: 0,
      kelas: "TI-22-PA / TI-22-PA2",
      harga: "Rp 0",
      status: "available",
    },
    {
      kode: "TINAJB3",
      nama: "PENDIDIKAN KARAKTER",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
      status: "available",
    },
  ];

  // Data untuk SESUDAH registrasi (status = 1)
  const mataKuliahTerdaftar: MataKuliah[] = [
    {
      kode: "TIFA4F3",
      nama: "MACHINE LEARNING",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
    },
    {
      kode: "TINAJB3",
      nama: "PENDIDIKAN KARAKTER",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
    },
    {
      kode: "TIFA3M3",
      nama: "PENGOLAHAN CITRA",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
    },
    {
      kode: "TIFA4D3",
      nama: "ROBOTIKA",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
    },
    {
      kode: "TIFA4H3",
      nama: "SEMINAR",
      sks: 3,
      kelas: "TI-22-PA",
      harga: "Rp 0",
    },
    {
      kode: "TIFA3M0",
      nama: "LAB. PENGOLAHAN CITRA",
      sks: 0,
      kelas: "TI-22-PA",
      harga: "Rp 0",
    },
  ];

  const jadwalData = [
    {
      shift: "07:30:00 - 10:00:00",
      monday: null,
      tuesday: "SEMINAR",
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
    },
    {
      shift: "10:15:00 - 12:45:00",
      monday: "PENDIDIKAN KARAKTER",
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
    },
    {
      shift: "13:00:00 - 15:30:00",
      monday: null,
      tuesday: null,
      wednesday: "ROBOTIKA",
      thursday: "MACHINE LEARNING",
      friday: null,
      saturday: null,
    },
    {
      shift: "13:30:00 - 15:00:00",
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: "SEMINAR",
      saturday: null,
    },
    {
      shift: "15:45:00 - 18:30:00",
      monday: null,
      tuesday: null,
      wednesday: "LAB. PENGOLAHAN CITRA",
      thursday: "PENGOLAHAN CITRA",
      friday: null,
      saturday: null,
    },
  ];

  const handleToggleMataKuliah = (mk: MataKuliah) => {
    const isSelected = selectedMataKuliah.some(
      (item) =>
        item.kode === mk.kode && item.kelas === mk.kelas,
    );

    if (isSelected) {
      setSelectedMataKuliah(
        selectedMataKuliah.filter(
          (item) =>
            !(item.kode === mk.kode && item.kelas === mk.kelas),
        ),
      );
    } else {
      setSelectedMataKuliah([...selectedMataKuliah, mk]);
    }
  };

  const handleRemoveMataKuliah = (mk: MataKuliah) => {
    setSelectedMataKuliah(
      selectedMataKuliah.filter(
        (item) =>
          !(item.kode === mk.kode && item.kelas === mk.kelas),
      ),
    );
  };

  const isSelected = (mk: MataKuliah) => {
    return selectedMataKuliah.some(
      (item) =>
        item.kode === mk.kode && item.kelas === mk.kelas,
    );
  };

  const totalSKS =
    statusRegistrasi === 1
      ? mataKuliahTerdaftar.reduce((sum, mk) => sum + mk.sks, 0)
      : selectedMataKuliah.reduce((sum, mk) => sum + mk.sks, 0);

  // RENDER SEBELUM REGISTRASI (status = 0)
  if (statusRegistrasi === 0) {
    return (
      <>
        <div className="pb-24 bg-gray-50 min-h-screen">
          {/* Student Info Card */}
          <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
              <h2 className="text-center font-bold text-base text-[#5b468a] mb-4">
                RENCANA STUDI SEMESTER GANJIL 2025/2026
              </h2>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 w-[120px] flex-shrink-0">
                    <User className="w-3 h-3 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-600">
                      MAHASISWA
                    </span>
                  </div>
                  <span className="text-xs text-gray-700">:</span>
                  <span className="flex-1 text-xs font-bold text-gray-800">
                    CARLOS IMMANUEL TAMPUBOLON - 222310064
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 w-[120px] flex-shrink-0">
                    <GraduationCap className="w-3 h-3 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-600">
                      KELAS
                    </span>
                  </div>
                  <span className="text-xs text-gray-700">:</span>
                  <span className="flex-1 text-xs font-bold text-gray-800">
                    TI-22-PA
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 w-[120px] flex-shrink-0">
                    <BookOpen className="w-3 h-3 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-600">
                      DOSEN WALI
                    </span>
                  </div>
                  <span className="text-xs text-gray-700">:</span>
                  <span className="flex-1 text-xs font-bold text-gray-800">
                    Isman Mulia S.Komp., M.Kom.
                  </span>
                </div>

                {/* Dropdown Kelas Peminatan */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <label className="text-xs font-semibold text-gray-600 mb-2 block">
                    Pilih Kelas Peminatan
                  </label>
                  <div className="relative">
                    <select
                      value={kelasDropdown}
                      onChange={(e) =>
                        setKelasDropdown(e.target.value)
                      }
                      disabled
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs font-semibold text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#5b468a]/50"
                    >
                      <option value="TI-22-PA">
                        Pilih Kelas Peminatan
                      </option>
                      <option value="TI-22-PB">TI-22-PB</option>
                      <option value="TI-22-KA">TI-22-KA</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Warning Message */}
          <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-2">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3">
              <p className="text-xs font-bold text-red-600 text-center">
                KLIK PREVIEW JADWAL DI BAWAH INI UNTUK MENGECEK
                JADWAL BENTROK
              </p>
            </div>
          </div>

          {/* Preview Jadwal Button */}
          <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-3">
            <button
              onClick={() => setShowPreviewJadwal(true)}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Preview Jadwal
            </button>
          </div>

          {/* Tabs */}
          <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4">
            <div className="flex gap-1.5 justify-between">
              {[1, 2, 3, 4].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`flex-1 px-2 py-2 rounded-lg font-semibold text-[11px] whitespace-nowrap transition-all ${
                    selectedTab === tab
                      ? "bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  Tingkat {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Mata Kuliah yang Ditawarkan */}
          <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4">
            <h3 className="font-bold text-sm text-gray-800 mb-3">
              Mata Kuliah yang Ditawarkan
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white">
                      <th className="px-2 py-3 text-center text-[10px] font-semibold w-10">
                        Pilih
                      </th>
                      <th className="px-2 py-3 text-left text-[10px] font-semibold">
                        Mata Kuliah
                      </th>
                      <th className="px-2 py-3 text-center text-[10px] font-semibold">
                        SKS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mataKuliahTersedia.map((mk, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 transition-colors ${
                          mk.status === "available"
                            ? "bg-yellow-50 hover:bg-yellow-100"
                            : "bg-red-50 hover:bg-red-100"
                        }`}
                      >
                        <td className="px-2 py-3 text-center">
                          <input
                            type="checkbox"
                            checked={isSelected(mk)}
                            onChange={() =>
                              handleToggleMataKuliah(mk)
                            }
                            disabled={mk.status === "full"}
                            className="w-4 h-4 rounded border-gray-300 text-[#5b468a] focus:ring-[#5b468a] disabled:opacity-50"
                          />
                        </td>
                        <td className="px-2 py-3">
                          <div className="flex flex-col gap-1">
                            <span className="inline-block bg-gray-800 text-white text-[9px] px-1.5 py-0.5 rounded font-bold w-fit">
                              {mk.kode}
                            </span>
                            <span className="font-bold text-[11px] text-gray-800 uppercase leading-tight">
                              {mk.nama}
                            </span>
                            <span className="text-[9px] text-gray-600">
                              {mk.kelas}
                            </span>
                          </div>
                        </td>
                        <td className="px-2 py-3 text-center">
                          <span className="font-bold text-xs text-gray-800">
                            {mk.sks}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mata Kuliah yang Diambil */}
          <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-2">
            <h3 className="font-bold text-sm text-gray-800 mb-3">
              Mata Kuliah yang Diambil
            </h3>

            {selectedMataKuliah.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                <p className="text-xs text-gray-500">
                  Belum ada mata kuliah yang dipilih
                </p>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-3">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white">
                        <th className="px-2 py-3 text-left text-[10px] font-semibold">
                          Mata Kuliah
                        </th>
                        <th className="px-2 py-3 text-center text-[10px] font-semibold">
                          SKS
                        </th>
                        <th className="px-2 py-3 text-center text-[10px] font-semibold">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedMataKuliah.map((mk, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-2 py-3">
                            <div className="flex flex-col gap-1">
                              <span className="inline-block bg-gray-800 text-white text-[9px] px-1.5 py-0.5 rounded font-bold w-fit">
                                {mk.kode}
                              </span>
                              <span className="font-bold text-[11px] text-gray-800 uppercase leading-tight">
                                {mk.nama}
                              </span>
                              <span className="text-[9px] text-gray-600">
                                {mk.kelas}
                              </span>
                            </div>
                          </td>
                          <td className="px-2 py-3 text-center">
                            <span className="font-bold text-xs text-gray-800">
                              {mk.sks}
                            </span>
                          </td>
                          <td className="px-2 py-3 text-center">
                            <button
                              onClick={() =>
                                handleRemoveMataKuliah(mk)
                              }
                              className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-purple-50 border-t-2 border-[#5b468a]">
                        <td className="px-2 py-3">
                          <span className="font-bold text-xs text-[#5b468a]">
                            Total SKS
                          </span>
                        </td>
                        <td className="px-2 py-3 text-center">
                          <span className="font-bold text-sm text-[#5b468a]">
                            {totalSKS}
                          </span>
                        </td>
                        <td className="px-2 py-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button className="w-full bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95">
                  Tambah Mata Kuliah
                </button>
              </>
            )}
          </div>

          {/* Legend */}
          <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">
                Keterangan:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-yellow-100 border border-yellow-300 rounded flex-shrink-0"></div>
                  <p className="text-xs text-gray-700">
                    Kelas mata kuliah yang diambil sesuai dengan
                    kelas mahasiswa
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-red-100 border border-red-300 rounded flex-shrink-0"></div>
                  <p className="text-xs text-gray-700">
                    Kelas sudah penuh (melebihi Kuota)
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    Semester Acuan: SEMESTER GANJIL 2025/2026
                  </p>
                  <p className="text-xs text-gray-600">
                    Maksimum SKS yang dapat diambil: 24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Jadwal Modal - sama untuk kedua status */}
        {showPreviewJadwal && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 overflow-y-auto"
            style={{
              animation: isClosingPreview ? 'fadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              animationFillMode: 'forwards'
            }}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-4"
              style={{
                animation: isClosingPreview ? 'zoomOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'zoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                animationFillMode: 'forwards'
              }}
            >
              <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white px-4 py-4 rounded-t-2xl flex items-center justify-between sticky top-0">
                <h3 className="font-bold text-base">
                  Preview Jadwal
                </h3>
                <button
                  onClick={handleClosePreviewJadwal}
                  className="p-2 hover:bg-white/10 rounded-lg transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4">
                <div className="mb-4 bg-blue-50 rounded-xl p-3 border border-blue-200">
                  <p className="text-xs font-semibold text-gray-700 mb-2">
                    INFORMATION:
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-xs text-gray-700">
                        WARNA HIJAU BERARTI JADWAL TIDAK BENTROK
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span className="text-xs text-red-600">
                        WARNA KUNING BERARTI JADWAL BENTROK
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white">
                        <th className="px-2 py-3 text-left text-[10px] font-semibold">
                          Hari
                        </th>
                        <th className="px-2 py-3 text-left text-[10px] font-semibold">
                          Mata Kuliah
                        </th>
                        <th className="px-2 py-3 text-center text-[10px] font-semibold">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jadwalData.flatMap((row, rowIdx) => {
                        const days = [
                          {
                            key: "monday" as const,
                            label: "MONDAY",
                          },
                          {
                            key: "tuesday" as const,
                            label: "TUESDAY",
                          },
                          {
                            key: "wednesday" as const,
                            label: "WEDNESDAY",
                          },
                          {
                            key: "thursday" as const,
                            label: "THURSDAY",
                          },
                          {
                            key: "friday" as const,
                            label: "FRIDAY",
                          },
                          {
                            key: "saturday" as const,
                            label: "SATURDAY",
                          },
                        ];

                        return days
                          .filter((day) => row[day.key])
                          .map((day, idx) => (
                            <tr
                              key={`${rowIdx}-${idx}`}
                              className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-2 py-3">
                                <div className="flex flex-col gap-1">
                                  <span className="font-bold text-[10px] text-[#5b468a]">
                                    {day.label}
                                  </span>
                                  <span className="text-[9px] text-gray-600">
                                    {row.shift}
                                  </span>
                                </div>
                              </td>
                              <td className="px-2 py-3">
                                <span className="font-bold text-[11px] text-gray-800 uppercase">
                                  {row[day.key]}
                                </span>
                              </td>
                              <td className="px-2 py-3 text-center">
                                <span className="inline-block bg-green-500 text-white text-[9px] px-2 py-1 rounded-full font-semibold">
                                  ✓ OK
                                </span>
                              </td>
                            </tr>
                          ));
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes zoomOut {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              transform: scale(0.95);
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          @keyframes slideDown {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(100%);
            }
          }
        `}</style>
      </>
    );
  }

  // RENDER SESUDAH REGISTRASI (status = 1)
  return (
    <>
      <div className="pb-24 bg-gray-50 min-h-screen">
        {/* Student Info Card */}
        <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
            <h2 className="text-center font-bold text-base text-[#5b468a] mb-4">
              RENCANA STUDI SEMESTER GANJIL 2025/2026
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="flex items-center gap-1 w-[120px] flex-shrink-0">
                  <User className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-semibold text-gray-600">
                    MAHASISWA
                  </span>
                </div>
                <span className="text-xs text-gray-700">:</span>
                <span className="flex-1 text-xs font-bold text-gray-800">
                  CARLOS IMMANUEL TAMPUBOLON - 222310064
                </span>
              </div>

              <div className="flex items-start gap-2">
                <div className="flex items-center gap-1 w-[120px] flex-shrink-0">
                  <GraduationCap className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-semibold text-gray-600">
                    KELAS
                  </span>
                </div>
                <span className="text-xs text-gray-700">:</span>
                <span className="flex-1 text-xs font-bold text-gray-800">
                  TI-22-PA
                </span>
              </div>

              <div className="flex items-start gap-2">
                <div className="flex items-center gap-1 w-[120px] flex-shrink-0">
                  <BookOpen className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-semibold text-gray-600">
                    DOSEN WALI
                  </span>
                </div>
                <span className="text-xs text-gray-700">:</span>
                <span className="flex-1 text-xs font-bold text-gray-800">
                  Isman Mulia S.Komp., M.Kom.
                </span>
              </div>

              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex items-start gap-2">
                  <div className="flex items-center gap-1 w-[120px] flex-shrink-0">
                    <FileText className="w-3 h-3 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-600">
                      JENIS REGISTRASI
                    </span>
                  </div>
                  <span className="text-xs text-gray-700">
                    :
                  </span>
                  <span className="flex-1 text-xs font-bold text-gray-800">
                    -
                  </span>
                </div>

                <div className="flex items-start gap-2 mt-2">
                  <div className="flex items-center gap-1 w-[120px] flex-shrink-0">
                    <DollarSign className="w-3 h-3 text-gray-600" />
                    <span className="text-xs font-semibold text-gray-600">
                      KETERANGAN
                    </span>
                  </div>
                  <span className="text-xs text-gray-700">
                    :
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-red-600">
                      KLIK PREVIEW JADWAL DI BAWAH INI UNTUK
                      MENGECEK JADWAL BENTROK
                    </p>
                    <button
                      onClick={() => setShowPreviewJadwal(true)}
                      className="mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      Preview Jadwal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Mata Kuliah */}
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white">
                  <th className="px-2 py-3 text-left text-[10px] font-semibold">
                    Mata Kuliah
                  </th>
                  <th className="px-2 py-3 text-center text-[10px] font-semibold">
                    SKS
                  </th>
                  <th className="px-2 py-3 text-center text-[10px] font-semibold">
                    Kelas
                  </th>
                  <th className="px-2 py-3 text-center text-[10px] font-semibold">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody>
                {mataKuliahTerdaftar.map((mk, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-2 py-3">
                      <div className="flex flex-col gap-1">
                        <span className="inline-block bg-gray-800 text-white text-[9px] px-1.5 py-0.5 rounded font-bold w-fit">
                          {mk.kode}
                        </span>
                        <span className="font-bold text-[11px] text-gray-800 uppercase leading-tight">
                          {mk.nama}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span className="font-bold text-xs text-gray-800">
                        {mk.sks}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span className="text-[10px] text-gray-700">
                        {mk.kelas}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span className="text-[10px] font-semibold text-green-600">
                        {mk.harga}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-purple-50 border-t-2 border-[#5b468a]">
                  <td className="px-2 py-3">
                    <span className="font-bold text-xs text-[#5b468a]">
                      TOTAL SKS
                    </span>
                  </td>
                  <td className="px-2 py-3 text-center">
                    <span className="font-bold text-sm text-[#5b468a]">
                      {totalSKS}
                    </span>
                  </td>
                  <td className="px-2 py-3"></td>
                  <td className="px-2 py-3 text-center">
                    <span className="font-bold text-xs text-green-600">
                      Rp 0
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Status & Actions */}
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pb-6 space-y-3">
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
            <div className="flex items-start gap-2">
              <FileText className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-gray-600">
                  STATUS TERAKHIR:
                </p>
                <p className="text-sm font-bold text-green-600 mt-1">
                  KSM ANDA TELAH DI CETAK
                </p>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Cetak KSM
          </button>
        </div>
      </div>

      {/* Preview Jadwal Modal - sama untuk kedua status */}
      {showPreviewJadwal && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 overflow-y-auto"
          style={{
            animation: isClosingPreview ? 'fadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            animationFillMode: 'forwards'
          }}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-4"
            style={{
              animation: isClosingPreview ? 'zoomOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'zoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              animationFillMode: 'forwards'
            }}
          >
            <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white px-4 py-4 rounded-t-2xl flex items-center justify-between sticky top-0">
              <h3 className="font-bold text-base">
                Preview Jadwal
              </h3>
              <button
                onClick={handleClosePreviewJadwal}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="mb-4 bg-blue-50 rounded-xl p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">
                  INFORMATION:
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-xs text-gray-700">
                      WARNA HIJAU BERARTI JADWAL TIDAK BENTROK
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-xs text-red-600">
                      WARNA KUNING BERARTI JADWAL BENTROK
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white">
                      <th className="px-2 py-3 text-left text-[10px] font-semibold">
                        Hari
                      </th>
                      <th className="px-2 py-3 text-left text-[10px] font-semibold">
                        Mata Kuliah
                      </th>
                      <th className="px-2 py-3 text-center text-[10px] font-semibold">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jadwalData.flatMap((row, rowIdx) => {
                      const days = [
                        {
                          key: "monday" as const,
                          label: "MONDAY",
                        },
                        {
                          key: "tuesday" as const,
                          label: "TUESDAY",
                        },
                        {
                          key: "wednesday" as const,
                          label: "WEDNESDAY",
                        },
                        {
                          key: "thursday" as const,
                          label: "THURSDAY",
                        },
                        {
                          key: "friday" as const,
                          label: "FRIDAY",
                        },
                        {
                          key: "saturday" as const,
                          label: "SATURDAY",
                        },
                      ];

                      return days
                        .filter((day) => row[day.key])
                        .map((day, idx) => (
                          <tr
                            key={`${rowIdx}-${idx}`}
                            className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-2 py-3">
                              <div className="flex flex-col gap-1">
                                <span className="font-bold text-[10px] text-[#5b468a]">
                                  {day.label}
                                </span>
                                <span className="text-[9px] text-gray-600">
                                  {row.shift}
                                </span>
                              </div>
                            </td>
                            <td className="px-2 py-3">
                              <span className="font-bold text-[11px] text-gray-800 uppercase">
                                {row[day.key]}
                              </span>
                            </td>
                            <td className="px-2 py-3 text-center">
                              <span className="inline-block bg-green-500 text-white text-[9px] px-2 py-1 rounded-full font-semibold">
                                ✓ OK
                              </span>
                            </td>
                          </tr>
                        ));
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoomOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
}