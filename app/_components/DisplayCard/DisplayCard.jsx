'use client'

import saveGameInUserMyList from "./actions";

export default function DisplayCard({ gameId, coverUrl, gameTitle }) {
    /**
     * saveGameInUserMyList server action method needs to know about gameId when user click the game for
     * store in the database, for that we needs to pass gameId as an additional argument.
     */
    const saveGameInUserMyListWithGameId = saveGameInUserMyList.bind(null, gameId)
    
    return (
        <form action={saveGameInUserMyListWithGameId}>
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
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
}
