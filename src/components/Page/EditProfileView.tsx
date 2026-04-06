import { Camera, User, MapPin, Briefcase, Save, ChevronDown, Pencil } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { apiAkademik, apiAuth, ApiError } from '../../lib/api';

interface EditProfileViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
}

interface MahasiswaProfile {
  id_mahasiswa: number;
  npm: string;
  nama_lengkap: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  agama: string;
  no_ktp: string;
  nisn: string | null;
  orang_tua_ayah: { id_orangtua_wali?: number | null; nama_ayah?: string | null; nama?: string | null } | null;
  orang_tua_ibu: { id_orangtua_wali?: number | null; nama_ibu?: string | null; nama?: string | null } | null;
  alamat_asal: string;
  alamat_domisili: string | null;
  telp_seluler: string | null;
  telp_rumah: string | null;
  email_utama: string | null;
  email_lainnya: string | null;
  photo_url_link: string;
  status_mahasiswa_label: string;
  tahun_ajar: { tahunajar: string };
  program_studi: { nama_prodi: string; nama_prodi_akronim: string };
  kelas: { nama_kelas: string };
  fakultas: { nama_fakultas: string };
  pekerjaan: Array<{
    id_mahasiswa_pekerjaan: number;
    id_mahasiswa: number;
    nama_perusahaan: string;
    jabatan: string;
    alamat_perusahaan: string;
    kode_pos_perusahaan: string;
    no_telp_perusahaan: string;
    created_at: string;
    deleted_at: string | null;
    updated_at: string;
    updated_by: number | null;
    entry_user_id: number | null;
  }>;
}

interface ProfileResponse {
  status: number;
  message: string;
  data: MahasiswaProfile;
}

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const toNullIfEmpty = (value: string) => {
  const trimmed = value.trim();
  return trimmed === '' ? null : trimmed;
};

