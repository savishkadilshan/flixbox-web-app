'use client'

import DisplayCard from "../DisplayCard/DisplayCard"

export default function MainGameShowcaseUI({gameData}) {
    /**
     * In the parent component pass gameData as a JSON string. This JSON string
     * is need to convert to an object again.
     * gameData (JSON string) -> gameDataObj (object)
     */
    const gameDataObj = JSON.parse(gameData)
    
    /**
     * gameDataObj is need to be convert to an array for use map function
     * to iterate key and values of the gameDataObj.
     * gameDataObj (object) -> gameDataArray (array)
     */
    const gameDataArray = Object.values(gameDataObj)

    return (
        <div className="flex-1">
            <div>
                Newly added games
            </div>
            <div className="flex flex-wrap gap-3">
                {gameDataArray.map((game) => (
                    <div key={game._id} className="w-1/5">
                        <DisplayCard gameId={game._id} coverUrl={game.coverUrl} gameTitle={game.gameTitle} />
                    </div>
                ))}
            </div>
        </div>
    )
}