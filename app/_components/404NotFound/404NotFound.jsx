'use client'

import { useRouter } from "next/navigation";

export default function NotFoundPage() {
    const router = useRouter()
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                {/* 404 Title */}
                <h1 className="text-6xl font-bold text-orange-500">404</h1>
                <p className="mt-4 text-xl text-gray-700">
                    Oops! The page you're looking for doesn't exist.
                </p>

                {/* Home Button */}
                <button
                    onClick={() => router.push("/")}
                    className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
}