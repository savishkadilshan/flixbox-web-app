'use client'

import { useEffect, useState } from "react";
import { checkGameIsSaved, saveAndUpdateMyList } from "./actions";

export default function DisplayCard({ gameId, coverUrl, gameTitle }) {
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        async function updateUIGameIsSaved() {
            try {
                const gameIsSaved = await checkGameIsSaved(gameId)
                if (gameIsSaved) {
                    setIsSaved(true)
                }
            } catch (error) {
                console.log("There is some error: ", error)
            }
        } 

        updateUIGameIsSaved()
    }, [gameId]);

    const handleButtonSubmit = async () => {
        try {
            await saveAndUpdateMyList(gameId)
            setIsSaved(!isSaved)
        } catch (error) {
            console.log("There is some error with button handling. Error: ", error)
        }
    }

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
                <button
                    type="button"
                    onClick={handleButtonSubmit}
                    className={`px-4 py-2 rounded ${isSaved ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}
                >
                    {isSaved ? 'Saved' : 'Save'}
                </button>
            </div>
        </div>
    );
}