export function EditProfileView({ }: EditProfileViewProps) {
  const [formData, setFormData] = useState({
    nama: '',
    npm: '',
    angkatan: '',
    status: '',
    fakultas: '',
    programStudi: '',
    kelas: '',
    
    namaMahasiswa: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: '',
    agama: '',
    nik: '',
    nisn: '',
    namaIbu: '',
    namaAyah: '',
    
    alamatAsal: '',
    alamatDomisili: '',
    telpSeluler: '',
    telpRumah: '',
    emailUtama: '',
    emailLainnya: '',
    
    tempatKerja: '',
    jabatan: '',
    alamatKerja: '',
    kodePos: '',
    noTelp: ''
  });

  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [idMahasiswa, setIdMahasiswa] = useState<number | null>(null);
  const [idOrangtuaAyah, setIdOrangtuaAyah] = useState<number | null>(null);
  const [idOrangtuaIbu, setIdOrangtuaIbu] = useState<number | null>(null);
  const [pekerjaans, setPekerjaans] = useState<MahasiswaProfile['pekerjaan']>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [submitError, setSubmitError] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState<string>('');
  const isReadOnly = !isEditing || isSubmitting;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (submitSuccess || submitError) {
      const timer = setTimeout(() => {
        setSubmitSuccess('');
        setSubmitError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess, submitError]);

  const fetchProfileData = async (showLoading = true) => {
    try {
      if (showLoading) {
        setIsLoading(true);
      }
      setError('');

      const response = await apiAkademik<ProfileResponse>('/akun/mahasiswa/show-data', {
        withAuth: true,
      });

      const data = response.data;
      setIdMahasiswa(data.id_mahasiswa);
      setIdOrangtuaAyah(data.orang_tua_ayah?.id_orangtua_wali ?? null);
      setIdOrangtuaIbu(data.orang_tua_ibu?.id_orangtua_wali ?? null);
      setPekerjaans(data.pekerjaan || []);

      setPhotoUrl(data.photo_url_link || '');
      setFormData({
        nama: data.nama_lengkap || '',
        npm: data.npm || '',
        angkatan: data.tahun_ajar?.tahunajar || '',
        status: data.status_mahasiswa_label || '',
        fakultas: data.fakultas?.nama_fakultas || '-',
        programStudi: data.program_studi?.nama_prodi || '',
        kelas: data.kelas?.nama_kelas || '',

        namaMahasiswa: data.nama_lengkap || '',
        tempatLahir: data.tempat_lahir || '',
        tanggalLahir: formatDate(data.tanggal_lahir || ''),
        jenisKelamin: data.jenis_kelamin || '',
        agama: data.agama || '',
        nik: data.no_ktp || '',
        nisn: data.nisn || '',
        namaIbu: data.orang_tua_ibu?.nama_ibu || data.orang_tua_ibu?.nama || '',
        namaAyah: data.orang_tua_ayah?.nama_ayah || data.orang_tua_ayah?.nama || '',

        alamatAsal: data.alamat_asal || '',
        alamatDomisili: data.alamat_domisili || '',
        telpSeluler: data.telp_seluler || '',
        telpRumah: data.telp_rumah || '',
        emailUtama: data.email_utama || '',
        emailLainnya: data.email_lainnya || '',

        tempatKerja: data.pekerjaan?.[0]?.nama_perusahaan || '',
        jabatan: data.pekerjaan?.[0]?.jabatan || '',
        alamatKerja: data.pekerjaan?.[0]?.alamat_perusahaan || '',
        kodePos: data.pekerjaan?.[0]?.kode_pos_perusahaan || '',
        noTelp: data.pekerjaan?.[0]?.no_telp_perusahaan || ''
      });
    } catch (err: unknown) {
      console.error('Failed to fetch profile:', err);
      setError('Gagal memuat data profil. Silakan coba lagi.');
    } finally {
      if (showLoading) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const onFileSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const validImageTypes = ['image/jpeg', 'image/png'];
    if (!validImageTypes.includes(file.type)) {
      setSubmitError('File yang dipilih harus berupa JPG atau PNG.');
      event.target.value = '';
      return;
    }

    const body = new FormData();
    body.append('photo_alias1', file);
    body.append('photo_alias2', file);

    try {
      setSubmitError('');
      setSubmitSuccess('');
      setIsSubmitting(true);

      await apiAkademik('/akun/mahasiswa/upload-photo', {
        method: 'POST',
        withAuth: true,
        body,
      });

      setSubmitSuccess('Foto profil berhasil diperbarui.');
      await fetchProfileData(false);
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Gagal mengunggah foto profil.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
      event.target.value = '';
    }
  };

  const handlePrimaryButtonClick = async () => {
    setSubmitError('');
    setSubmitSuccess('');

    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    if (!idMahasiswa) {
      setSubmitError('ID mahasiswa tidak ditemukan.');
      return;
    }

    const pekerjaanUtama = pekerjaans[0];
    const pekerjaanPayload = {
      ...(pekerjaanUtama || {}),
      id_mahasiswa: idMahasiswa,
      nama_perusahaan: formData.tempatKerja,
      jabatan: formData.jabatan,
      alamat_perusahaan: formData.alamatKerja,
      kode_pos_perusahaan: formData.kodePos,
      no_telp_perusahaan: formData.noTelp,
    };

    const profilePayload = {
      id_mahasiswa: idMahasiswa,
      nama_lengkap: formData.namaMahasiswa,
      tempat_lahir: formData.tempatLahir,
      tanggal_lahir: formData.tanggalLahir,
      jenis_kelamin: formData.jenisKelamin,
      agama: formData.agama,
      no_ktp: toNullIfEmpty(formData.nik),
      nisn: toNullIfEmpty(formData.nisn),
      alamat_asal: formData.alamatAsal,
      alamat_domisili: toNullIfEmpty(formData.alamatDomisili),
      telp_seluler: toNullIfEmpty(formData.telpSeluler),
      telp_rumah: toNullIfEmpty(formData.telpRumah),
      email_utama: toNullIfEmpty(formData.emailUtama),
      email_lainnya: toNullIfEmpty(formData.emailLainnya),
      pekerjaans: JSON.stringify({ pekerjaans: [pekerjaanPayload] }),
    };

    const parentPayload = {
      id_mahasiswa: idMahasiswa,
      id_orangtua_ayah: idOrangtuaAyah,
      id_orangtua_ibu: idOrangtuaIbu,
      nama_ayah: toNullIfEmpty(formData.namaAyah),
      nama_ibu: toNullIfEmpty(formData.namaIbu),
    };

    try {
      setIsSubmitting(true);

      await apiAuth('/user/edit-profil', {
        method: 'POST',
        withAuth: true,
        body: JSON.stringify(profilePayload),
      });

      await apiAkademik('/perubahan-data/orangtua-wali-mahasiswa/update', {
        method: 'PUT',
        withAuth: true,
        body: JSON.stringify(parentPayload),
      });

      setSubmitSuccess('Profil berhasil diperbarui.');
      setIsEditing(false);
      await fetchProfileData(false);
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Gagal menyimpan perubahan profil.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#5b468a] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data profil...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white page-safe-bottom">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-5">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white page-safe-bottom">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-5 space-y-5">
        {/* Photo Profile Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#5b468a] to-[#4a3771] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                {photoUrl ? (
                  <img
                    src={photoUrl}
                    alt={formData.nama}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <User className="w-12 h-12 text-white" />
                )}
              </div>
              <button
                type="button"
                onClick={triggerFileInput}
                className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition"
                title="Update Photo"
              >
                <Camera className="w-4 h-4" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={onFileSelected}
                className="hidden"
              />
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

        <fieldset
          disabled={isReadOnly}
          className={`space-y-5 ${
            isReadOnly
              ? '[&_input]:bg-gray-50 [&_input]:border-gray-200 [&_input]:text-gray-600 [&_textarea]:bg-gray-50 [&_textarea]:border-gray-200 [&_textarea]:text-gray-600 [&_select]:bg-gray-50 [&_select]:border-gray-200 [&_select]:text-gray-600'
              : ''
          }`}
        >
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
                    <option value="Budha">Budha</option>
                    <option value="Kong Hu Cu">Kong Hu Cu</option>
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
        </fieldset>
      </div>

      {/* Floating Action Button */}
      <div className="fixed floating-safe-bottom floating-safe-right z-20">
        <button
          onClick={handlePrimaryButtonClick}
          disabled={isSubmitting}
          className="w-16 h-16 bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-75"
          title={isEditing ? 'Simpan Perubahan' : 'Edit Profil'}
        >
          {isEditing ? <Save className="w-6 h-6" /> : <Pencil className="w-6 h-6" />}
        </button>
        
        {submitError ? (
          <div className="absolute bottom-20 right-0 w-64 text-sm text-red-600 mb-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200">
            {submitError}
          </div>
        ) : null}
        {submitSuccess ? (
          <div className="absolute bottom-20 right-0 w-64 text-sm text-green-600 mb-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
            {submitSuccess}
          </div>
        ) : null}
      </div>
    </div>
  );
}