"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

interface Inputs {
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  interface StrengthState {
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    specialChar: boolean;
    length: boolean;
  }
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmShowPassword, setConfirmShowPassword] =
    useState<boolean>(false);


  const updatedStrength: StrengthState = {
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[^A-Za-z0-9]/.test(password),
    length: password.length >= 6,
  };
  

  useEffect(() => {
    const evaluatePasswordStrength = () => {
      let strengthValue = 0;
  
      if (updatedStrength.uppercase) {
        strengthValue += 1;
      }
      if (updatedStrength.lowercase) {
        strengthValue += 1;
      }
      if (updatedStrength.number) {
        strengthValue += 1;
      }
      if (updatedStrength.specialChar) {
        strengthValue += 1;
      }
      if (updatedStrength.length) {
        strengthValue += 1;
      }
      setStrength(strengthValue);
    };
    evaluatePasswordStrength();
}, [password, updatedStrength.length, updatedStrength.lowercase, updatedStrength.number, updatedStrength.specialChar,  updatedStrength.uppercase])


const [passwordDonotMatch, setPasswordDonotMatch] = useState("");
  

 

  return (
    <div
      className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
      style={{
        backgroundImage: "url(https://readymadeui.com/background-image.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-md w-full mx-auto">
        <form
          
          className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
        >
          <div className="mb-12">
            <h3 className="text-gray-800 text-3xl font-extrabold">Reset Password</h3>
            <p className="text-gray-800 mt-3">Enter your new password.</p>
          </div>
          <div className="space-y-6">
            <div className="relative flex items-center">
              <input
               
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-xl text-black" />
                ) : (
                  <FaEye className="text-xl text-black" />
                )}
              </button>
            </div>
            <div className="relative flex items-center">
              <input
                onChange={(e) => setconfirmPassword(e.target.value)}
                type={confirmShowPassword ? "text" : "password"}
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setConfirmShowPassword(!confirmShowPassword)}
                className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
              >
                {confirmShowPassword ? (
                  <FaEyeSlash className="text-xl text-black" />
                ) : (
                  <FaEye className="text-xl text-black" />
                )}
              </button>
            </div>
            {passwordDonotMatch && <p className="font-normal text-red-600">{passwordDonotMatch}</p>}
          </div>
          <div className="mt-2 grid grid-cols-5 gap-5">
            <div className="bg-gray-200 h-2 rounded-full">
              <div
                className={`h-2  rounded-full ${
                  updatedStrength.lowercase ? "bg-green-500 " : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="bg-gray-200 h-2 rounded-full">
              <div
                className={`h-2  rounded-full ${
                  updatedStrength.uppercase ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="bg-gray-200 h-2 rounded-full">
              <div
                className={`h-2  rounded-full ${
                  updatedStrength.number ? "bg-green-500 " : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="bg-gray-200 h-2 rounded-full">
              <div
                className={`h-2  rounded-full ${
                  updatedStrength.specialChar ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="bg-gray-200 h-2 rounded-full">
              <div
                className={`h-2  rounded-full ${
                  updatedStrength.length ? "bg-green-500 " : "bg-gray-300"
                }`}
              ></div>
            </div>
            <p
              className={`text-sm whitespace-nowrap mt-1 text-gray-600 ${
                password.length === 0 ? "hidden " : ""
              }`}
            >
              {strength === 1 && "Too Weak"}
              {strength === 2 && "Weak"}
              {strength === 3 && "Medium"}
              {strength === 4 && "Strong"}
              {strength === 5 && "Very Strong"}
            </p>
          </div>
          
         
          <div className="text-black mt-2">
            <p>Password must fulfill the following criteria:</p>
            <ul>
              <li>Lowercase: {updatedStrength.lowercase ? "✔️" : "❌"}</li>
              <li>Uppercase: {updatedStrength.uppercase ? "✔️" : "❌"}</li>
              <li>Number: {updatedStrength.number ? "✔️" : "❌"}</li>
              <li>
                Special Character: {updatedStrength.specialChar ? "✔️" : "❌"}
              </li>
              <li>Length ≥ 6: {updatedStrength.length ? "✔️" : "❌"}</li>
            </ul>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
            >
              Reset Password
            </button>
            <div className="text-center mt-6">
            <Link href="/login">
              <span className="text-blue-600 text-sm font-semibold hover:underline">
                Back to Login
              </span>
            </Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
