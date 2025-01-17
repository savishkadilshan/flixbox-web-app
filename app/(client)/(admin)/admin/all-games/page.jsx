import getGameDetails from "@/app/_actions/getGameDetails";
import AdminAllGameDisplay from "@/app/_components/AdminAllGameDisplay/AdminAllGameDisplay";

export default async function AllGamesPage() {
  // const gameDetails = await getGameDetails()

  // /**
  //  * gameDetail variable needs convert to JSON string, because plain object
  //  * should be pass for component prop.
  //  * gameDetails (array object) -> gameDetailsJson (JSON string)
  //  */
  // const gameDetailsJson = JSON.stringify(gameDetails)

  return (
      <main className="bg-gray-100 p-6">
        {/* <AdminAllGameDisplay gameData={gameDetailsJson} /> */}
        <p>This page is still developing.</p>
      </main>
  );
}
