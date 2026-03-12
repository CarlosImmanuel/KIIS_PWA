import wisudaImage from '../../assets/Images/alur_pengajuan_wisuda.png';

interface BerandaWisudaViewProps {
  onBack?: () => void;
  onMenuToggle?: () => void;
}

export function BerandaWisudaView({ onBack: _onBack, onMenuToggle: _onMenuToggle }: BerandaWisudaViewProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Main Content - Max width container for desktop */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-5 space-y-4 md:space-y-6">

        {/* Flowchart Image (Optional - if you want to keep the original image) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="w-full overflow-hidden rounded-lg">
            <img 
              src={wisudaImage} 
              alt="Alur Sistem Wisuda" 
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
}