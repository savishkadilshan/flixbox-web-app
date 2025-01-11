'use client'

import { gameUpload } from "./actions"

export default function GameUploadForm() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload New Game</h2>
            <form className="space-y-4" action={gameUpload}>
                {/* Game Title */}
                <div>
                    <label
                        htmlFor="game-title"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Game Title
                    </label>
                    <input
                        type="text"
                        name="game-title"
                        id="game-title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Far Cry, Call of Duty..."
                        required
                    />
                </div>

                {/* Upload Game Cover */}
                <div>
                    <label
                        htmlFor="upload-img"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Upload Game Cover
                    </label>
                    <input
                        type="file"
                        name="upload-img"
                        id="upload-img"
                        accept="image/png, image/jpeg, image/webp"
                        className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none file:bg-orange-500 file:text-white file:px-4 file:py-2 file:border-0 hover:file:bg-orange-600"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 font-medium"
                >
                    Add Game
                </button>
            </form>
        </div>
    )
}
