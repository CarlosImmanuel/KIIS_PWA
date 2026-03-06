import { ChevronDown, FileText, AlertCircle, User } from 'lucide-react';
import { useState } from 'react';

interface JadwalUjianMahasiswaViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
  onKuesionerClick: (mataKuliah: any) => void;
}

interface JadwalUjianItem {
  tanggal: string;
  shift: string;
  ruangan: string;
  kodeMataKuliah: string;
  namaMataKuliah: string;
  kelas: string;
  statusKuesioner: string;
}

export function JadwalUjianMahasiswaView({ onKuesionerClick }: JadwalUjianMahasiswaViewProps) {
  const [tahunAjaran, setTahunAjaran] = useState('');
  const [semester, setSemester] = useState('');
  const [jenisUjian, setJenisUjian] = useState('');
  const [showTahunDropdown, setShowTahunDropdown] = useState(false);
  const [showSemesterDropdown, setShowSemesterDropdown] = useState(false);
  const [showJenisDropdown, setShowJenisDropdown] = useState(false);

  const jadwalUjianData: JadwalUjianItem[] = [
    {
      tanggal: '05 Nov 2025',
      shift: '16:00:00 - 17:30:00',
      ruangan: '409',
      kodeMataKuliah: 'TIFAAF2',
      namaMataKuliah: 'MACHINE LEARNING',
      kelas: 'TI-22-9A',
      statusKuesioner: 'Belum Diisi'
    },
    {
      tanggal: '06 Nov 2025',
      shift: '16:00:00 - 17:30:00',
      ruangan: '410',
      kodeMataKuliah: 'TINAJB3',
      namaMataKuliah: 'PENDIDIKAN KARAKTER',
      kelas: 'TI-22-9A',
      statusKuesioner: 'Belum Diisi'
    },
    {
      tanggal: '10 Nov 2025',
      shift: '16:00:00 - 17:30:00',
      ruangan: '803',
      kodeMataKuliah: 'TFAAD3',
      namaMataKuliah: 'ROBOTIKA',
      kelas: 'TI-22-9A',
      statusKuesioner: 'Belum Diisi'
    },
    {
      tanggal: '13 Nov 2025',
      shift: '13:30:00 - 15:00:00',
      ruangan: '804',
      kodeMataKuliah: 'TIFA3M3',
      namaMataKuliah: 'PENGOLAHAN CITRA',
      kelas: 'TI-22-9A',
      statusKuesioner: 'Belum Diisi'
    },
    {
      tanggal: '14 Nov 2025',
      shift: '16:00:00 - 17:30:00',
      ruangan: '412',
      kodeMataKuliah: 'TFAAH3',
      namaMataKuliah: 'SEMINAR',
      kelas: 'TI-22-9A',
      statusKuesioner: 'Belum Diisi'
    },
    {
      tanggal: '15 Nov 2025',
      shift: '13:30:00 - 15:00:00',
      ruangan: '215',
      kodeMataKuliah: 'TIFA3M0',
      namaMataKuliah: 'LAB. PENGOLAHAN CITRA',
      kelas: 'TI-22-9A',
      statusKuesioner: 'Belum Diisi'
    }
  ];

  const tahunOptions = ['(2526) 2025/2026', '(2425) 2024/2025', '(2324) 2023/2024'];
  const semesterOptions = ['GANJIL', 'GENAP'];
  const jenisUjianOptions = ['UTS', 'UAS'];

  const showTable = tahunAjaran && semester && jenisUjian;

  return (
    <>
    <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-2">
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
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-4 space-y-4">
        {/* Filters */}
        <div className="grid grid-cols-2 gap-3">
          {/* Tahun Ajaran Dropdown */}
          <div className="relative">
            <label className="text-xs font-semibold text-gray-600 mb-2 block">Tahun Ajaran</label>
            <button
              onClick={() => {
                setShowTahunDropdown(!showTahunDropdown);
                setShowSemesterDropdown(false);
                setShowJenisDropdown(false);
              }}
              className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-700 hover:border-[#5b468a] transition-all flex items-center justify-between shadow-sm"
            >
              <span className="truncate text-xs">{tahunAjaran || 'Pilih Tahun'}</span>
              <ChevronDown className={`w-4 h-4 text-[#5b468a] transition-transform ${showTahunDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showTahunDropdown && (
              <div className="absolute z-10 w-full mt-2 bg-white border-2 border-[#5b468a] rounded-xl shadow-xl overflow-hidden">
                {tahunOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setTahunAjaran(option);
                      setShowTahunDropdown(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-xs hover:bg-[#5b468a]/10 transition-colors ${
                      tahunAjaran === option ? 'bg-[#5b468a]/20 font-semibold text-[#5b468a]' : 'text-gray-700'
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
                setShowJenisDropdown(false);
              }}
              className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-700 hover:border-[#5b468a] transition-all flex items-center justify-between shadow-sm"
            >
              <span className="text-xs">{semester || 'Pilih Semester'}</span>
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

        {/* Jenis Ujian Dropdown - Full Width */}
        <div className="relative">
          <label className="text-xs font-semibold text-gray-600 mb-2 block">Pilih Jenis Ujian</label>
          <button
            onClick={() => {
              setShowJenisDropdown(!showJenisDropdown);
              setShowTahunDropdown(false);
              setShowSemesterDropdown(false);
            }}
            className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-700 hover:border-[#5b468a] transition-all flex items-center justify-between shadow-sm"
          >
            <span className="text-xs">{jenisUjian || 'Pilih Jenis Ujian'}</span>
            <ChevronDown className={`w-4 h-4 text-[#5b468a] transition-transform ${showJenisDropdown ? 'rotate-180' : ''}`} />
          </button>
          {showJenisDropdown && (
            <div className="absolute z-10 w-full mt-2 bg-white border-2 border-[#5b468a] rounded-xl shadow-xl overflow-hidden">
              {jenisUjianOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setJenisUjian(option);
                    setShowJenisDropdown(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-xs hover:bg-[#5b468a]/10 transition-colors ${
                    jenisUjian === option ? 'bg-[#5b468a]/20 font-semibold text-[#5b468a]' : 'text-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Info Message */}
      {!showTable && (
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-2">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-700">
              Isi kuesioner dan upload pas foto terlebih dahulu sebelum cetak kartu ujian
            </p>
          </div>
        </div>
      )}

      {/* Title Section - Only show when table is visible */}
      {showTable && (
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#5b468a]" />
              Jadwal Ujian Mahasiswa
            </h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {jadwalUjianData.length} ujian
            </span>
          </div>
        </div>
      )}

      {/* Table Section - Only show when all filters are selected */}
      {showTable && (
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pb-6">
          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white">
                  <th className="px-2 py-3 text-left text-[10px] font-semibold">Mata Kuliah</th>
                  <th className="px-2 py-3 text-center text-[10px] font-semibold">Jadwal</th>
                  <th className="px-2 py-3 text-center text-[10px] font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {jadwalUjianData.map((jadwal, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-2 py-3">
                      <div className="flex flex-col gap-1">
                        <span className="inline-block bg-gray-800 text-white text-[9px] px-1.5 py-0.5 rounded font-bold w-fit">
                          {jadwal.kodeMataKuliah}
                        </span>
                        <span className="font-bold text-[11px] text-gray-800 uppercase leading-tight">{jadwal.namaMataKuliah}</span>
                        <span className="text-[9px] text-gray-500">{jadwal.kelas}</span>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <div className="flex flex-col gap-1 items-center">
                        <span className="font-bold text-[10px] text-[#5b468a]">{jadwal.tanggal}</span>
                        <span className="text-[9px] text-gray-600">{jadwal.shift}</span>
                        <span className="inline-block bg-blue-500 text-white text-[9px] px-2 py-0.5 rounded-full font-semibold mt-0.5">
                          R.{jadwal.ruangan}
                        </span>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <button
                        onClick={() => onKuesionerClick(jadwal)}
                        className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white text-[9px] px-2 py-2 rounded-lg font-semibold hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
                      >
                        Isi Kuesioner
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    </>
  );
}