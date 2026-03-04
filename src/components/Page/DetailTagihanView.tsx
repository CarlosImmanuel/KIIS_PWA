import { FileText, CreditCard, CheckCircle, Download, Printer, Calendar, Info } from 'lucide-react';
import { useState } from 'react';

interface DetailTagihanViewProps {
  onMenuToggle: () => void;
  tagihan?: any;
}

export function DetailTagihanView({ tagihan }: DetailTagihanViewProps) {
  const [activeTab, setActiveTab] = useState<'informasi' | 'riwayat'>('informasi');
  const [activePaymentMethod, setActivePaymentMethod] = useState('atm-bni');

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const detailTagihan = [
    { no: 1, item: 'UKT', nominal: 6100000 },
    { no: 2, item: 'ADMIN BNI VA', nominal: 10000 }
  ];

  const riwayatPembayaran = [
    {
      id: 1,
      tanggal: '2025-01-15 10:30:25',
      metode: 'Virtual Account BNI',
      jumlah: 6110000,
      status: 'Berhasil',
      nomorReferensi: 'REF-2025011510302501'
    }
  ];

  const paymentMethods = [
    { id: 'atm-bni', label: 'ATM BNI' },
    { id: 'mobile-bni', label: 'Mobile Banking BNI' },
    { id: 'ibank-bni', label: 'iBank Personal BNI' },
    { id: 'sms-bni', label: 'BNI sms banking' },
    { id: 'teller-bni', label: 'Cabang atau Outlet BNI (Teller)' },
    { id: 'agen46', label: 'Agen46' },
    { id: 'atm-bersama', label: 'ATM Bersama' },
    { id: 'bank-lain', label: 'Bank Lain' },
    { id: 'ovo', label: 'OVO' }
  ];

  const atmBniSteps = [
    'Masukkan Kartu Anda.',
    'Pilih Bahasa.',
    'Masukkan PIN ATM Anda.',
    'Pilih "Menu Lainnya".',
    'Pilih "Transfer".',
    'Pilih Jenis rekening yang akan Anda gunakan (Contoh: "Dari Rekening Tabungan").',
    'Masukkan 16 digit nomor Virtual Account Anda (contoh: 9882208122011001).',
    'Tagihan yang harus dibayarkan akan muncul pada konfirmasi.',
    'Konfirmasi, apabila telah sesuai, lanjutkan transaksi.',
    'Transaksi Anda telah selesai.'
  ];

  const mobileBankingSteps = [
    'Login aplikasi BNI Mobile Banking.',
    'Pilih menu "Transfer".',
    'Pilih "Virtual Account Billing".',
    'Masukkan 16 digit nomor Virtual Account.',
    'Nominal pembayaran akan muncul di layar konfirmasi.',
    'Konfirmasi transaksi dengan memasukkan Password.',
    'Transaksi berhasil, simpan bukti pembayaran.'
  ];

  const iBankSteps = [
    'Ketik alamat https://ibank.bni.co.id, kemudian klik "Enter".',
    'Masukkan User ID dan Password.',
    'Klik menu "Transfer".',
    'Klik "Transfer ke Rekening BNI".',
    'Masukkan nomor rekening tujuan dengan 16 digit VA.',
    'Masukkan jumlah yang akan dibayarkan.',
    'Masukkan Authentication Token yang muncul di Token BNI.',
    'Transaksi selesai, simpan bukti transaksi.'
  ];

  const getPaymentSteps = () => {
    switch (activePaymentMethod) {
      case 'atm-bni':
        return atmBniSteps;
      case 'mobile-bni':
        return mobileBankingSteps;
      case 'ibank-bni':
        return iBankSteps;
      default:
        return ['Instruksi pembayaran akan ditampilkan di sini.'];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Tabs */}
      <div className="sticky top-[72px] z-10 bg-white shadow-md px-4">
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('informasi')}
            className={`flex-1 py-3 text-sm font-bold transition-all relative ${
              activeTab === 'informasi'
                ? 'text-[#5b468a]'
                : 'text-gray-500'
            }`}
          >
            Informasi Pembayaran
            {activeTab === 'informasi' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5b468a]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('riwayat')}
            className={`flex-1 py-3 text-sm font-bold transition-all relative ${
              activeTab === 'riwayat'
                ? 'text-[#5b468a]'
                : 'text-gray-500'
            }`}
          >
            Riwayat Pembayaran
            {activeTab === 'riwayat' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5b468a]"></div>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 space-y-4">
        {activeTab === 'informasi' ? (
          <>
            {/* Status Badge */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 shadow-lg text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-90">Status Pembayaran</p>
                    <p className="text-lg font-bold">LUNAS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ringkasan Tagihan */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-4 py-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white">Ringkasan Tagihan</h3>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Total Pembayaran</span>
                  <span className="text-sm font-bold text-gray-900">{formatRupiah(tagihan.tagihan)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Jumlah Telah Terbayar</span>
                  <span className="text-sm font-bold text-green-600">{formatRupiah(tagihan.totalTerbayar)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Sisa Tagihan</span>
                  <span className="text-sm font-bold text-gray-900">{formatRupiah(tagihan.tagihan - tagihan.totalTerbayar)}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">Nomor VA</span>
                  <span className="text-sm font-mono font-bold text-[#5b468a]">{tagihan.virtualAccount}</span>
                </div>
              </div>
            </div>

            {/* Detail Tagihan */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white">Detail Tagihan</h3>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 border-b">No</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 border-b">Item</th>
                      <th className="px-4 py-3 text-right text-xs font-bold text-gray-700 border-b">Nominal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailTagihan.map((item) => (
                      <tr key={item.no} className="border-b border-gray-100">
                        <td className="px-4 py-3 text-sm text-gray-900">{item.no}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{item.item}</td>
                        <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">{formatRupiah(item.nominal)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-50">
                    <tr>
                      <td colSpan={2} className="px-4 py-3 text-sm font-bold text-gray-900">Total Tagihan</td>
                      <td className="px-4 py-3 text-sm font-bold text-[#5b468a] text-right">{formatRupiah(tagihan.tagihan)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Cara Pembayaran */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white">Cara Pembayaran</h3>
                </div>
              </div>

              {/* Payment Method Tabs */}
              <div className="px-4 pt-3 pb-2 border-b border-gray-200 overflow-x-auto">
                <div className="flex gap-2 min-w-max">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setActivePaymentMethod(method.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                        activePaymentMethod === method.id
                          ? 'bg-[#5b468a] text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="p-4">
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 mb-4">
                  <p className="text-xs font-bold text-blue-900 mb-1">
                    Pembayaran BNI Virtual Account dengan {paymentMethods.find(m => m.id === activePaymentMethod)?.label}
                  </p>
                </div>

                <ol className="space-y-2">
                  {getPaymentSteps().map((step, index) => (
                    <li key={index} className="flex gap-3 text-xs text-gray-700 leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 bg-[#5b468a] text-white rounded-full flex items-center justify-center font-bold text-[10px]">
                        {index + 1}
                      </span>
                      <span className="flex-1 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Status Badge */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 shadow-lg text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-90">Status Pembayaran</p>
                    <p className="text-lg font-bold">LUNAS</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Riwayat Pembayaran */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-white" />
                    <h3 className="font-bold text-white">Riwayat Pembayaran</h3>
                  </div>
                  <button className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition">
                    <Printer className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {riwayatPembayaran.length > 0 ? (
                  riwayatPembayaran.map((riwayat) => (
                    <div key={riwayat.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-900">{riwayat.status}</p>
                            <p className="text-xs text-gray-500">{riwayat.tanggal}</p>
                          </div>
                        </div>
                        <button className="p-1.5 bg-[#5b468a] hover:bg-[#4a3771] rounded-lg transition">
                          <Download className="w-3.5 h-3.5 text-white" />
                        </button>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Metode Pembayaran</span>
                          <span className="text-xs font-semibold text-gray-900">{riwayat.metode}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Jumlah</span>
                          <span className="text-sm font-bold text-green-600">{formatRupiah(riwayat.jumlah)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Nomor Referensi</span>
                          <span className="text-xs font-mono font-semibold text-gray-900">{riwayat.nomorReferensi}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500">Belum ada riwayat pembayaran</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
