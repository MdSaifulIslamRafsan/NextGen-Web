"use client"

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const VerifyEmail: React.FC = () => {
  
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const router = useRouter();
  const handleResendEmail = async() => {
    try {
        const response = await axios(
          `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email/api?token=${token}`
        );
        if (response.data.message === "Email verified successfully") {
          router.push("/login");
        }
      } catch (error: unknown) {
        throw new Error(error);
      }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full text-center animate__animated animate__fadeIn animate__faster">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 animate__animated animate__bounceIn">Verify Your Email</h1>
        <p className="text-gray-600 mb-8">
          We've sent a verification link to your email address. Please check your inbox and click on the link to verify your email.
        </p>
        <div className="flex flex-col items-center">
          <button
            onClick={handleResendEmail}
            className="px-6 py-3 mb-4 bg-blue-500 text-white font-semibold rounded-full shadow hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate__animated animate__pulse animate__infinite"
          >
             Verify now
          </button>
          <button
           onClick={() => router.push("/")}
            className="text-blue-500 hover:underline focus:outline-none transition duration-300 ease-in-out"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
