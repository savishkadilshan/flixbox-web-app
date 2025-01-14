'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans bg-gray-100 text-gray-800">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {/* Error Heading */}
                <h2 className="text-2xl font-bold text-red-600">
                    Something went wrong!
                </h2>

                {/* Reset Button */}
                <button
                    onClick={() => reset()}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none transition duration-300"
                >
                    Try Again
                </button>
            </main>
        </div>
    );
}
