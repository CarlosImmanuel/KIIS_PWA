import { FileText, Calendar, CreditCard, CheckCircle, Eye, ChevronRight } from 'lucide-react';

interface TagihanRegistrasiViewProps {
  onDetailClick: (tagihan: any) => void;
}

export function TagihanRegistrasiView({ onDetailClick }: TagihanRegistrasiViewProps) {
  const tagihanList = [
    {
      id: 1,
      tahunAkademik: '2025/2026',
      semester: 'GANJIL',
      tagihan: 6110000,
      totalTerbayar: 6110000,
      virtualAccount: '9882208122231064',
      vaExpired: '2026-03-26 08:52:54',
      status: 'LUNAS'
    },
    {
      id: 2,
      tahunAkademik: '2024/2025',
      semester: 'GENAP',
      tagihan: 6110000,
      totalTerbayar: 6110000,
      virtualAccount: '9882208122231064',
      vaExpired: '2025-07-11 11:50:19',
      status: 'LUNAS'
    },
    {
      id: 3,
      tahunAkademik: '2022/2023',
      semester: 'GANJIL',
      tagihan: 14700000,
      totalTerbayar: 14700000,
      virtualAccount: '9882022141',
      vaExpired: '',
      status: 'LUNAS'
    },
    {
      id: 4,
      tahunAkademik: '2022/2023',
      semester: 'GENAP',
      tagihan: 6110000,
      totalTerbayar: 6110000,
      virtualAccount: '9882208122231064',
      vaExpired: '',
      status: 'LUNAS'
    },
    {
      id: 5,
      tahunAkademik: '2023/2024',
      semester: 'GANJIL',
      tagihan: 6110000,
      totalTerbayar: 6110000,
      virtualAccount: '9882208122231064',
      vaExpired: '',
      status: 'LUNAS'
    },
    {
      id: 6,
      tahunAkademik: '2024/2025',
      semester: 'GANJIL',
      tagihan: 6110000,
      totalTerbayar: 6110000,
      virtualAccount: '9882208122231064',
      vaExpired: '2025-01-26 09:46:02',
      status: 'LUNAS'
    },
    {
      id: 7,
      tahunAkademik: '2023/2024',
      semester: 'GENAP',
      tagihan: 6110000,
      totalTerbayar: 6110000,
      virtualAccount: '9882208122231064',
      vaExpired: '2024-08-31 23:59:59',
      status: 'LUNAS'
    }
  ];

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 space-y-4">
        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg text-white">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1">Pembayaran Semester</h3>
              <p className="text-xs text-white/90 leading-relaxed">
                Berikut adalah riwayat pembayaran registrasi semester Anda. Klik "Detail" untuk melihat informasi lengkap.
              </p>
            </div>
          </div>
        </div>

        {/* Tagihan List */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-2">
            <div className="w-1 h-5 bg-[#5b468a] rounded-full"></div>
            <h2 className="font-bold text-gray-800 text-sm">Riwayat Pembayaran</h2>
          </div>

          {tagihanList.map((tagihan) => (
            <div 
              key={tagihan.id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Header Card */}
              <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white" />
                    <div>
                      <p className="text-white font-bold text-sm">
                        {tagihan.tahunAkademik} - {tagihan.semester}
                      </p>
                      <p className="text-white/80 text-xs">Pembayaran Semester</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-500 px-3 py-1 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span className="text-xs font-bold text-white">{tagihan.status}</span>
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="p-4 space-y-3">
                {/* Tagihan Info */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold mb-1">Tagihan</p>
                    <p className="text-sm font-bold text-blue-900">{formatRupiah(tagihan.tagihan)}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                    <p className="text-xs text-green-600 font-semibold mb-1">Terbayar</p>
                    <p className="text-sm font-bold text-green-900">{formatRupiah(tagihan.totalTerbayar)}</p>
                  </div>
                </div>

                {/* Virtual Account */}
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs text-gray-600 font-semibold">Virtual Account</p>
                    <CreditCard className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm font-mono font-bold text-gray-900">{tagihan.virtualAccount}</p>
                  {tagihan.vaExpired && (
                    <p className="text-xs text-gray-500 mt-1">
                      Expired: {new Date(tagihan.vaExpired).toLocaleString('id-ID', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  )}
                </div>

                {/* Detail Button */}
                <button
                  onClick={() => onDetailClick(tagihan)}
                  className="w-full bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Lihat Detail</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
          <p className="text-xs text-yellow-800 leading-relaxed">
            <span className="font-bold">Catatan:</span> Semua pembayaran menggunakan Virtual Account BNI. Pastikan melakukan pembayaran sebelum tanggal expired untuk menghindari kendala registrasi.
          </p>
        </div>
      </div>
    </div>
  );
}
