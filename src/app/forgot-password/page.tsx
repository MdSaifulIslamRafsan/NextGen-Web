"use client";

import axios from "axios";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
interface Inputs {
    email: string;
}
type ErrorMessage = {
  message: string;
}

const ForgetPasswordPage = () => {
    const { register, handleSubmit,  formState: { errors }, } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
      try {
       const res = await axios.post('/forgot-password/api', data);
       if(res.data.status === 200){
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Password reset link sent! Check your email.",
        });
       }
       else{
        Swal.fire({
          icon: "error",
          title: "Error",
          text: res.data.message,
        });
       }
      } catch (error : unknown) {
          console.log((error as ErrorMessage).message);
        
      }
     
    }
 

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
        onSubmit={handleSubmit(onSubmit)}
          className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
        >
          <div className="mb-12">
            <h3 className="text-gray-800 text-3xl font-extrabold">
              Forgot Password
            </h3>
            <p className="text-gray-600 mt-2">
              Enter your email to receive a reset link.
            </p>
          </div>
        
              <div className="relative flex items-center mb-4">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
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
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit={10}
                      strokeWidth={40}
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    />
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    />
                  </g>
                </svg>
              </div>
              {errors.email && (
                <p className="text-red-600 mb-4 text-sm">{errors.email.message}</p>
              )}
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none"
              >
                Send Reset Link
              </button>
            
          <div className="text-center mt-6">
            <Link href="/login">
              <span className="text-blue-600 text-sm font-semibold hover:underline">
                Back to Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
