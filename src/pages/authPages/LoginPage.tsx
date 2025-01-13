import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
// import { useQueries, useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/authAPIs";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}


const LoginPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser({ email: formData.email, password: formData.password });
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-700/25 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
          
          <h2 className="text-2xl text-white text-center font-semibold mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-400">
              Sing up
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email address"
                className="w-full bg-black text-white rounded-lg pl-10 pr-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-black text-white rounded-lg pl-10 pr-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-700" />
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-700" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-3 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M18.71 19.5c-.83.64-2.01 1.39-3.47 1.39-3.29 0-6.29-2.68-6.29-6.38 0-3.87 2.63-6.38 6.29-6.38 1.32 0 2.46.32 3.39.94v2.02c-.56-.48-1.67-.94-2.81-.94-2.19 0-3.72 1.85-3.72 4.13 0 2.35 1.58 4.13 3.72 4.13.8 0 1.53-.21 2.09-.55v-2.9h-2.92v-1.99h5.5v6.53z"
                />
              </svg>
            </button>
            <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-3 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </button>
            <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-3 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
