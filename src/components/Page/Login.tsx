import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, MapPin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import logoImage from '../../assets/Images/kisLogoUngu.png';
import kampusMerdekaLogo from '../../assets/Images/kampusmerdeka.png';
import ibikLogo from '../../assets/Images/logoIBIK.png';

export default function App() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm md:max-w-md lg:max-w-lg space-y-6"
        >
          {/* Logo and Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center"
            >
              <img
                src={logoImage}
                alt="KIS Logo"
                className="h-16 md:h-20 lg:h-24 w-auto hover:scale-105 transition-all duration-300"
              />
            </motion.div>
          </div>

          {/* Login Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 lg:p-10 space-y-5"
          >
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Username Input */}
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm md:text-base font-medium text-slate-700">
                  Single Account Username
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-[#5b468a] transition-colors" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 h-12 md:h-14 text-base bg-white border-slate-300 focus:border-[#5b468a] focus:ring-[#5b468a] shadow-sm hover:shadow-md transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm md:text-base font-medium text-slate-700">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-[#5b468a] transition-colors" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 h-12 md:h-14 text-base bg-white border-slate-300 focus:border-[#5b468a] focus:ring-[#5b468a] shadow-sm hover:shadow-md transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#5b468a] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-12 md:h-14 text-base md:text-lg bg-[#5b468a] hover:bg-[#4a3670] text-white font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                Login
              </Button>
            </form>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-4"
          >
            {/* Institution Logos */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-center gap-4 md:gap-6">
                {/* IBIK Logo */}
                <img 
                  src={ibikLogo} 
                  alt="Institut Bisnis & Informatika Kesatuan" 
                  className="h-10 md:h-12 lg:h-14 w-auto"
                />
                
                {/* Divider */}
                <div className="h-10 md:h-12 lg:h-14 w-px bg-slate-200"></div>
                
                {/* Kampus Merdeka Logo */}
                <img 
                  src={kampusMerdekaLogo} 
                  alt="Kampus Merdeka Indonesia Jaya" 
                  className="h-10 md:h-12 lg:h-14 w-auto"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-slate-200 space-y-2 text-xs md:text-sm text-slate-700 text-center">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="size-4 md:size-5 flex-shrink-0 text-[#5b468a]" />
                <p>Jalan Ranggagading No.1 Bogor 16123</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="size-4 md:size-5 flex-shrink-0 text-[#5b468a]" />
                <a href="mailto:info@ibik.ac.id" className="hover:text-[#5b468a] transition-colors hover:underline">
                  info@ibik.ac.id
                </a>
              </div>
            </div>

            {/* Navigation Link */}
            <div className="flex justify-center">
              <a
                href="#"
                className="px-5 py-2 md:px-6 md:py-3 bg-white hover:bg-slate-50 rounded-lg transition-all duration-300 hover:scale-105 shadow-md border border-slate-200 text-xs md:text-sm font-semibold text-[#5b468a]"
              >
                www.ibik.ac.id
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}