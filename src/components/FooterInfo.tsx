export function FooterInfo() {
  return (
    <>
      {/* Footer Info */}
      <div className="bg-gradient-to-r from-[#5b468a]/10 to-blue-100 p-4 rounded-2xl border border-[#5b468a]/20">
        <p className="text-sm text-gray-700 text-center">
          <span className="font-bold">KIIS</span> - Kesatuan
          Integrated Information System
        </p>
        <p className="text-xs text-gray-600 text-center mt-1">
          © 2026 Institut Bisnis dan Informatika Kesatuan
        </p>
      </div>

      {/* Spacer for bottom nav */}
      <div className="h-20"></div>
    </>
  );
}
