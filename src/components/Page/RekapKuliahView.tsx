import { User, BookOpen, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { RekapKuliahTable } from './RekapKuliahTable';

interface RekapKuliahViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
  onDetailClick?: (kode: string, mataKuliah: string) => void;
}

interface RekapData {
  kode: string;
  mataKuliah: string;
  sks: number;
  kelas: string;
  dosen: string;
  hari: string;
  jam: string;
  ruangan: string;
  kuliah: number;
  hadir: number;
  ijin: number;
  sakit: number;
  alpha: number;
  dispen: number;
  ganti: number;
  persentase: string;
}

export function RekapKuliahView({ onDetailClick }: RekapKuliahViewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  
  const rekapData: RekapData[] = [
    {
      kode: 'LAB_PENGANTAR_TEKNILOGI_INFORMASI',
      mataKuliah: 'LAB. PENGANTAR TEKNILOGI INFORMASI',
      sks: 0,
      kelas: 'TI-22-PA',
      dosen: 'Raden Rayyan Pratama Rakhmadie, S.Kom., MTCNA',
      hari: 'RABU',
      jam: '15:45:00',
      ruangan: '215',
      kuliah: 14,
      hadir: 14,
      ijin: 0,
      sakit: 0,
      alpha: 0,
      dispen: 0,
      ganti: 0,
      persentase: '100 %'
    },
    {
      kode: 'TIfA3M3',
      mataKuliah: 'PENGOLAHAN CITRA',
      sks: 3,
      kelas: 'TI-22-PA',
      dosen: 'Septian Cahyadi, S.Kom., M.Kom.',
      hari: 'KAMIS',
      jam: '15:45:00',
      ruangan: '302',
      kuliah: 14,
      hadir: 14,
      ijin: 0,
      sakit: 0,
      alpha: 0,
      dispen: 0,
      ganti: 0,
      persentase: '100 %'
    },
    {
      kode: 'TIfA4I3',
      mataKuliah: 'ROBOTIKA',
      sks: 3,
      kelas: 'TI-22-PA',
      dosen: 'Hartanto Satyo Nugraha',
      hari: 'RABU',
      jam: '13:00:00',
      ruangan: '304',
      kuliah: 14,
      hadir: 14,
      ijin: 0,
      sakit: 0,
      alpha: 0,
      dispen: 0,
      ganti: 0,
      persentase: '100 %'
    },
    {
      kode: 'TIfA4K3',
      mataKuliah: 'MACHINE LEARNING',
      sks: 3,
      kelas: 'TI-22-PA',
      dosen: 'Irsan Mulia, S.Komp., M.Kom.',
      hari: 'KAMIS',
      jam: '13:00:00',
      ruangan: '1',
      kuliah: 14,
      hadir: 14,
      ijin: 0,
      sakit: 0,
      alpha: 0,
      dispen: 0,
      ganti: 0,
      persentase: '100 %'
    },
    {
      kode: 'TIfA4S3',
      mataKuliah: 'SEMINAR',
      sks: 3,
      kelas: 'TI-22-PA',
      dosen: 'Team Dosen',
      hari: 'JUMAT',
      jam: '13:30:00',
      ruangan: '',
      kuliah: 0,
      hadir: 0,
      ijin: 0,
      sakit: 0,
      alpha: 0,
      dispen: 0,
      ganti: 0,
      persentase: '0 %'
    },
    {
      kode: 'TINA3B3',
      mataKuliah: 'PENDIDIKAN KARAKTER',
      sks: 3,
      kelas: 'TI-22-PA',
      dosen: 'Idah Fitriyah, S.E., M.M.',
      hari: 'SENIN',
      jam: '10:15:00',
      ruangan: '412',
      kuliah: 14,
      hadir: 13,
      ijin: 0,
      sakit: 1,
      alpha: 0,
      dispen: 0,
      ganti: 0,
      persentase: '96 %'
    }
  ];

  const getPercentageColor = (percentage: string) => {
    const value = parseInt(percentage);
    if (value >= 90) return 'text-green-600 bg-green-50 border-green-200';
    if (value >= 75) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (value >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const totalHadir = rekapData.reduce((sum, item) => sum + item.hadir, 0);
  const totalKuliah = rekapData.reduce((sum, item) => sum + item.kuliah, 0);
  const totalAlpha = rekapData.reduce((sum, item) => sum + item.alpha, 0);
  const totalIjin = rekapData.reduce((sum, item) => sum + item.ijin, 0);
  const totalSakit = rekapData.reduce((sum, item) => sum + item.sakit, 0);
  const averagePersentase = totalKuliah > 0 ? ((totalHadir / totalKuliah) * 100).toFixed(0) : '0';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white pb-24">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-6 space-y-6">
        {/* Student Info Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-5">
          <div className="flex items-start gap-3">
            <div className="bg-gradient-to-br from-[#5b468a] to-[#4a3771] p-3 rounded-xl">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-sm mb-1">CARLOS IMMANUEL TAMPUBOLON</h3>
              <p className="text-gray-600 text-xs">NPM: 222310064</p>
            </div>
          </div>
        </div>

        {/* Mata Kuliah Table */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#5b468a]" />
              Detail Mata Kuliah
            </h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, rekapData.length)} of {rekapData.length}
            </span>
          </div>
          
          <RekapKuliahTable 
            data={rekapData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onDetailClick={onDetailClick}
          />

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
              Previous
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white font-bold shadow-md">
                {currentPage}
              </button>
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(Math.ceil(rekapData.length / itemsPerPage), prev + 1))}
              disabled={currentPage >= Math.ceil(rekapData.length / itemsPerPage)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 ${
                currentPage >= Math.ceil(rekapData.length / itemsPerPage)
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white hover:shadow-lg'
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}