import { Lock, Eye, EyeOff, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface UbahPasswordViewProps {
  onBack: () => void;
  onMenuToggle: () => void;
}

export function UbahPasswordView({ onBack, onMenuToggle }: UbahPasswordViewProps) {
  const [passwordSekarang, setPasswordSekarang] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');
  
  const [showPasswordSekarang, setShowPasswordSekarang] = useState(false);
  const [showPasswordBaru, setShowPasswordBaru] = useState(false);
  const [showKonfirmasi, setShowKonfirmasi] = useState(false);
  
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Password strength checker
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    
    if (strength <= 1) return { strength: 1, label: 'Lemah', color: 'bg-red-500' };
    if (strength === 2) return { strength: 2, label: 'Sedang', color: 'bg-yellow-500' };
    if (strength === 3) return { strength: 3, label: 'Kuat', color: 'bg-blue-500' };
    return { strength: 4, label: 'Sangat Kuat', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(passwordBaru);
  const isPasswordMatch = konfirmasiPassword && passwordBaru === konfirmasiPassword;
  const isPasswordMismatch = konfirmasiPassword && passwordBaru !== konfirmasiPassword;

  const handleSubmit = () => {
    if (!passwordSekarang || !passwordBaru || !konfirmasiPassword) {
      alert('Mohon lengkapi semua field!');
      return;
    }
    
    if (passwordBaru !== konfirmasiPassword) {
      alert('Password baru dan konfirmasi password tidak cocok!');
      return;
    }
    
    if (passwordBaru.length < 8) {
      alert('Password baru minimal 8 karakter!');
      return;
    }
    
    // Simulate API call
    alert('Password berhasil diubah!');
    onBack();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b468a]/5 to-white pb-24">
      <div className="px-4 py-6 space-y-6">
        {/* Security Info Banner */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-xl p-4 shadow-sm">
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Keamanan Akun</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Gunakan password yang kuat dengan kombinasi huruf besar, huruf kecil, angka, dan simbol untuk keamanan maksimal.
              </p>
            </div>
          </div>
        </div>

        {/* Password Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#5b468a] to-[#4a3771] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-white text-base">Ubah Password</h2>
                <p className="text-white/80 text-xs">Perbarui password Anda</p>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-5">
            {/* Password Sekarang */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password Sekarang <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  focusedField === 'current' ? 'text-[#5b468a]' : 'text-gray-400'
                }`}>
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPasswordSekarang ? 'text' : 'password'}
                  value={passwordSekarang}
                  onChange={(e) => setPasswordSekarang(e.target.value)}
                  onFocus={() => setFocusedField('current')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Masukkan password sekarang"
                  className={`w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 rounded-xl transition-all focus:outline-none ${
                    focusedField === 'current'
                      ? 'border-[#5b468a] bg-white shadow-md'
                      : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordSekarang(!showPasswordSekarang)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPasswordSekarang ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Password Baru */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Password Baru <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  focusedField === 'new' ? 'text-[#5b468a]' : 'text-gray-400'
                }`}>
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPasswordBaru ? 'text' : 'password'}
                  value={passwordBaru}
                  onChange={(e) => setPasswordBaru(e.target.value)}
                  onFocus={() => setFocusedField('new')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Masukkan password baru"
                  className={`w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 rounded-xl transition-all focus:outline-none ${
                    focusedField === 'new'
                      ? 'border-[#5b468a] bg-white shadow-md'
                      : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordBaru(!showPasswordBaru)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPasswordBaru ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {passwordBaru && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600 font-medium">Kekuatan Password:</span>
                    <span className={`font-bold ${
                      passwordStrength.strength === 1 ? 'text-red-600' :
                      passwordStrength.strength === 2 ? 'text-yellow-600' :
                      passwordStrength.strength === 3 ? 'text-blue-600' :
                      'text-green-600'
                    }`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 flex-1 rounded-full transition-all ${
                          level <= passwordStrength.strength
                            ? passwordStrength.color
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="space-y-1 mt-3 bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Syarat password:</p>
                    <div className={`flex items-center gap-2 text-xs ${passwordBaru.length >= 8 ? 'text-green-600' : 'text-gray-400'}`}>
                      {passwordBaru.length >= 8 ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>Minimal 8 karakter</span>
                    </div>
                    <div className={`flex items-center gap-2 text-xs ${/[a-z]/.test(passwordBaru) && /[A-Z]/.test(passwordBaru) ? 'text-green-600' : 'text-gray-400'}`}>
                      {/[a-z]/.test(passwordBaru) && /[A-Z]/.test(passwordBaru) ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>Huruf besar & kecil</span>
                    </div>
                    <div className={`flex items-center gap-2 text-xs ${/\d/.test(passwordBaru) ? 'text-green-600' : 'text-gray-400'}`}>
                      {/\d/.test(passwordBaru) ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>Mengandung angka</span>
                    </div>
                    <div className={`flex items-center gap-2 text-xs ${/[!@#$%^&*(),.?":{}|<>]/.test(passwordBaru) ? 'text-green-600' : 'text-gray-400'}`}>
                      {/[!@#$%^&*(),.?":{}|<>]/.test(passwordBaru) ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>Simbol khusus (!@#$%...)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Konfirmasi Password */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Konfirmasi Password Baru <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  focusedField === 'confirm' ? 'text-[#5b468a]' : 'text-gray-400'
                }`}>
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showKonfirmasi ? 'text' : 'password'}
                  value={konfirmasiPassword}
                  onChange={(e) => setKonfirmasiPassword(e.target.value)}
                  onFocus={() => setFocusedField('confirm')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Ketik ulang password baru"
                  className={`w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 rounded-xl transition-all focus:outline-none ${
                    focusedField === 'confirm'
                      ? 'border-[#5b468a] bg-white shadow-md'
                      : isPasswordMatch
                      ? 'border-green-500 bg-green-50'
                      : isPasswordMismatch
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowKonfirmasi(!showKonfirmasi)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showKonfirmasi ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Match Indicator */}
              {konfirmasiPassword && (
                <div className="mt-2">
                  {isPasswordMatch ? (
                    <div className="flex items-center gap-2 text-green-600 text-xs">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">Password cocok!</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600 text-xs">
                      <XCircle className="w-4 h-4" />
                      <span className="font-medium">Password tidak cocok!</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-[#5b468a] to-[#4a3771] text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3"
        >
          Simpan
        </button>

        {/* Tips Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
          <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            Tips Keamanan
          </h3>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Jangan gunakan password yang sama dengan akun lain</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Hindari menggunakan informasi pribadi yang mudah ditebak</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>Ubah password secara berkala untuk keamanan lebih baik</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}