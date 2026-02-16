import React, { useState } from "react";
import { MessageSquare, Settings, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans relative bg-[#181c23]">
      {/* --- คอลัมน์ซ้าย: ฟอร์ม Create Account --- */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 pt-24 lg:pt-6">
        <div className="w-full max-w-sm">
          {/* หัวข้อฟอร์ม */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-[#ff7b5c]/10 flex items-center justify-center rounded-2xl mb-5 shadow-sm">
              <MessageSquare className="w-6 h-6 text-[#ff7b5c]" />
            </div>
            <h1 className="text-2xl font-semibold text-white mb-1.5">
              Create Account
            </h1>
            <p className="text-sm text-slate-400">
              Get started with your free account
            </p>
          </div>

          {/* ฟอร์ม */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* ชื่อเต็ม (Full Name) */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#1e232b] border border-white/5 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#ff7b5c] focus:ring-1 focus:ring-[#ff7b5c] transition-colors"
              />
            </div>

            {/* อีเมล */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
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
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
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
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* ปุ่ม Create Account */}
            <button
              type="submit"
              className="w-full bg-[#ff7b5c] hover:bg-[#ff6a47] text-white font-medium py-3 rounded-lg transition-colors mt-4"
            >
              Create Account
            </button>
          </form>

          {/* ลิงก์กลับไปหน้า Login */}
          <p className="text-center text-sm text-slate-400 mt-8">
            Already have an account?{" "}
            <a
              href="#"
              className="text-[#ff7b5c] hover:underline font-medium ml-1"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* --- คอลัมน์ขวา: พื้นที่ตกแต่ง (Framer Motion Grid) --- */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center bg-[#13161b] p-12">
        {/* Animated Grid พื้นหลัง 3x3 */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="w-24 h-24 rounded-2xl shadow-sm"
              animate={{
                backgroundColor: [
                  "#1a1d24",
                  "rgba(255, 123, 92, 0.25)",
                  "#1a1d24",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2, // สร้างเอฟเฟกต์วิ่งไล่สี
              }}
            />
          ))}
        </div>

        {/* ข้อความชวนเข้าร่วมด้านขวา */}
        <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">
          Join our community
        </h2>
        <p className="text-slate-400 text-center max-w-[360px] leading-relaxed">
          Connect with friends, share moments, and stay in touch with your loved
          ones.
        </p>
      </div>
    </div>
  );
};

export default Register;
