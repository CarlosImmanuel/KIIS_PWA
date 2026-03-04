interface RekapKuliahTableProps {
  data: {
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
  }[];
  currentPage: number;
  itemsPerPage: number;
  onDetailClick?: (kode: string, mataKuliah: string) => void;
}

export function RekapKuliahTable({ data, currentPage, itemsPerPage, onDetailClick }: RekapKuliahTableProps) {
  const getPercentageColor = (percentage: string) => {
    const value = parseInt(percentage);
    if (value >= 90) return 'bg-gradient-to-br from-green-500 to-green-600 text-white';
    if (value >= 75) return 'bg-gradient-to-br from-blue-400 to-blue-500 text-white';
    if (value >= 60) return 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-white';
    return 'bg-gradient-to-br from-red-400 to-red-500 text-white';
  };

  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div 
          key={index} 
          onClick={() => onDetailClick?.(item.kode, item.mataKuliah)}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all active:scale-98 cursor-pointer hover:shadow-md"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-4 py-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-white/20 text-white px-2 py-0.5 rounded text-[9px] font-bold">
                    #{(currentPage - 1) * itemsPerPage + index + 1}
                  </span>
                  <span className="bg-white/20 text-white px-2 py-0.5 rounded text-[9px] font-bold">
                    {item.kode}
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm leading-tight">{item.mataKuliah}</h4>
              </div>
              <div className={`px-3 py-1.5 rounded-full shadow-sm ${getPercentageColor(item.persentase)}`}>
                <span className="font-bold text-xs">{item.persentase}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Info Dasar */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-gray-500 mb-0.5">Dosen</p>
                <p className="font-semibold text-gray-900">{item.dosen}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-0.5">SKS</p>
                <p className="font-semibold text-gray-900">{item.sks} SKS</p>
              </div>
            </div>

            {/* Jadwal */}
            <div className="bg-gray-50 rounded-lg p-3 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-gray-700">{item.hari}</span>
                  <span className="text-gray-500 mx-1">•</span>
                  <span className="text-gray-600">{item.jam}</span>
                </div>
                {item.ruangan && (
                  <span className="bg-white px-2 py-1 rounded-md font-semibold text-gray-700">
                    Ruang {item.ruangan}
                  </span>
                )}
              </div>
            </div>

            {/* Statistik Presensi */}
            <div className="grid grid-cols-5 gap-2 pt-2">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">{item.kuliah}</p>
                <p className="text-[10px] text-gray-500">Kuliah</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-green-600">{item.hadir}</p>
                <p className="text-[10px] text-gray-500">Hadir</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-red-600">{item.alpha}</p>
                <p className="text-[10px] text-gray-500">Alpha</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-blue-600">{item.ijin}</p>
                <p className="text-[10px] text-gray-500">Ijin</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-yellow-600">{item.sakit}</p>
                <p className="text-[10px] text-gray-500">Sakit</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}