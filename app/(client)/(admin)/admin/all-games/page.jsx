import getGameDetails from "@/app/_actions/getGameDetails";
import AdminAllGameDisplay from "@/app/_components/AdminAllGameDisplay/AdminAllGameDisplay";
import Sidebar from "@/app/_components/Sidebar/Sidebar";

export default async function AllGamesPage() {
  const gameDetails = await getGameDetails()

  /**
   * gameDetail variable needs convert to JSON string, because plain object
   * should be pass for component prop.
   * gameDetails (array object) -> gameDetailsJson (JSON string)
   */
  const gameDetailsJson = JSON.stringify(gameDetails)
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          All the added games
        </h1>
        <AdminAllGameDisplay gameData={gameDetailsJson} />
      </main>
    </div>
  );
}
