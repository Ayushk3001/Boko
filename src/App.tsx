import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hotel, Mail, Phone, Lock, User, ArrowRight } from 'lucide-react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isOTP, setIsOTP] = useState(false);

  const flipVariants = {
    enter: {
      rotateY: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      rotateY: 180,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Hotel className="w-12 h-12 mx-auto text-blue-600" />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">Hotel OS</h1>
          {/* <p className="text-gray-600 mt-2">Streamlined Hotel Management</p> */}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative perspective-1000">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login"
                variants={flipVariants}
                initial="exit"
                animate="enter"
                exit="exit"
                className="p-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome Back</h2>
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                    Login <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="mt-6 text-center text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                variants={flipVariants}
                initial="exit"
                animate="enter"
                exit="exit"
                className="p-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Account</h2>
                {!isOTP ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <button
                      onClick={() => setIsOTP(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      Send OTP <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm text-center">
                      Enter the OTP sent to your email and phone
                    </p>
                    <div className="flex gap-2 justify-center">
                      {[...Array(6)].map((_, i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-12 h-12 text-center border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg font-semibold"
                        />
                      ))}
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                      Verify & Create Account <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
                <p className="mt-6 text-center text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => {
                      setIsLogin(true);
                      setIsOTP(false);
                    }}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Login
                  </button>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;