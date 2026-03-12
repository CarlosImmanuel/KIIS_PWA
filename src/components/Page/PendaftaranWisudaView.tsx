import { useState } from "react";
import { Upload, FileText, CheckCircle2, AlertCircle, Printer } from "lucide-react";

interface PendaftaranWisudaViewProps {
  onBack?: () => void;
  onMenuToggle?: () => void;
}

export function PendaftaranWisudaView({}: PendaftaranWisudaViewProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Simulate file upload
      setUploadedFile(`${selectedFile.name} - 22231064_02_03_2026_Islan_Ijazah.pdf`);
      setSelectedFile(null);
    }
  };

  const handleUpdateDocument = () => {
    // Reset to upload state
    setUploadedFile(null);
    setSelectedFile(null);
  };

  const handleCetakVA = () => {
    // Handle print VA
    console.log("Cetak VA");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white pb-24">
      <div className="px-4 md:px-8 lg:px-12 py-6 space-y-5">
        {/* Alert Instructions */}
        <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-l-4 border-red-500 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-red-500 p-2 rounded-lg flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-sm mb-1">
                  PASTIKAN BIODATA ANDA SUDAH LENGKAP
                </h3>
                <p className="text-red-700 text-xs leading-relaxed">
                  Silahkan cek di menu <span className="font-bold">"AKUN MAHASISWA &gt; PROFIL SAYA &gt; EDIT PROFILE"</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-white">Instruksi Upload</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <p className="text-sm text-gray-700 flex-1">
                  Silahkan Upload <span className="font-bold text-[#5b468a]">Formulir Isian Ijazah</span>. 
                  Apabila belum menerimanya, silahkan unduh dari link berikut ini{" "}
                  <a href="#" className="text-blue-600 hover:underline font-semibold">
                    Formulir Isian Ijazah
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <p className="text-sm text-gray-700 flex-1">
                  Upload Scan Formulir yang sudah dilengkapi dan ditandatangani di atas materai kemudian serahkan formulir ke BAAK
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-4 py-3 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <Upload className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-white">Upload Formulir Wisuda</h3>
          </div>

          <div className="p-5">
            {!uploadedFile ? (
              // BEFORE UPLOAD STATE
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Pilih File Formulir Isian Ijazah
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#5b468a] transition-colors cursor-pointer bg-gradient-to-br from-gray-50 to-white">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="w-16 h-16 bg-[#5b468a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Upload className="w-8 h-8 text-[#5b468a]" />
                      </div>
                      {selectedFile ? (
                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-sm font-semibold">{selectedFile.name}</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            File siap diupload
                          </p>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm text-gray-700 font-semibold mb-1">
                            Choose File
                          </p>
                          <p className="text-xs text-gray-500">
                            No file chosen
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            PDF, JPG, PNG (Max 5MB)
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <button
                  onClick={handleUpload}
                  disabled={!selectedFile}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                    selectedFile
                      ? "bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white hover:shadow-xl active:scale-95"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Upload className="w-5 h-5" />
                  Upload
                </button>
              </div>
            ) : (
              // AFTER UPLOAD STATE
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-800 text-sm mb-1">
                        File Berhasil Diupload
                      </h4>
                      <p className="text-green-700 text-xs">
                        Formulir wisuda Anda telah tersimpan
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-0.5">Formulir Wisuda :</p>
                        <p className="text-sm font-semibold text-gray-800 break-all">
                          {uploadedFile}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleUpdateDocument}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Upload className="w-5 h-5" />
                    Update Dokumen
                  </button>
                  <button
                    onClick={handleCetakVA}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Printer className="w-5 h-5" />
                    Cetak VA
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Information Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-amber-500 p-2 rounded-lg flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-sm mb-2">
                  Informasi Penting
                </h3>
                <ul className="space-y-1.5 text-xs text-amber-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>Pastikan file yang diupload sudah ditandatangani di atas materai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>Format file yang diterima: PDF, JPG, atau PNG</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>Serahkan formulir asli ke BAAK setelah upload</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
