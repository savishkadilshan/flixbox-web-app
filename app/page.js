import UserSidebar from "./_components/UserSlidebar/UserSlidebar";
import SearchBar from "./_components/SearchBar/SearchBar";
import fetchGamesByQuery from "./_actions/fetchGamesByQuery";
import DisplayCard from "./_components/DisplayCard/DisplayCard";

export default async function Home({ searchParams }) {
  const { query = "" } = await searchParams;

  // cleaning and normalizing data
  const returnedGames = Object.values(
    JSON.parse(JSON.stringify(await fetchGamesByQuery(query)))
  );

  return (
    <div className="flex">
      {/* Sidebar */}
      <UserSidebar />

      <main className="flex-1 bg-gray-100 p-6">
        <SearchBar />

        <div className="flex-1">
          <div className="flex flex-wrap gap-3">
            {returnedGames.map((game) => (
              <div key={game._id} className="w-32">
                <DisplayCard
                  gameId={game._id}
                  coverUrl={game.coverUrl}
                  gameTitle={game.gameTitle}
                />
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
