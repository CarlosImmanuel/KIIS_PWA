import { Save, BookOpen, User, Building, GraduationCap } from 'lucide-react';
import { useState } from 'react';

interface KuesionerViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
  mataKuliah: any;
}

interface KuesionerItem {
  id: number;
  pertanyaan: string;
}

export function KuesionerView({ onBack, mataKuliah }: KuesionerViewProps) {
  const [ratings, setRatings] = useState<{ [key: number]: number | string }>({});

  const kuesionerData: KuesionerItem[] = [
    {
      id: 1,
      pertanyaan: 'Dosen memberikan/dapat diunduh/disediakan perkuliahan secara tertulis (bila tidak tersedia objektif dan paruh lengkap) yang mudah dipahami yang dapat membantu dalam proses pendidikan dan perkuliahan tenaga edisi di SB Kesatuan. Perhatian diberikan terhadap aspek dalam catat tersebut sebagai cara mencegat cara menerima yang (1-5) sebelum sikap'
    },
    {
      id: 2,
      pertanyaan: 'Dosen menyampaikan materi kuliah dan memberikan tambahan dengan jelas'
    },
    {
      id: 3,
      pertanyaan: 'Dosen mampu menunjukkan kualitas batas yang jelas dari sisi pembelajaran dan teknologi pembelajaran secara efektif'
    },
    {
      id: 4,
      pertanyaan: 'Dosen menguasai materi ajar dan mampu menjelaskan kelas berinteraksi dengan bahan-kode nyata'
    },
    {
      id: 5,
      pertanyaan: 'Dosen memberikan contoh-contoh yang relevan dan bermutu dalam bidang-teknologi'
    },
    {
      id: 6,
      pertanyaan: 'Dosen menggunakan teknologi dalam kuliah secara efektif dalam proses pembelajaran'
    },
    {
      id: 7,
      pertanyaan: 'Dosen mampu membuat mahasiswa tertarik untuk ikut dalam pembangunan secara atau terhadap IT'
    },
    {
      id: 8,
      pertanyaan: 'Dosen memiliki standarkan dan mampu mengantar-kan diri dalam berbagai situasi'
    },
    {
      id: 9,
      pertanyaan: 'Dosen berfikir adil dan objektif dalam memberikan nilai mahasiswa'
    },
    {
      id: 10,
      pertanyaan: 'Dosen mampu memberikan dorongan tuntutan sosial efektif dari berbeda-self'
    },
    {
      id: 11,
      pertanyaan: 'Dosen berfikir terhadap kritis, logis, dan mengukur dalam nilai akhir dari mahasiswa'
    },
    {
      id: 12,
      pertanyaan: 'Dosen mengajar hubungan baik dengan perguruan dengan aplikasi dari unit di lingkungan kampus'
    },
    {
      id: 13,
      pertanyaan: 'Karakteristik pembelajaran dapat kepada beragam taktikkan yang beragam dari isi pengajar'
    },
    {
      id: 14,
      pertanyaan: 'Dosen beranda memberikan mahasiswa dan memberikan faktor raperti secara rapor'
    },
    {
      id: 15,
      pertanyaan: 'Dosen menyediakan kesempatan terhadap kapasitas dan pengetahuan dari mahasiswa'
    },
    {
      id: 16,
      pertanyaan: 'Saran dari saya'
    }
  ];

  const handleRatingClick = (questionId: number, rating: number) => {
    setRatings({ ...ratings, [questionId]: rating });
  };

  const handleSubmit = () => {
    // Handle submit logic here
    alert('Kuesioner berhasil disimpan!');
    onBack();
  };

  return (
    <div className="pb-24 bg-gray-50 min-h-screen">
      {/* Mata Kuliah Info Cards */}
      <div className="px-4 pt-4 pb-6 bg-white shadow-sm">
        <div className="space-y-2">
          <div className="bg-gradient-to-r from-[#5b468a]/10 to-blue-50 rounded-xl p-3 border border-[#5b468a]/20">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#5b468a]" />
              <div className="flex-1">
                <label className="text-[10px] font-semibold text-gray-600 block">NAMA RESPONDEN</label>
                <p className="font-bold text-xs text-gray-800">CARLOS IMMANUEL TAMPUBOLON</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-200">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <div className="flex-1">
                <label className="text-[10px] font-semibold text-gray-600 block">NAMA DOSEN</label>
                <p className="font-bold text-xs text-gray-800">{mataKuliah?.namaDosen || 'Nama Dosen'}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-green-50 rounded-xl p-3 border border-green-200">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-green-600" />
                <div className="flex-1">
                  <label className="text-[10px] font-semibold text-gray-600 block">KODE</label>
                  <p className="font-bold text-xs text-gray-800">{mataKuliah?.kodeMataKuliah || 'TI-22-9A'}</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-3 border border-orange-200">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-orange-600" />
                <div className="flex-1">
                  <label className="text-[10px] font-semibold text-gray-600 block">KELAS</label>
                  <p className="font-bold text-xs text-gray-800">{mataKuliah?.kelas || 'TI-22-9A'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 rounded-xl p-3 border border-pink-200">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-pink-600" />
              <div className="flex-1">
                <label className="text-[10px] font-semibold text-gray-600 block">MATA KULIAH</label>
                <p className="font-bold text-xs text-gray-800">{mataKuliah?.namaMataKuliah || 'LAB. PENGOLAHAN CITRA'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kuesioner Questions */}
      <div className="px-4 pt-4 pb-6 space-y-4">
        {kuesionerData.map((item, index) => (
          <div 
            key={item.id}
            className={`bg-white rounded-xl shadow-sm border border-gray-200 p-4 ${
              index % 2 === 0 ? '' : 'bg-gray-50/50'
            }`}
          >
            {/* Question Number and Text */}
            <div className="mb-4">
              <div className="flex items-start gap-3 mb-2">
                <span className="bg-[#5b468a] text-white text-xs font-bold px-3 py-1 rounded-lg flex-shrink-0">
                  {item.id}
                </span>
                <p className="text-xs text-gray-700 leading-relaxed flex-1">
                  {item.pertanyaan}
                </p>
              </div>
            </div>

            {/* Rating Buttons or Text Input for Saran */}
            {item.id === 16 ? (
              <div className="border-t border-gray-200 pt-4">
                <label className="text-xs font-semibold text-gray-600 block mb-3">Masukkan Saran:</label>
                <textarea
                  placeholder="Tuliskan saran Anda di sini..."
                  className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-sm focus:border-[#5b468a] focus:outline-none resize-none"
                  rows={4}
                  value={ratings[item.id] || ''}
                  onChange={(e) => setRatings({ ...ratings, [item.id]: e.target.value as any })}
                />
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-4">
                <label className="text-xs font-semibold text-gray-600 block mb-3">Pilih Jawaban:</label>
                <div className="flex items-center justify-between gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleRatingClick(item.id, rating)}
                      className={`flex-1 h-12 rounded-xl border-2 transition-all font-bold text-sm ${
                        ratings[item.id] === rating
                          ? 'bg-[#5b468a] border-[#5b468a] text-white shadow-lg scale-105'
                          : 'border-gray-300 text-gray-600 hover:border-[#5b468a] hover:bg-[#5b468a]/10'
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            SIMPAN KUESIONER
          </button>
        </div>
      </div>
    </div>
  );
}