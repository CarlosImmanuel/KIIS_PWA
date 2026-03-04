import { User, Calendar, Clock, MapPin, BookOpen, FileText, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface DetailRekapKuliahViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
  mataKuliah: string;
  kode: string;
}

interface PertemuanData {
  pertemuan: number;
  hari: string;
  tanggal: string;
  jam: string;
  ruangan: string;
  mataKuliah: string;
  kelas: string;
  dosen: string;
  materi: string;
  status: string;
}

export function DetailRekapKuliahView({ mataKuliah, kode }: DetailRekapKuliahViewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const pertemuanData: PertemuanData[] = [
    {
      pertemuan: 1,
      hari: 'RABU',
      tanggal: '17-09-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Pengenalan Python + Pengolahan Citra',
      status: 'HADIR'
    },
    {
      pertemuan: 2,
      hari: 'RABU',
      tanggal: '24-09-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Operasi Piksel dan Histogram',
      status: 'HADIR'
    },
    {
      pertemuan: 3,
      hari: 'RABU',
      tanggal: '01-10-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Perbaikan Kualitas Citra pada Domain Spasial',
      status: 'HADIR'
    },
    {
      pertemuan: 4,
      hari: 'RABU',
      tanggal: '08-10-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Perbaikan Kualitas Citra Pada Domain Frekuensi',
      status: 'HADIR'
    },
    {
      pertemuan: 5,
      hari: 'RABU',
      tanggal: '15-10-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Image Restoration',
      status: 'HADIR'
    },
    {
      pertemuan: 6,
      hari: 'RABU',
      tanggal: '22-10-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Color Image Processing',
      status: 'HADIR'
    },
    {
      pertemuan: 7,
      hari: 'RABU',
      tanggal: '29-10-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Quiz #1',
      status: 'HADIR'
    },
    {
      pertemuan: 8,
      hari: 'RABU',
      tanggal: '12-11-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Wavelet dan Multiresolution Processing',
      status: 'HADIR'
    },
    {
      pertemuan: 9,
      hari: 'RABU',
      tanggal: '26-11-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Image Compression',
      status: 'HADIR'
    },
    {
      pertemuan: 10,
      hari: 'RABU',
      tanggal: '03-12-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Morfologi Citra',
      status: 'HADIR'
    },
    {
      pertemuan: 11,
      hari: 'RABU',
      tanggal: '10-12-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Segmentasi Citra & Ekstrasi Fitur',
      status: 'HADIR'
    },
    {
      pertemuan: 12,
      hari: 'RABU',
      tanggal: '17-12-2025',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Aplikasi Temu Kembali Citra',
      status: 'HADIR'
    },
    {
      pertemuan: 13,
      hari: 'RABU',
      tanggal: '07-01-2026',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Pembahasan Tugas dan Kuis',
      status: 'HADIR'
    },
    {
      pertemuan: 14,
      hari: 'RABU',
      tanggal: '14-01-2026',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      mataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-PA',
      dosen: 'Raiden Rayhan Pratama Rakhmadi, S.Kom., MTCNA',
      materi: 'Quiz #2',
      status: 'HADIR'
    }
  ];

  const totalPages = Math.ceil(pertemuanData.length / itemsPerPage);
  const currentData = pertemuanData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white pb-24">
      <div className="px-4 py-6 space-y-6">
        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-5 py-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
              <p className="text-white/70 text-xs mb-1">{kode}</p>
              <h3 className="font-bold text-white text-sm">{mataKuliah}</h3>
            </div>
          </div>
          
          <div className="p-5">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 text-[#5b468a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Nama Mahasiswa</p>
                  <p className="font-semibold text-gray-900 text-sm">CARLOS IMMANUEL TAMPUBOLON</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-[#5b468a] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">NPM</p>
                  <p className="font-semibold text-gray-900 text-sm">222310064</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pertemuan Cards */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#5b468a]" />
              Detail Pertemuan
            </h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {pertemuanData.length} Pertemuan
            </span>
          </div>

          <div className="space-y-3">
            {currentData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#5b468a]/90 to-[#4a3771]/90 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-lg px-3 py-2">
                        <p className="text-white font-bold text-lg leading-none">{item.pertemuan}</p>
                        <p className="text-white/70 text-[9px] mt-0.5">Pertemuan</p>
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{item.hari}</p>
                        <p className="text-white/80 text-xs">{item.tanggal}</p>
                      </div>
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span className="font-bold text-xs">{item.status}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Jadwal & Ruangan */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <p className="text-[10px] text-blue-600 font-semibold">Waktu</p>
                      </div>
                      <p className="text-xs font-bold text-gray-900">{item.jam}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-600" />
                        <p className="text-[10px] text-purple-600 font-semibold">Ruangan</p>
                      </div>
                      <p className="text-xs font-bold text-gray-900">Ruang {item.ruangan}</p>
                    </div>
                  </div>

                  {/* Materi */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 border border-orange-200">
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-[10px] text-orange-600 font-semibold mb-1">Materi Perkuliahan</p>
                        <p className="text-sm font-bold text-gray-900 leading-tight">{item.materi}</p>
                      </div>
                    </div>
                  </div>

                  {/* Dosen */}
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-[10px] text-gray-500 mb-1">Dosen Pengampu</p>
                    <p className="text-xs font-semibold text-gray-900">{item.dosen}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white shadow-md active:scale-95'
                }`}
              >
                Previous
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white shadow-md active:scale-95'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}