import { Download, FileText, ChevronDown, Award, TrendingUp, BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

interface NilaiViewProps {
  onBack?: () => void;
  onMenuToggle?: () => void;
  onNavigateToDetail?: (mataKuliah: any) => void;
}

export function NilaiView({ onNavigateToDetail }: NilaiViewProps) {
  const [periodeAkademik, setPeriodeAkademik] = useState('semua');
  const [semester, setSemester] = useState('semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMataKuliah, setSelectedMataKuliah] = useState<typeof mataKuliah[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 15;

  const studentInfo = {
    npm: '222310064',
    nama: 'CARLOS IMMANUEL TAMPUBOLON',
    kelas: 'TI-22-PA',
    programStudi: 'Teknologi Informasi'
  };

  const ringkasanNilai = [
    {
      tahunAjar: '2022/2023',
      totalSKS: '40 SKS',
      ganjil: { sks: '19 SKS', ips: '3.84' },
      genap: { sks: '21 SKS', ips: '3.81' },
      antara: { sks: '0 SKS', ips: '0' }
    },
    {
      tahunAjar: '2023/2024',
      totalSKS: '43 SKS',
      ganjil: { sks: '21 SKS', ips: '3.79' },
      genap: { sks: '22 SKS', ips: '3.78' },
      antara: { sks: '0 SKS', ips: '0' }
    },
    {
      tahunAjar: '2024/2025',
      totalSKS: '40 SKS',
      ganjil: { sks: '20 SKS', ips: '3.97' },
      genap: { sks: '20 SKS', ips: '4' },
      antara: { sks: '0 SKS', ips: '0' }
    }
  ];

  const mataKuliah = [
    { kode: 'TIRA184', nama: 'ALGORITMA PEMROGRAMAN DAN STRUKTUR DATA', sks: 4, periode: '2022/2023', semester: 'GANJIL', hurufMutu: 'A', nilai: 94 },
    { kode: 'TIRA2M3', nama: 'ALJABAR LINEAR', sks: 3, periode: '2022/2023', semester: 'GENAP', hurufMutu: 'A', nilai: 96 },
    { kode: 'TIRA1L3', nama: 'BAHASA INDONESIA', sks: 3, periode: '2022/2023', semester: 'GENAP', hurufMutu: 'A', nilai: 94 },
    { kode: 'TIRA1M3', nama: 'BAHASA INGGRIS', sks: 3, periode: '2022/2023', semester: 'GANJIL', hurufMutu: 'A', nilai: 90 },
    { kode: 'TIRA1C3', nama: 'DESAIN DAN ANALISIS ALGORITMA', sks: 3, periode: '2022/2023', semester: 'GENAP', hurufMutu: 'B+', nilai: 78 },
    { kode: 'TIRA1V3', nama: 'ELEKTRONIKA DASAR DAN RANGKAIAN DIGITAL', sks: 3, periode: '2022/2023', semester: 'GENAP', hurufMutu: 'B+', nilai: 78 },
    { kode: 'TIRA2P3', nama: 'JARINGAN KOMPUTER', sks: 3, periode: '2022/2023', semester: 'GENAP', hurufMutu: 'A-', nilai: 82 },
    { kode: 'TIRA1Q3', nama: 'MATEMATIKA DASAR', sks: 3, periode: '2022/2023', semester: 'GANJIL', hurufMutu: 'A', nilai: 90 },
    { kode: 'TIRA1T3', nama: 'MATEMATIKA DISKRIT', sks: 3, periode: '2023/2023', semester: 'GANJIL', hurufMutu: 'A', nilai: 96 },
    { kode: 'TIRA1K3', nama: 'ORGANISASI DAN ARSITEKTUR KOMPUTER', sks: 3, periode: '2022/2023', semester: 'GANJIL', hurufMutu: 'A', nilai: 86 },
    { kode: 'TIRA1H3', nama: 'PENDIDIKAN AGAMA PROTESTAN', sks: 3, periode: '2022/2023', semester: 'GANJIL', hurufMutu: 'B+', nilai: 75 },
    { kode: 'TIRA1A3', nama: 'PENGANTAR TEKNOLOGI INFORMASI', sks: 3, periode: '2022/2023', semester: 'GANJIL', hurufMutu: 'A-', nilai: 84 },
    { kode: 'TIRA1S3', nama: 'STATISTIKA', sks: 3, periode: '2023/2024', semester: 'GENAP', hurufMutu: 'B+', nilai: 80 },
    { kode: 'TIRA2N3', nama: 'ANALISIS DAN PERANCANGAN SISTEM INFORMASI', sks: 3, periode: '2023/2024', semester: 'GANJIL', hurufMutu: 'A-', nilai: 80 },
    { kode: 'TIRA1U2', nama: 'BAHASA INGGRIS KOMPUTER', sks: 2, periode: '2023/2024', semester: 'GENAP', hurufMutu: 'A', nilai: 93.9 }
  ];

  const currentMataKuliah = mataKuliah.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleRowClick = (mk: typeof mataKuliah[0]) => {
    if (onNavigateToDetail) {
      onNavigateToDetail(mk);
    }
    setSelectedMataKuliah(mk);
    setIsModalOpen(true);
  };

  // Komponen nilai breakdown
  const komponenNilai = [
    { komponen: 'KEHADIRAN', bobot: '10%', nilai: 100 },
    { komponen: 'QUIZ', bobot: '10%', nilai: 95 },
    { komponen: 'TUGAS / LAB', bobot: '20%', nilai: 98 },
    { komponen: 'UTS', bobot: '30%', nilai: 93 },
    { komponen: 'UAS', bobot: '30%', nilai: 90 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Main Content - Max width container for desktop */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-5 space-y-4 md:space-y-6">
        {/* Student Info Card - Responsive Grid */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-sm">
            <div>
              <p className="text-gray-500 text-xs mb-1">NPM</p>
              <p className="font-bold text-gray-900">{studentInfo.npm}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Kelas</p>
              <p className="font-bold text-gray-900">{studentInfo.kelas}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-gray-500 text-xs mb-1">Nama Lengkap</p>
              <p className="font-bold text-gray-900">{studentInfo.nama}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-gray-500 text-xs mb-1">Program Studi</p>
              <p className="font-bold text-gray-900">{studentInfo.programStudi}</p>
            </div>
          </div>
        </div>

        {/* IPK Summary - Eye-catching */}
        <div className="bg-gradient-to-br from-[#5b468a] via-[#6b5698] to-[#4a3771] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Total SKS Lulus</p>
                <p className="text-3xl font-bold">126 SKS</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <TrendingUp className="w-8 h-8" />
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white/90 text-xs mb-2">Indeks Prestasi Kumulatif</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">3.83</p>
                <p className="text-white/80 text-sm">/ 4.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ringkasan Per Tahun - Card Style */}
        <div>
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#5b468a]" />
            Ringkasan Per Tahun Akademik
          </h3>
          <div className="space-y-3">
            {ringkasanNilai.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-white px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">{item.tahunAjar}</h4>
                    <span className="bg-[#5b468a] text-white px-3 py-1 rounded-lg text-xs font-bold">{item.totalSKS}</span>
                  </div>
                </div>
                <div className="p-4 grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Ganjil</p>
                    <p className="text-xs text-gray-600 mb-1">{item.ganjil.sks}</p>
                    <p className="text-lg font-bold text-blue-600">{item.ganjil.ips}</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-xs text-gray-500 mb-1">Genap</p>
                    <p className="text-xs text-gray-600 mb-1">{item.genap.sks}</p>
                    <p className="text-lg font-bold text-green-600">{item.genap.ips}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Antara</p>
                    <p className="text-xs text-gray-600 mb-1">{item.antara.sks}</p>
                    <p className="text-lg font-bold text-gray-400">{item.antara.ips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white px-4 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Transkrip
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Cetak KHS
          </button>
        </div>

        {/* Filter Section - Simplified */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-gray-700 text-xs font-semibold mb-2 block">Periode Akademik</label>
            <div className="relative">
              <select
                value={periodeAkademik}
                onChange={(e) => setPeriodeAkademik(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium appearance-none focus:outline-none focus:border-[#5b468a] transition-colors"
              >
                <option value="semua">Semua</option>
                <option value="2022/2023">2022/2023</option>
                <option value="2023/2024">2023/2024</option>
                <option value="2024/2025">2024/2025</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="text-gray-700 text-xs font-semibold mb-2 block">Semester</label>
            <div className="relative">
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium appearance-none focus:outline-none focus:border-[#5b468a] transition-colors"
              >
                <option value="semua">Semua</option>
                <option value="ganjil">Ganjil</option>
                <option value="genap">Genap</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Detail Mata Kuliah */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#5b468a]" />
              Detail Mata Kuliah
            </h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, mataKuliah.length)} of {mataKuliah.length}
            </span>
          </div>
          
          {/* Table - Mobile Optimized */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white">
                  <th className="px-2 py-3 text-left text-[10px] font-bold w-8">No</th>
                  <th className="px-2 py-3 text-left text-[10px] font-bold">Mata Kuliah</th>
                  <th className="px-2 py-3 text-center text-[10px] font-bold w-12">SKS</th>
                  <th className="px-2 py-3 text-center text-[10px] font-bold w-16">Nilai</th>
                </tr>
              </thead>
              <tbody>
                {currentMataKuliah.map((mk, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleRowClick(mk)}>
                    <td className="px-2 py-3 text-[10px] text-gray-700 font-bold text-center">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-2 py-3">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="bg-gray-900 text-white px-1.5 py-0.5 rounded text-[9px] font-bold">
                            {mk.kode}
                          </span>
                        </div>
                        <div className="font-semibold text-[11px] text-gray-900 leading-tight mb-1">
                          {mk.nama}
                        </div>
                        <div className="flex items-center gap-2 text-[9px] text-gray-500">
                          <span>{mk.periode}</span>
                          <span>•</span>
                          <span className="capitalize">{mk.semester.toLowerCase()}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <span className="bg-blue-50 text-blue-700 px-1.5 py-1 rounded-md text-[10px] font-bold inline-block">
                        {mk.sks}
                      </span>
                    </td>
                    <td className="px-2 py-3">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`px-2 py-1 rounded-lg font-bold text-[11px] shadow-sm inline-block ${
                          mk.hurufMutu === 'A' ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' :
                          mk.hurufMutu === 'A-' ? 'bg-gradient-to-br from-green-400 to-green-500 text-white' :
                          mk.hurufMutu === 'B+' ? 'bg-gradient-to-br from-blue-400 to-blue-500 text-white' :
                          'bg-gradient-to-br from-yellow-400 to-yellow-500 text-white'
                        }`}>
                          {mk.hurufMutu}
                        </span>
                        <span className="text-[9px] font-bold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                          {mk.nilai}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 gap-3">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white hover:shadow-lg'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                Hal {currentPage}/{Math.ceil(mataKuliah.length / itemsPerPage)}
              </span>
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(Math.ceil(mataKuliah.length / itemsPerPage), prev + 1))}
              disabled={currentPage * itemsPerPage >= mataKuliah.length}
              className={`px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 ${
                currentPage * itemsPerPage >= mataKuliah.length
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white hover:shadow-lg'
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Detail Nilai with Slide Animation */}
      {isModalOpen && selectedMataKuliah && (
        <>
          {/* Backdrop with fade animation */}
          <div 
            className="fixed inset-0 bg-black/60 z-50 animate-in fade-in duration-300"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content with slide up animation */}
          <div className="fixed inset-x-0 bottom-0 md:top-20 z-50 overflow-hidden animate-in slide-in-from-bottom duration-500 ease-out">
            <div className="bg-white h-full rounded-t-3xl shadow-2xl overflow-y-auto max-w-[800px] mx-auto">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-5 py-4 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-bold text-lg">Detail Nilai</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-white hover:bg-white/20 p-2 rounded-lg transition-all active:scale-95"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-5 space-y-4">
                {/* Mata Kuliah Info */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-4 py-3">
                    <h3 className="text-white font-bold text-sm">Informasi Mata Kuliah</h3>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="text-gray-500 text-xs mb-1">Kode</p>
                        <span className="bg-gray-900 text-white px-2.5 py-1 rounded-md text-xs font-bold">
                          {selectedMataKuliah?.kode}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-xs mb-1">SKS</p>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm font-bold inline-block">
                          {selectedMataKuliah?.sks}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-500 text-xs mb-1">Nama Mata Kuliah</p>
                      <p className="font-bold text-gray-900 text-sm leading-snug">{selectedMataKuliah?.nama}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Periode Akademik</p>
                        <p className="font-bold text-gray-900 text-sm">{selectedMataKuliah?.periode}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Semester</p>
                        <p className="font-bold text-gray-900 text-sm capitalize">{selectedMataKuliah?.semester}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nilai Akhir */}
                <div className="bg-gradient-to-br from-[#5b468a] via-[#6b5698] to-[#4a3771] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-white/80 text-sm mb-2">Nilai Akhir</p>
                        <div className="flex items-baseline gap-3">
                          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl inline-block">
                            <p className="text-4xl font-bold">{selectedMataKuliah?.nilai}</p>
                          </div>
                          <div className={`px-4 py-2 rounded-xl font-bold text-xl shadow-lg inline-block ${
                            selectedMataKuliah?.hurufMutu === 'A' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                            selectedMataKuliah?.hurufMutu === 'A-' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                            selectedMataKuliah?.hurufMutu === 'B+' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                            'bg-gradient-to-br from-yellow-400 to-yellow-500'
                          }`}>
                            {selectedMataKuliah?.hurufMutu}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                        <Award className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breakdown Komponen Nilai */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#5b468a]" />
                    Breakdown Komponen Nilai
                  </h3>
                  
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    {/* Header Table */}
                    <div className="bg-gradient-to-r from-gray-100 to-gray-50 border-b border-gray-200">
                      <div className="grid grid-cols-12 gap-2 px-4 py-3">
                        <div className="col-span-6">
                          <p className="text-xs font-bold text-gray-700">Komponen</p>
                        </div>
                        <div className="col-span-3 text-center">
                          <p className="text-xs font-bold text-gray-700">Bobot</p>
                        </div>
                        <div className="col-span-3 text-right">
                          <p className="text-xs font-bold text-gray-700">Nilai</p>
                        </div>
                      </div>
                    </div>

                    {/* Body Table */}
                    <div className="divide-y divide-gray-100">
                      {komponenNilai.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 gap-2 px-4 py-3 hover:bg-gray-50 transition-colors">
                          <div className="col-span-6">
                            <p className="text-sm font-semibold text-gray-900">{item.komponen}</p>
                          </div>
                          <div className="col-span-3 text-center">
                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-bold inline-block">
                              {item.bobot}
                            </span>
                          </div>
                          <div className="col-span-3 text-right">
                            <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-sm font-bold inline-block">
                              {item.nilai}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info Footer */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full p-2 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-blue-900 mb-1">Informasi</p>
                      <p className="text-xs text-blue-800 leading-relaxed">
                        Nilai akhir dihitung berdasarkan bobot dari setiap komponen penilaian. 
                        Pastikan untuk memperhatikan setiap komponen untuk mendapatkan hasil yang optimal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacing for bottom padding */}
                <div className="h-4"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}