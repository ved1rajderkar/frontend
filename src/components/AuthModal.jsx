import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import useAuthStore from "../store/authStore";

const AuthModal = () => {
  const { isModalOpen, toggleModal, login, signup, loginWithGoogle, loading } = useAuthStore();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: ""
  });

  if (!isModalOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        toast.success("Welcome back!");
      } else {
        if (formData.password !== formData.confirmPassword) {
          return toast.error("Passwords do not match");
        }
        await signup(formData.email, formData.password, formData.displayName);
        toast.success("Account created successfully!");
      }
      toggleModal();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      toggleModal();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-violet-500/20 bg-zinc-900/90 shadow-2xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
            >
              <FaTimes size={20} />
            </button>

            <div className="p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h2>
                <p className="mt-2 text-gray-400">
                  {isLogin ? "Sign in to your account" : "Join the ZenkaiDrive community"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      name="displayName"
                      type="text"
                      placeholder="Display Name"
                      required
                      value={formData.displayName}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-violet-500/10 bg-zinc-800/50 py-3 pl-12 pr-4 outline-none transition-all focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                    />
                  </div>
                )}

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-violet-500/10 bg-zinc-800/50 py-3 pl-12 pr-4 outline-none transition-all focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                  />
                </div>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-violet-500/10 bg-zinc-800/50 py-3 pl-12 pr-4 outline-none transition-all focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                  />
                </div>

                {!isLogin && (
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-violet-500/10 bg-zinc-800/50 py-3 pl-12 pr-4 outline-none transition-all focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 py-3 font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? "Processing..." : isLogin ? "Sign In" : "Sign Up"}
                </button>
              </form>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-zinc-800" />
                <span className="text-sm text-gray-500">OR</span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>

              <button
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 py-3 text-white transition-all hover:bg-zinc-800"
              >
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>

              <p className="mt-8 text-center text-sm text-gray-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  {isLogin ? "Sign up now" : "Sign in here"}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
