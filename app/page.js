import { Suspense } from "react";
import getGameDetails from "./_actions/getGameDetails";
import MainGameShowcaseUI from "./_components/MainGameShowcaseUI/MainGameShowcaseUI";
import UserGameListSidebar from "./_components/UserGameListSidebar/UserGameListSidebar";

export default async function Home() {
  const gameDetails = await getGameDetails()

  /**
   * gameDetail variable needs convert to JSON string, because plain object
   * should be pass for component prop.
   * gameDetails (array object) -> gameDetailsJson (JSON string)
   */
  const gameDetailsJson = JSON.stringify(gameDetails)

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex">
        <Suspense fallback={<div>Loading...</div>}>
          <UserGameListSidebar />
          <MainGameShowcaseUI gameData={gameDetailsJson} />
        </Suspense>
      </main>
    </div>
  );
}
