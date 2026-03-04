import { Camera, User, MapPin, Briefcase, Save, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface EditProfileViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
}

export function EditProfileView({ }: EditProfileViewProps) {
  const [formData, setFormData] = useState({
    // Info Mahasiswa (Read-only)
    nama: 'CARLOS IMMANUEL TAMPUBOLON',
    npm: '222310064',
    angkatan: '2022/2023',
    status: 'STUDENT',
    fakultas: 'Fakultas Informatika dan Pertanian',
    programStudi: 'Teknologi Informasi',
    kelas: 'TI 2-5 PA',
    
    // Biodata
    namaMahasiswa: 'CARLOS IMMANUEL TAMPUBOLON',
    tempatLahir: 'KOTA TANGERANG',
    tanggalLahir: '2004-05-12',
    jenisKelamin: 'PRIA',
    agama: 'Kristen Protestan',
    nik: '3601121205040001',
    nisn: '',
    namaIbu: '',
    namaAyah: '',
    
    // Alamat & Kontak
    alamatAsal: 'BUKIT PANORAMA, PAKUNCEN HIJAU, SADIA PARK NO A5',
    alamatDomisili: '',
    telpSeluler: '',
    telpRumah: '',
    emailUtama: '',
    emailLainnya: '',
    
    // Pekerjaan
    tempatKerja: '',
    jabatan: '',
    alamatKerja: '',
    kodePos: '',
    noTelp: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Logic untuk save profile
    alert('Profil berhasil disimpan!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white pb-24">
      <div className="px-4 py-5 space-y-5">
        {/* Photo Profile Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#5b468a] to-[#4a3771] rounded-full flex items-center justify-center shadow-lg">
                <User className="w-12 h-12 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-bold text-gray-800 mt-3 text-center">{formData.nama}</h3>
            <p className="text-sm text-gray-500">NPM: {formData.npm}</p>
          </div>
        </div>

        {/* Info Mahasiswa Section (Read-only) */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#5b468a] rounded-full"></div>
            <h2 className="font-bold text-gray-800">Informasi Mahasiswa</h2>
          </div>
          
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">NPM</label>
                <div className="bg-gray-50 px-3 py-2.5 rounded-lg text-sm text-gray-700 border border-gray-200">
                  {formData.npm}
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Angkatan</label>
                <div className="bg-gray-50 px-3 py-2.5 rounded-lg text-sm text-gray-700 border border-gray-200">
                  {formData.angkatan}
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Status</label>
              <div className="bg-gray-50 px-3 py-2.5 rounded-lg text-sm text-gray-700 border border-gray-200">
                {formData.status}
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Fakultas</label>
              <div className="bg-gray-50 px-3 py-2.5 rounded-lg text-sm text-gray-700 border border-gray-200">
                {formData.fakultas}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Program Studi</label>
                <div className="bg-gray-50 px-3 py-2.5 rounded-lg text-sm text-gray-700 border border-gray-200">
                  {formData.programStudi}
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Kelas</label>
                <div className="bg-gray-50 px-3 py-2.5 rounded-lg text-sm text-gray-700 border border-gray-200">
                  {formData.kelas}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biodata Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#5b468a] rounded-full"></div>
            <h2 className="font-bold text-gray-800">Biodata</h2>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Nama Mahasiswa</label>
              <input
                type="text"
                value={formData.namaMahasiswa}
                onChange={(e) => handleInputChange('namaMahasiswa', e.target.value)}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Tempat Lahir</label>
                <input
                  type="text"
                  value={formData.tempatLahir}
                  onChange={(e) => handleInputChange('tempatLahir', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Tanggal Lahir</label>
                <input
                  type="date"
                  value={formData.tanggalLahir}
                  onChange={(e) => handleInputChange('tanggalLahir', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Jenis Kelamin</label>
                <div className="relative">
                  <select
                    value={formData.jenisKelamin}
                    onChange={(e) => handleInputChange('jenisKelamin', e.target.value)}
                    className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition appearance-none pr-8"
                  >
                    <option value="PRIA">PRIA</option>
                    <option value="WANITA">WANITA</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Agama</label>
                <div className="relative">
                  <select
                    value={formData.agama}
                    onChange={(e) => handleInputChange('agama', e.target.value)}
                    className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition appearance-none pr-8"
                  >
                    <option value="Islam">Islam</option>
                    <option value="Kristen Protestan">Kristen Protestan</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha">Buddha</option>
                    <option value="Konghucu">Konghucu</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">NIK</label>
              <input
                type="text"
                value={formData.nik}
                onChange={(e) => handleInputChange('nik', e.target.value)}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                placeholder="Masukkan NIK"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">NISN <span className="text-gray-400">(Opsional)</span></label>
              <input
                type="text"
                value={formData.nisn}
                onChange={(e) => handleInputChange('nisn', e.target.value)}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                placeholder="Masukkan NISN"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Nama Ibu</label>
                <input
                  type="text"
                  value={formData.namaIbu}
                  onChange={(e) => handleInputChange('namaIbu', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                  placeholder="Masukkan nama ibu"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Nama Ayah</label>
                <input
                  type="text"
                  value={formData.namaAyah}
                  onChange={(e) => handleInputChange('namaAyah', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                  placeholder="Masukkan nama ayah"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alamat & Kontak Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#5b468a] rounded-full"></div>
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Alamat & Kontak
            </h2>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Alamat Asal</label>
              <textarea
                value={formData.alamatAsal}
                onChange={(e) => handleInputChange('alamatAsal', e.target.value)}
                rows={3}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition resize-none"
                placeholder="Masukkan alamat asal"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Alamat Domisili</label>
              <textarea
                value={formData.alamatDomisili}
                onChange={(e) => handleInputChange('alamatDomisili', e.target.value)}
                rows={3}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition resize-none"
                placeholder="Masukkan alamat domisili"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Telp. Seluler</label>
                <input
                  type="tel"
                  value={formData.telpSeluler}
                  onChange={(e) => handleInputChange('telpSeluler', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                  placeholder="08xx-xxxx-xxxx"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Telp. Rumah</label>
                <input
                  type="tel"
                  value={formData.telpRumah}
                  onChange={(e) => handleInputChange('telpRumah', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                  placeholder="021-xxxx-xxxx"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Email Utama</label>
              <input
                type="email"
                value={formData.emailUtama}
                onChange={(e) => handleInputChange('emailUtama', e.target.value)}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Email Lainnya <span className="text-gray-400">(Opsional)</span></label>
              <input
                type="email"
                value={formData.emailLainnya}
                onChange={(e) => handleInputChange('emailLainnya', e.target.value)}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                placeholder="email@example.com"
              />
            </div>
          </div>
        </div>

        {/* Pekerjaan Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#5b468a] rounded-full"></div>
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Pekerjaan <span className="text-xs text-gray-400 font-normal">(Opsional)</span>
            </h2>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Tempat Kerja</label>
                <input
                  type="text"
                  value={formData.tempatKerja}
                  onChange={(e) => handleInputChange('tempatKerja', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                  placeholder="Nama perusahaan"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Jabatan</label>
                <input
                  type="text"
                  value={formData.jabatan}
                  onChange={(e) => handleInputChange('jabatan', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                  placeholder="Posisi jabatan"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Alamat Kantor</label>
              <textarea
                value={formData.alamatKerja}
                onChange={(e) => handleInputChange('alamatKerja', e.target.value)}
                rows={3}
                className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition resize-none"
                placeholder="Alamat tempat kerja"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Kode Pos</label>
                <input
                  type="text"
                  value={formData.kodePos}
                  onChange={(e) => handleInputChange('kodePos', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                  placeholder="12345"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">No. Telp</label>
                <input
                  type="tel"
                  value={formData.noTelp}
                  onChange={(e) => handleInputChange('noTelp', e.target.value)}
                  className="w-full bg-white px-3 py-2.5 rounded-lg text-sm border border-gray-300 focus:border-[#5b468a] focus:ring-2 focus:ring-[#5b468a]/20 outline-none transition"
                  placeholder="021-xxxx-xxxx"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Save Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-30 p-4">
        <button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
        >
          <Save className="w-5 h-5" />
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
}