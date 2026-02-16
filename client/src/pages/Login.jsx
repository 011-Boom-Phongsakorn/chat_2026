import { useState } from "react";
// 1. อย่าลืม import motion เข้ามาที่ด้านบนของไฟล์
import { motion } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans relative">
      {/* --- คอลัมน์ซ้าย: ฟอร์ม Login --- */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 bg-[#181c23] pt-24 lg:pt-6">
        <div className="w-full max-w-sm">
          {/* หัวข้อฟอร์ม */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-[#ff7b5c]/10 flex items-center justify-center rounded-2xl mb-5 shadow-sm">
              {/* <MessageSquare className="w-6 h-6 text-[#ff7b5c]" /> */}
            </div>
            <h1 className="text-2xl font-semibold text-white mb-1.5">
              Welcome Back
            </h1>
            <p className="text-sm text-slate-400">Sign in to your account</p>
          </div>

          {/* ฟอร์ม */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* อีเมล */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#1e232b] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#ff7b5c] focus:ring-1 focus:ring-[#ff7b5c] transition-colors"
              />
            </div>

            {/* รหัสผ่าน */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-[#1e232b] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#ff7b5c] focus:ring-1 focus:ring-[#ff7b5c] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                >
                  {/* {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )} */}
                </button>
              </div>
            </div>

            {/* ปุ่ม Sign in */}
            <button
              type="submit"
              className="w-full bg-[#ff7b5c] hover:bg-[#ff6a47] text-white font-medium py-3 rounded-lg transition-colors mt-2"
            >
              Sign in
            </button>
          </form>

          {/* ลิงก์สร้างบัญชี */}
          <p className="text-center text-sm text-slate-400 mt-8">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-[#ff7b5c] hover:underline font-medium ml-1"
            >
              Create account
            </a>
          </p>
        </div>
      </div>

      {/* --- คอลัมน์ขวา: พื้นที่ตกแต่ง (ซ่อนในจอมือถือ, แสดงในหน้าจอใหญ่) --- */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center bg-[#13161b] p-12">
        {/* Grid พื้นหลัง 3x3 */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[...Array(9)].map((_, i) => (
            <motion.div // 2. เปลี่ยนจาก div ธรรมดาเป็น motion.div
              key={i}
              className="w-24 h-24 rounded-2xl shadow-sm"
              // 3. กำหนดค่า Animation (วิ่งไล่สี และขยายขนาดนิดหน่อยให้ดูมีมิติ)
              animate={{
                backgroundColor: [
                  "#1a1d24",
                  "rgba(255, 123, 92, 0.25)",
                  "#1a1d24",
                ],
                scale: [1, 1.05, 1], // ลบส่วนนี้ออกได้ถ้าไม่อยากให้มันเด้งขยาย
              }}
              // 4. ตั้งค่าความเร็วและระยะเวลาหน่วง (Delay)
              transition={{
                duration: 3, // ใช้เวลา 3 วินาทีต่อ 1 รอบ
                repeat: Infinity, // เล่นวนลูปไปเรื่อยๆ ไม่มีที่สิ้นสุด
                ease: "easeInOut", // จังหวะเข้า-ออกนุ่มนวล
                delay: i * 0.2, // **จุดสำคัญ:** เอา index (i) มาคูณ 0.2 วินาที เพื่อให้มันเริ่มไม่พร้อมกัน (วิ่งไล่กัน)
              }}
            />
          ))}
        </div>

        {/* ข้อความต้อนรับด้านขวา */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          Welcome back!
        </h2>
        <p className="text-slate-400 text-center max-w-[320px] leading-relaxed">
          Sign in to continue your conversations and catch up with your
          messages.
        </p>
      </div>
    </div>
  );
};

export default Login;
