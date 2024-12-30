import { Suspense } from "react";
import getGameDetails from "./_actions/getGameDetails";
import MainGameShowcaseUI from "./_components/MainGameShowcaseUI/MainGameShowcaseUI";
import UserSidebar from "./_components/UserSlidebar/UserSlidebar";

export default async function Home() {
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
      <UserSidebar />

      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">New Added Games</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <MainGameShowcaseUI gameData={gameDetailsJson} />
        </Suspense>
      </main>
    </div>
  );
}
