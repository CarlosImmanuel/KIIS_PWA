import { Calendar, User, GraduationCap, Clock, CheckCircle2, Info } from 'lucide-react';
import berandaImage from '../../assets/Images/alur-regist.jpg';

interface BerandaRegistrasiViewProps {
  onBack?: () => void;
  onMenuToggle?: () => void;
}

export function BerandaRegistrasiView({ onBack: _onBack, onMenuToggle: _onMenuToggle }: BerandaRegistrasiViewProps) {
  const studentInfo = {
    semester: 'SEMESTER GENAP 2025/2026',
    nama: 'CARLOS IMMANUEL TAMPUBOLON',
    npm: '222310064',
    dosenWali: 'Isnan Mulia S.Komp., M.Kom.',
    jadwalRegistrasi: '10-02-2026 s/d 28-02-2026'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Main Content - Max width container for desktop */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-5 space-y-4 md:space-y-6">
        
        {/* Info Alert - Important Notice */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-red-500 text-white rounded-full p-2 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-red-900 mb-1">PENTING!</p>
              <p className="text-xs text-red-800 leading-relaxed">
                Bacalah semua instruksi dengan teliti pada saat melakukan registrasi. Registrasi selesai jika telah di ACC dan cetak KSM online.
              </p>
            </div>
          </div>
        </div>

        {/* Semester Info Card */}
        <div className="bg-gradient-to-br from-[#5b468a] via-[#6b5698] to-[#4a3771] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6" />
              <h3 className="text-lg font-bold">{studentInfo.semester}</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white/80 text-xs mb-1">Mahasiswa</p>
                    <p className="font-bold text-sm break-words">{studentInfo.nama} - {studentInfo.npm}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white/80 text-xs mb-1">Dosen Wali</p>
                    <p className="font-bold text-sm break-words">{studentInfo.dosenWali}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white/80 text-xs mb-1">Jadwal Registrasi</p>
                    <p className="font-bold text-sm">{studentInfo.jadwalRegistrasi}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Helpdesk Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full p-2 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-blue-900 mb-1">Informasi Lebih Lanjut</p>
              <p className="text-xs text-blue-800 leading-relaxed">
                Silahkan ajukan pertanyaan dan dapatkan informasi terbaru mengenai Registrasi melalui link berikut:{' '}
                <a href="https://helpdeskiis.info" className="font-bold underline hover:text-blue-600">
                  helpdeskiis.info
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Alur Sistem Registrasi */}
        <div>
          <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-[#5b468a]" />
            Alur Sistem Registrasi
          </h3>
        </div>

        {/* Flowchart Image (Optional - if you want to keep the original image) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="w-full overflow-hidden rounded-lg">
            <img 
              src={berandaImage} 
              alt="Alur Sistem Registrasi" 
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
}