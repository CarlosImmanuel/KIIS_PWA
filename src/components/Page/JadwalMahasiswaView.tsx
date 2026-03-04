import { ChevronDown, User, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface JadwalMahasiswaViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
}

interface JadwalItem {
  hari: string;
  jam: string;
  ruangan: string;
  kodeMataKuliah: string;
  namaMataKuliah: string;
  kelas: string;
  status: string;
}

export function JadwalMahasiswaView({ }: JadwalMahasiswaViewProps) {
  const [tahunAkademik, setTahunAkademik] = useState('(2526) 2025/2026');
  const [semester, setSemester] = useState('GANJIL');
  const [showTahunDropdown, setShowTahunDropdown] = useState(false);
  const [showSemesterDropdown, setShowSemesterDropdown] = useState(false);

  const jadwalData: JadwalItem[] = [
    {
      hari: 'SENIN',
      jam: '10:15:00 - 12:45:00',
      ruangan: '412',
      kodeMataKuliah: 'TINAJB3',
      namaMataKuliah: 'PENDIDIKAN KARAKTER',
      kelas: 'TI-22-9A',
      status: 'TETAP'
    },
    {
      hari: 'SELASA',
      jam: '07:30:00 - 10:00:00',
      ruangan: '412',
      kodeMataKuliah: 'TFAAH3',
      namaMataKuliah: 'SEMINAR',
      kelas: 'TI-22-9A',
      status: 'TETAP'
    },
    {
      hari: 'RABU',
      jam: '13:00:00 - 15:30:00',
      ruangan: '307',
      kodeMataKuliah: 'TFAAD3',
      namaMataKuliah: 'ROBOTIKA',
      kelas: 'TI-22-9A',
      status: 'TETAP'
    },
    {
      hari: 'RABU',
      jam: '15:45:00 - 18:30:00',
      ruangan: '215',
      kodeMataKuliah: 'TIFA3M0',
      namaMataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-9A / TI-22-9A2',
      status: 'TETAP'
    },
    {
      hari: 'KAMIS',
      jam: '13:00:00 - 15:30:00',
      ruangan: '420',
      kodeMataKuliah: 'TIFA4F3',
      namaMataKuliah: 'MACHINE LEARNING',
      kelas: 'TI-22-9A',
      status: 'TETAP'
    },
    {
      hari: 'KAMIS',
      jam: '15:45:00 - 18:30:00',
      ruangan: '302',
      kodeMataKuliah: 'TIFA3M3',
      namaMataKuliah: 'PENGOLAHAN CITRA',
      kelas: 'TI-22-9A',
      status: 'TETAP'
    },
    {
      hari: 'JUMAT',
      jam: '13:30:00 - 15:30:00',
      ruangan: '412',
      kodeMataKuliah: 'TFAAH1',
      namaMataKuliah: 'SEMINAR',
      kelas: 'TI-22-9A',
      status: 'TETAP'
    }
  ];

  const tahunOptions = ['(2526) 2025/2026', '(2425) 2024/2025', '(2324) 2023/2024'];
  const semesterOptions = ['GANJIL', 'GENAP'];

  return (
    <>
      {/* Student Info Card */}
      <div className="px-4 pt-4 pb-2">
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
      </div>
    
      <div className="pb-24">
        {/* Filter Section */}
        <div className="px-4 py-6 space-y-4">
          {/* Filters */}
          <div className="grid grid-cols-2 gap-3">
            {/* Tahun Akademik Dropdown */}
            <div className="relative">
              <label className="text-xs font-semibold text-gray-600 mb-2 block">Tahun Akademik</label>
              <button
                onClick={() => {
                  setShowTahunDropdown(!showTahunDropdown);
                  setShowSemesterDropdown(false);
                }}
                className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-700 hover:border-[#5b468a] transition-all flex items-center justify-between shadow-sm"
              >
                <span className="truncate text-xs">{tahunAkademik}</span>
                <ChevronDown className={`w-4 h-4 text-[#5b468a] transition-transform ${showTahunDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showTahunDropdown && (
                <div className="absolute z-10 w-full mt-2 bg-white border-2 border-[#5b468a] rounded-xl shadow-xl overflow-hidden">
                  {tahunOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setTahunAkademik(option);
                        setShowTahunDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-xs hover:bg-[#5b468a]/10 transition-colors ${
                        tahunAkademik === option ? 'bg-[#5b468a]/20 font-semibold text-[#5b468a]' : 'text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Semester Dropdown */}
            <div className="relative">
              <label className="text-xs font-semibold text-gray-600 mb-2 block">Semester</label>
              <button
                onClick={() => {
                  setShowSemesterDropdown(!showSemesterDropdown);
                  setShowTahunDropdown(false);
                }}
                className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-700 hover:border-[#5b468a] transition-all flex items-center justify-between shadow-sm"
              >
                <span className="text-xs">{semester}</span>
                <ChevronDown className={`w-4 h-4 text-[#5b468a] transition-transform ${showSemesterDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showSemesterDropdown && (
                <div className="absolute z-10 w-full mt-2 bg-white border-2 border-[#5b468a] rounded-xl shadow-xl overflow-hidden">
                  {semesterOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSemester(option);
                        setShowSemesterDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-xs hover:bg-[#5b468a]/10 transition-colors ${
                        semester === option ? 'bg-[#5b468a]/20 font-semibold text-[#5b468a]' : 'text-gray-700'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="px-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#5b468a]" />
              Jadwal Mahasiswa
            </h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {jadwalData.length} jadwal
            </span>
          </div>
        </div>

        {/* Table Section */}
        <div className="px-4 pb-6">
          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white">
                  <th className="px-3 py-3 text-left text-xs font-semibold">No</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold">Hari / Waktu</th>
                  <th className="px-3 py-3 text-left text-xs font-semibold">Mata Kuliah</th>
                  <th className="px-3 py-3 text-center text-xs font-semibold">Ruangan</th>
                </tr>
              </thead>
              <tbody>
                {jadwalData.map((jadwal, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-3 py-4 text-sm text-gray-700 font-medium">{index + 1}</td>
                    <td className="px-3 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-xs text-[#5b468a]">{jadwal.hari}</span>
                        <span className="text-xs text-gray-600">{jadwal.jam}</span>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="inline-block bg-gray-800 text-white text-[10px] px-2 py-0.5 rounded font-bold w-fit">
                          {jadwal.kodeMataKuliah}
                        </span>
                        <span className="font-bold text-xs text-gray-800 uppercase">{jadwal.namaMataKuliah}</span>
                        <span className="text-[10px] text-gray-500">{jadwal.kelas}</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-center">
                      <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {jadwal.ruangan}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}