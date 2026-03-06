import { User, GraduationCap, BookOpen, CheckCircle, XCircle, Clock} from 'lucide-react';

interface StatusRegistrasiViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
}

export function StatusRegistrasiView({ }: StatusRegistrasiViewProps) {
  const statusProses = [
    { no: 1, proses: 'PROSES PENGAMBILAN MATAKULIAH', implementasi: 'BELUM', status: 'pending' },
    { no: 2, proses: 'PROSES ACC', implementasi: 'BELUM', status: 'pending' },
    { no: 3, proses: 'PROSES PENCETAKAN KSM', implementasi: 'BELUM', status: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 space-y-4">
        {/* Title Card */}
        <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] rounded-2xl p-4 shadow-lg">
          <h2 className="text-center font-bold text-sm text-white leading-relaxed">
            STATUS REGISTRASI<br/>SEMESTER GANJIL 2025/2026
          </h2>
        </div>

        {/* Student Info Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <User className="w-4 h-4 text-[#5b468a]" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Mahasiswa</p>
                <p className="text-xs font-bold text-gray-800">Carlos Immanuel Tampubolon</p>
                <p className="text-[10px] text-gray-600">222310064</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <GraduationCap className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Kelas</p>
                <p className="text-xs font-bold text-gray-800">TI-22-PA</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <BookOpen className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Dosen Wali</p>
                <p className="text-xs font-bold text-gray-800">Isman Mulia S.Komp., M.Kom.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Pembayaran */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white/90 mb-1">Status Pembayaran</p>
              <p className="text-lg font-bold text-white">LUNAS</p>
            </div>
            <div className="p-3 bg-white/20 rounded-full">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Status Registrasi Normal */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-6 bg-[#5b468a] rounded-full"></div>
            <h3 className="font-bold text-sm text-gray-800">Status Registrasi Normal</h3>
          </div>

          <div className="space-y-2">
            {statusProses.map((item) => (
              <div 
                key={item.no}
                className="bg-gray-50 rounded-xl p-3 border border-gray-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-6 h-6 rounded-full bg-[#5b468a] text-white flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">{item.no}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-800 leading-relaxed">
                        {item.proses}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                      {item.implementasi}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Perubahan Rencana Studi */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
            <h3 className="font-bold text-sm text-gray-800">Status Perubahan Rencana Studi</h3>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 bg-blue-100 rounded-full">
                <XCircle className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs font-bold text-blue-800">
                TIDAK ADA PERUBAHAN RENCANA STUDI
              </p>
            </div>
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
          <p className="text-xs text-yellow-800 leading-relaxed">
            <span className="font-bold">Catatan:</span> Status registrasi akan terupdate otomatis setelah Anda melakukan proses registrasi mata kuliah dan mendapat persetujuan dari dosen wali.
          </p>
        </div>
      </div>
    </div>
  );
}
