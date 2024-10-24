"use client"

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
    interface StrengthState  {
        uppercase : boolean,
        lowercase : boolean,
        number : boolean,
        specialChar : boolean,
        length : boolean,
    }
    const [password , setPassword] = useState("");
    const [strength, setStrength] = useState(0);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [confirmShowPassword, setConfirmShowPassword] = useState<boolean>(false);


    const updatedStrength : StrengthState  = {
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        specialChar: /[^A-Za-z0-9]/.test(password),
        length: password.length >= 6,
      };
    const evaluatePasswordStrength = () => {
        let strengthValue = 0;

       
        console.log(updatedStrength)

        if (updatedStrength.uppercase) {
            strengthValue += 1;
        };
        if (updatedStrength.lowercase) {
            strengthValue += 1
        };
        if (updatedStrength.number) {
            strengthValue += 1
        };
        if (updatedStrength.specialChar) {
            strengthValue += 1
        };
        if (updatedStrength.length) {
            strengthValue += 1;
        };
        if (updatedStrength.length) {
            strengthValue += 1;
        };
        setStrength(strengthValue)
    }
    const handlePasswordChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        evaluatePasswordStrength();
      };
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
          <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
            <div className="mb-12">
              <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
            </div>
            <div className="space-y-6">
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Enter your name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Enter email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      fill="none"
                      strokeMiterlimit={10}
                      strokeWidth={40}
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    />
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" />
                  </g>
                </svg>
              </div>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Enter password"
                />
               <button type="button" onClick={()=>setShowPassword(!showPassword)} className="w-[18px] h-[18px] absolute right-2 cursor-pointer">
                    {showPassword ? <FaEyeSlash className="text-xl text-black" /> : <FaEye className="text-xl text-black" />
                    }
                </button>
              </div>
              <div className="relative flex items-center">
                <input
                  name="confirmPassword"
                  type={confirmShowPassword ? "text" : "password"}
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                  placeholder="Confirm password"
                />
                <button  type="button" onClick={()=>setConfirmShowPassword(!confirmShowPassword)} className="w-[18px] h-[18px] absolute right-2 cursor-pointer">
                    {confirmShowPassword ? <FaEyeSlash className="text-xl text-black" /> : <FaEye className="text-xl text-black" />
                    }
                </button>
              </div>
            </div>
              <div className="mt-2 grid grid-cols-5 gap-5">
              <div className="bg-gray-200 h-2 rounded-full">
                <div
                  className={`h-2  rounded-full ${
                    updatedStrength.lowercase ? 'bg-green-500 ' :
                    'bg-gray-300'
                  }`}
                ></div>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div
                  className={`h-2  rounded-full ${
                    updatedStrength.uppercase ? 'bg-green-500' :
                    'bg-gray-300'
                  }`}
                ></div>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div
                  className={`h-2  rounded-full ${
                    updatedStrength.number ? 'bg-green-500 ' :
                    'bg-gray-300'
                  }`}
                ></div>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div
                  className={`h-2  rounded-full ${
                    updatedStrength.specialChar ? 'bg-green-500' :
                    'bg-gray-300'
                  }`}
                ></div>
              </div>
              <div className="bg-gray-200 h-2 rounded-full">
                <div
                  className={`h-2  rounded-full ${
                    updatedStrength.length ? 'bg-green-500 ' :
                    'bg-gray-300'
                  }`}
                ></div>
              </div>
              <p className={`text-sm whitespace-nowrap mt-1 text-gray-600 ${password.length === 0 ? "hidden " : ""}`}>
                {strength === 1 && "Too Weak"}
                {strength === 2 && "Weak"}
                {strength === 3 && "Medium"}
                {strength === 4 && "Strong"}
                {strength === 5 && "Very Strong"}
              </p>
            </div>
            <div className="flex items-center mt-6">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 shrink-0 rounded"
              />
              <label
                htmlFor="agree-terms"
                className="ml-3 block text-sm text-gray-800"
              >
                I agree to the{" "}
                <a href="/terms" className="text-blue-600 font-semibold hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
              >
                Register
              </button>
              <p className="text-gray-800 text-sm text-center mt-6">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
    );
};

export default RegisterPage;