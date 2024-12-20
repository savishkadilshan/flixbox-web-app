'use client'

export default function DisplayCard({ coverUrl, gameTitle }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
                src={coverUrl}
                alt={gameTitle}
                className="w-full h-auto object-cover"
            />

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {gameTitle}
                </h3>
            </div>
        </div>
    );
}
