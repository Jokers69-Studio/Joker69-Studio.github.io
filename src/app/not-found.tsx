import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-purple-500 mb-4">404</h2>
        <h3 className="text-2xl font-bold text-white mb-4">Page Not Found</h3>
        <p className="text-gray-300 mb-4">
          Could not find the requested resource
        </p>
        <Link
          href="/"
          className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
