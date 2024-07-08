import React, { useState } from "react";

export default function AuthPage() {
  const [view, setView] = useState("login");

  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <div
        className={`flex flex-col items-center pt-8 ${
          view === "forgot" && "hidden"
        }`}
      >
        <h2 className="text-5xl sm:text-[70px]">
          Welcome to <br />
        </h2>
        <h2 className="text-7xl sm:text-[106px] font-bold">Nimbus</h2>
      </div>

      <div className="flex items-center justify-center h-full">
        {view === "login" && (
          <div className="p-8 max-w-md w-full bg-black">
            <h2 className="text-3xl md:text-[40px] font-bold py-4 sm:py-8">
              Login
            </h2>

            <form>
              <div className="mb-4">
                <label className="block text-[16px]">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border-b border-[#ffffff] bg-inherit text-white py-1"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[16px]">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border-b border-[#ffffff] bg-inherit text-white py-1"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-gray-100 rounded text-black hover:bg-gray-500 hover:text-white duration-200"
              >
                Log In
              </button>
              <p className="mt-4 text-center font-light">
                Don't have an account{" "}
                <button
                  type="button"
                  onClick={() => setView("signup")}
                  className="text-blue-500 sm:text-white hover:text-blue-500 font-bold duration-300"
                >
                  Sign Up
                </button>
              </p>
              <p className="text-center font-light">
                Forgot password{" "}
                <button
                  type="button"
                  onClick={() => setView("forgot")}
                  className="text-blue-500 sm:text-white hover:text-blue-500 font-bold duration-300"
                >
                  Reset
                </button>
              </p>
            </form>
          </div>
        )}

        {view === "signup" && (
          <div className="p-8 max-w-md w-full space-y-8">
            <h2 className="mb-6 text-3xl font-bold">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label className="block">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full py-1 bg-inherit border-b border-white text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full py-1 bg-inherit border-b border-white text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-1 bg-inherit border-b border-white text-white"
                />
              </div>
              <div className="mb-6">
                <label className="block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full py-1 bg-inherit border-b border-white text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-gray-100 rounded text-black hover:bg-gray-500 hover:text-white duration-200"
              >
                Sign Up
              </button>
              <p className="mt-4 text-center font-light">
                Already have an account{" "}
                <button
                  type="button"
                  onClick={() => setView("login")}
                  className="text-blue-500 sm:text-white hover:text-blue-500 font-bold duration-300"
                >
                  Log In
                </button>
              </p>
            </form>
          </div>
        )}

        {view === "forgot" && (
          <div className="p-8  max-w-md w-full space-y-8 pt-8 sm:pt-20">
            <h2 className="mb-6 text-3xl font-bold">OTP Verification</h2>
            <form>
              <div className="mb-6">
                <label className="block">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full py-1 bg-inherit border-b border-white text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-gray-100 rounded text-black hover:bg-gray-500 hover:text-white duration-200"
              >
                Send Reset Link
              </button>
              <p className="mt-4 text-center font-light">
                Remembered your password{" "}
                <button
                  type="button"
                  onClick={() => setView("login")}
                  className="text-blue-500 sm:text-white hover:text-blue-500 font-bold duration-300"
                >
                  Log In
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
