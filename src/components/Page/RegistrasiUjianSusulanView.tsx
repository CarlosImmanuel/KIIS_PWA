import { useState } from "react";
import { FileText, Upload, Calendar, BookOpen, AlertCircle, CheckCircle2, X, ChevronDown, Search, Clock, ChevronLeft, Menu } from "lucide-react";

interface RegistrasiUjianSusulanViewProps {
  onBack?: () => void;
  onMenuToggle?: () => void;
}

export function RegistrasiUjianSusulanView({ onBack, onMenuToggle }: RegistrasiUjianSusulanViewProps) {
  const [showModal, setShowModal] = useState(false);
  const [tahunAjar, setTahunAjar] = useState("");
  const [semester, setSemester] = useState("");
  const [jenisUjian, setJenisUjian] = useState("");
  const [mataKuliah, setMataKuliah] = useState("");
  const [alasan, setAlasan] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [searchMataKuliah, setSearchMataKuliah] = useState("");

  // Mock data untuk tahun ajar
  const tahunAjarOptions = [
    { value: "", label: "- Pilih Tahun Akademik -" },
    { value: "2025/2026", label: "(2526) 2025/2026" },
    { value: "2024/2025", label: "(2425) 2024/2025" },
  ];

  const semesterOptions = [
    { value: "", label: "- Pilih Semester -" },
    { value: "GENAP", label: "GENAP" },
    { value: "GANJIL", label: "GANJIL" },
  ];

  const jenisUjianOptions = [
    { value: "", label: "- Pilih Jenis Ujian -" },
    { value: "UAS SUSULAN", label: "UAS SUSULAN" },
    { value: "UTS SUSULAN", label: "UTS SUSULAN" },
  ];

  // Mock data untuk daftar ujian susulan yang sudah terdaftar
  const registeredExams = [
    {
      tanggal: "2026-01-15",
      shift: "1",
      ruangan: "R.301",
      kodeMataKuliah: "SI-101",
      namaMataKuliah: "Pemrograman Web",
      kelas: "A",
      status: "Disetujui",
      aksi: "Detail",
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      tahunAjar,
      semester,
      jenisUjian,
      mataKuliah,
      alasan,
      selectedFile,
    });
    setShowModal(false);
    // Reset form
    setTahunAjar("");
    setSemester("");
    setJenisUjian("");
    setMataKuliah("");
    setAlasan("");
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white px-4 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-lg flex-1">Registrasi Ujian Susulan</h1>
          <button
            onClick={onMenuToggle}
            className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-5">
        {/* Info Card - Prosedur */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#5b468a]/10">
          <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-4 py-3 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-white">Prosedur Pengajuan Ujian Susulan</h3>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-[#5b468a]/10 text-[#5b468a] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">1</span>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Registrasi ujian susulan yang akan diajukan, dengan klik tombol{" "}
                <span className="font-semibold text-[#5b468a]">Registrasi Ujian Susulan</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#5b468a]/10 text-[#5b468a] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Sertakan alasan dan upload bukti jika ada
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#5b468a]/10 text-[#5b468a] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Tunggu persetujuan dari PRODI, jika sudah akan ada jumlah tagihan yang harus dibayarkan. (pastikan filter jenis ujian sudah dipilih)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#5b468a]/10 text-[#5b468a] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">4</span>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Lakukan pembayaran ke rekening{" "}
                <span className="font-bold text-[#5b468a]">9882208121229999</span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#5b468a]/10 text-[#5b468a] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">5</span>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Upload bukti pembayaran, isi nominal dengan benar
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-[#5b468a]/10 text-[#5b468a] w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">6</span>
              </div>
              <p className="text-sm text-gray-700 flex-1">
                Cetak kartu ujian dan Laksanakan Ujian Susulan sesuai dengan jadwal ujian yang tertera
              </p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-md p-4 border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#5b468a]" />
            Filter Data
          </h3>
          <div className="space-y-3">
            {/* Tahun Ajar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Tahun Ajar
              </label>
              <div className="relative">
                <select
                  value={tahunAjar}
                  onChange={(e) => setTahunAjar(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#5b468a] focus:border-transparent text-sm"
                >
                  {tahunAjarOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Semester */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Semester
              </label>
              <div className="relative">
                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#5b468a] focus:border-transparent text-sm"
                >
                  {semesterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Jenis Ujian */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Jenis Ujian
              </label>
              <div className="relative">
                <select
                  value={jenisUjian}
                  onChange={(e) => setJenisUjian(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#5b468a] focus:border-transparent text-sm"
                >
                  {jenisUjianOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <FileText className="w-5 h-5" />
            <span className="text-sm">Registrasi</span>
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95">
            <FileText className="w-5 h-5" />
            <span className="text-sm">Cetak Kartu</span>
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-4 py-3 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-white">Daftar Ujian Susulan</h3>
          </div>

          {registeredExams.length === 0 ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">No data available</p>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {registeredExams.map((exam, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
                >
                  {/* Header Card */}
                  <div className="flex items-start justify-between mb-3 pb-3 border-b border-gray-200">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 text-sm mb-1">
                        {exam.namaMataKuliah}
                      </h4>
                      <p className="text-xs text-gray-500">
                        Kode: {exam.kodeMataKuliah} • Kelas: {exam.kelas}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {exam.status}
                    </span>
                  </div>

                  {/* Detail Info */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#5b468a]/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-[#5b468a]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Tanggal</p>
                        <p className="text-sm font-semibold text-gray-800">{exam.tanggal}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Shift</p>
                        <p className="text-sm font-semibold text-gray-800">{exam.shift}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Ruangan</p>
                        <p className="text-sm font-semibold text-gray-800">{exam.ruangan}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Aksi</p>
                        <button className="text-sm font-semibold text-[#5b468a] hover:underline">
                          {exam.aksi}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal Form Registrasi */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-5 py-4 flex items-center justify-between z-10">
              <h3 className="font-bold text-white text-lg">Registrasi Ujian Susulan</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-4">
              {/* Tahun Akademik */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tahun Akademik
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <select
                    value={tahunAjar}
                    onChange={(e) => setTahunAjar(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#5b468a] focus:border-transparent"
                  >
                    {tahunAjarOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Semester */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Semester
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#5b468a] focus:border-transparent"
                  >
                    {semesterOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Jenis Ujian */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jenis Ujian
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <select
                    value={jenisUjian}
                    onChange={(e) => setJenisUjian(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#5b468a] focus:border-transparent"
                  >
                    {jenisUjianOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Mata Kuliah */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mata Kuliah
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search Mata Kuliah"
                    value={searchMataKuliah}
                    onChange={(e) => setSearchMataKuliah(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b468a] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Alasan Tidak Mengikuti Ujian */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alasan Tidak Mengikuti Ujian
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  value={alasan}
                  onChange={(e) => setAlasan(e.target.value)}
                  rows={4}
                  placeholder="Masukkan alasan tidak mengikuti ujian..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b468a] focus:border-transparent resize-none"
                />
              </div>

              {/* Upload Bukti */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Bukti (surat dokter/dokumen pendukung lainnya)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#5b468a] transition-colors cursor-pointer bg-gray-50">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="w-12 h-12 bg-[#5b468a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Upload className="w-6 h-6 text-[#5b468a]" />
                    </div>
                    {selectedFile ? (
                      <p className="text-sm text-gray-700 font-medium">{selectedFile.name}</p>
                    ) : (
                      <>
                        <p className="text-sm text-gray-600 font-medium mb-1">
                          Choose File
                        </p>
                        <p className="text-xs text-gray-400">
                          PDF, JPG, PNG (Max 2MB)
                        </p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}