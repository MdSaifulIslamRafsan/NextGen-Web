import Link from 'next/link';

export default function Error() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
      <h1 className="text-9xl font-extrabold text-blue-600 animate-bounce">404</h1>
      <p className="text-2xl text-gray-700 mt-4 animate-fade-in">
        Oops! The page {`you're`} looking for{` isn't`} available.
      </p>
        <Link href="/" className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 ease-in-out">
          Go Back Home
        </Link>
    </div>
  );
}
