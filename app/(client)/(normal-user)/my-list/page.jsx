import getMyList from "@/app/_actions/getMyList";
import UserGameListDisplayUI from "@/app/_components/UserGameListDisplayUI/UserGameListDisplayUI";
import UserSidebar from "@/app/_components/UserSlidebar/UserSlidebar";

export default async function MyList() {
    const userMyListDoc = await getMyList()
    const userMyListDocJSON = userMyListDoc ? JSON.stringify(userMyListDoc?.games) : ""
    
    return (
        <div className="flex">
            {/* Sidebar */}
            <UserSidebar />

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-6">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Saved Games</h1>
                <div>
                    <UserGameListDisplayUI games={ userMyListDocJSON } />
                </div>
            </main>
        </div>
    )
}