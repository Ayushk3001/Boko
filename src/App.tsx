import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isOTP, setIsOTP] = useState(false);
  const [phone, setPhone] = useState('');
  const otpInputs = useRef([]);

  const handleOTPChange = (index, value) => {
    if (value.length === 1 && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

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
          <img src="https://i.postimg.cc/RCD4k91t/boko.jpg" alt="Boko Logo" className="w-12 h-12 mx-auto" />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">Boko</h1>
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
                    <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}
                      defaultCountry="IN"
                      international
                      withCountryCallingCode
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
                      <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone}
                        defaultCountry="IN"
                        international
                        withCountryCallingCode
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
                      Enter the OTP sent to your phone
                    </p>
                    <div className="flex gap-2 justify-center">
                      {[...Array(6)].map((_, i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          ref={(el) => (otpInputs.current[i] = el)}
                          onChange={(e) => handleOTPChange(i, e.target.value)}
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
