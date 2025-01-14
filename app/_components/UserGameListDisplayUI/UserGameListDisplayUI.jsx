'use client'

import DisplayCard from "../DisplayCard/DisplayCard"

export default function UserGameListDisplayUI({ games }) {
    const gamesArray = games ? Object.values(JSON.parse(games)) : null

    return (
        <div className="flex-1">
            <div className="flex flex-wrap gap-3">
                {gamesArray && gamesArray.length > 0 ? (
                    gamesArray.map((game) => (
                        <div key={game.gameId} className="w-32">
                            <DisplayCard
                                gameId={game.gameId}
                                coverUrl={game.coverUrl}
                                gameTitle={game.gameTitle}
                            />
                        </div>
                    ))
                ) : (
                    <p>
                        No games in your list.
                        <br />
                        Add some games you wish to play.
                    </p>
                )}
            </div>
        </div>
    )
}