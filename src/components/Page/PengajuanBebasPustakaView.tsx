import { useState } from "react";
import { Upload, FileText, FileType, ScanLine, CheckCircle2, Eye, ChevronDown, AlertCircle} from "lucide-react";

interface PengajuanBebasPustakaViewProps {
  onBack?: () => void;
  onMenuToggle?: () => void;
}

interface DocumentItem {
  id: string;
  kategori: "PDF" | "WORD" | "SCAN";
  nama: string;
  deskripsi: string;
  status: "belum" | "valid";
  fileName?: string;
  icon: any;
  color: string;
}

export function PengajuanBebasPustakaView({}: PengajuanBebasPustakaViewProps) {
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: "pdf",
      kategori: "PDF",
      nama: "Skripsi PDF",
      deskripsi: "Skripsi PDF, file terpisah tiap sub.",
      status: "belum",
      icon: FileText,
      color: "from-red-500 to-red-600",
    },
    {
      id: "word",
      kategori: "WORD",
      nama: "Skripsi Word",
      deskripsi: "Skripsi Word, file terpisah tiap sub.",
      status: "belum",
      icon: FileType,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "scan",
      kategori: "SCAN",
      nama: "Skripsi Scan",
      deskripsi: "Scan bertanda tangan & bermaterai.",
      status: "belum",
      icon: ScanLine,
      color: "from-purple-500 to-purple-600",
    },
  ]);

  const [selectedDocType, setSelectedDocType] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedDocType && selectedFile) {
      setDocuments((prev) =>
        prev.map((doc) =>
          doc.id === selectedDocType
            ? { ...doc, status: "valid" as const, fileName: selectedFile.name }
            : doc
        )
      );
      // Reset form
      setSelectedDocType("");
      setSelectedFile(null);
      setShowDropdown(false);
    }
  };

  const handleViewDocument = (fileName: string) => {
    // Handle view document
    console.log("View document:", fileName);
  };

  const getDocumentOptions = () => {
    return documents.filter((doc) => doc.status === "belum");
  };

  const allDocumentsUploaded = documents.every((doc) => doc.status === "valid");
  const uploadedCount = documents.filter((doc) => doc.status === "valid").length;
  const totalCount = documents.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white pb-24">
      <div className="px-4 md:px-8 lg:px-12 py-6 space-y-5 md:space-y-6">
        {/* Progress Section */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-800">Progress Upload</h3>
            <span className="text-sm font-bold text-[#5b468a]">
              {uploadedCount}/{totalCount} Dokumen
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] h-3 rounded-full transition-all duration-500"
              style={{ width: `${(uploadedCount / totalCount) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {allDocumentsUploaded
              ? "✓ Semua dokumen berhasil diupload"
              : `Silahkan upload ${totalCount - uploadedCount} dokumen lagi`}
          </p>
        </div>

        {/* Instruction Info */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-l-4 border-blue-500 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-blue-800 text-sm mb-1">
                  Cara Upload Dokumen
                </h3>
                <p className="text-blue-700 text-xs leading-relaxed">
                  Pilih jenis dokumen yang ingin diupload, lalu klik tombol Upload di bawah.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Checklist Style Document List */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-4 py-3">
            <h3 className="font-bold text-white">Daftar Dokumen yang Harus Diupload</h3>
          </div>

          <div className="p-5 space-y-3">
            {documents.map((doc, index) => (
              <div
                key={doc.id}
                className={`border-2 rounded-xl overflow-hidden transition-all ${
                  doc.status === "valid"
                    ? "border-green-300 bg-green-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Numbering & Icon */}
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md ${
                          doc.status === "valid"
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      >
                        {doc.status === "valid" ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <span className="text-sm">{index + 1}</span>
                        )}
                      </div>
                      <div className={`bg-gradient-to-br ${doc.color} p-2 rounded-lg shadow-sm`}>
                        <doc.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                            doc.kategori === "PDF"
                              ? "bg-red-500 text-white"
                              : doc.kategori === "WORD"
                              ? "bg-blue-500 text-white"
                              : "bg-purple-500 text-white"
                          }`}
                        >
                          {doc.kategori}
                        </span>
                        {doc.status === "valid" && (
                          <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Sudah Upload
                          </span>
                        )}
                      </div>

                      <h4 className="font-bold text-gray-800 text-base mb-1">
                        {doc.nama}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {doc.deskripsi}
                      </p>

                      {/* File Info or Status */}
                      {doc.status === "valid" && doc.fileName ? (
                        <div className="bg-white border border-green-200 rounded-lg p-3 mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <FileText className="w-4 h-4 text-green-600" />
                            <p className="text-xs font-semibold text-green-700">File Berhasil Diupload:</p>
                          </div>
                          <p className="text-xs text-gray-700 break-all pl-6">
                            {doc.fileName}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-yellow-600" />
                            <p className="text-xs font-semibold text-yellow-700">
                              Belum diupload
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      {doc.status === "valid" ? (
                        <button
                          onClick={() => handleViewDocument(doc.fileName || "")}
                          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Lihat Dokumen
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span>Upload dokumen ini menggunakan form di bawah</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Section */}
        {!allDocumentsUploaded && (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-white">Status Upload Dokumen</h3>
            </div>

            <div className="p-5 space-y-4">
              {/* Jenis Dokumen Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Jenis Dokumen
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className={selectedDocType ? "text-gray-800 font-medium" : "text-gray-400"}>
                      {selectedDocType
                        ? documents.find((d) => d.id === selectedDocType)?.nama
                        : "Pilih Jenis Dokumen"}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
                  </button>

                  {showDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden">
                      {getDocumentOptions().length === 0 ? (
                        <div className="px-4 py-3 text-sm text-gray-500 text-center">
                          Semua dokumen sudah diupload
                        </div>
                      ) : (
                        getDocumentOptions().map((doc) => (
                          <button
                            key={doc.id}
                            onClick={() => {
                              setSelectedDocType(doc.id);
                              setShowDropdown(false);
                            }}
                            className="w-full px-4 py-3 text-left hover:bg-[#5b468a]/5 transition-colors flex items-center gap-3 border-b border-gray-100 last:border-0"
                          >
                            <div className={`bg-gradient-to-br ${doc.color} p-2 rounded-lg`}>
                              <doc.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-800">{doc.nama}</p>
                              <p className="text-xs text-gray-500">{doc.kategori}</p>
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Upload File */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload File
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-[#5b468a] transition-colors cursor-pointer bg-gradient-to-br from-gray-50 to-white">
                  <input
                    type="file"
                    id="file-upload-bebas-pustaka"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file-upload-bebas-pustaka" className="cursor-pointer">
                    <div className="w-14 h-14 bg-[#5b468a]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Upload className="w-7 h-7 text-[#5b468a]" />
                    </div>
                    {selectedFile ? (
                      <div className="space-y-1">
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
                          PDF, Word, JPG, PNG (Max 10MB)
                        </p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Upload Button */}
              <button
                onClick={handleUpload}
                disabled={!selectedDocType || !selectedFile}
                className={`w-full py-3.5 px-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                  selectedDocType && selectedFile
                    ? "bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white hover:shadow-xl active:scale-95"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Upload className="w-5 h-5" />
                Upload
              </button>
            </div>
          </div>
        )}

        {/* Warning Note */}
        <div className="bg-gradient-to-br from-red-50 to-red-100/50 border-l-4 border-red-500 rounded-2xl shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3">
              <div className="bg-red-500 p-2 rounded-lg flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-sm mb-2">
                  Catatan Penting
                </h3>
                <p className="text-red-700 text-xs leading-relaxed">
                  Untuk mendapatkan status bebas pustaka, setelah upload dokumen ini, segera ke Perpustakaan untuk 
                  mengumpulkan <span className="font-bold">Hard cover Skripsi Dan Jurnal</span>, sudah meluasi 
                  sumbangan buku serta sudah tidak ada pinjaman buku dan denda.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Message when all uploaded */}
        {allDocumentsUploaded && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-2xl shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-green-800 text-sm mb-1">
                    Semua Dokumen Berhasil Diupload
                  </h3>
                  <p className="text-green-700 text-xs leading-relaxed">
                    Silakan kunjungi Perpustakaan untuk melanjutkan proses bebas pustaka dengan membawa hard cover 
                    skripsi dan jurnal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}