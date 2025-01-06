'use client'

import DisplayCard from "../DisplayCard/DisplayCard"

export default function UserGameListSidebar({ games }) {
    /**
     * In the parent component pass games as a JSON string. This JSON string
     * is need to convert to an object again.
     * games (JSON string) -> gamesObj (object)
     */
    const gamesObj = JSON.parse(games)

    /**
     * gamesObj is need to be convert to an array for use map function
     * to iterate key and values of the gamesObj.
     * gamesObj (object) -> gamesArray (array)
     */
    const gamesArray = Object.values(gamesObj)
    
    return (
        <div className="flex-1">
            <div className="flex flex-wrap gap-3">
                {gamesArray.map((game) => (
                    <div key={game.gameId} className="w-32">
                        <DisplayCard gameId={game.gameId} coverUrl={game.coverUrl} gameTitle={game.gameTitle} />
                    </div>
                ))}
            </div>
        </div>
    )
}