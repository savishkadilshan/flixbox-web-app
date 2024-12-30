import UserGameListSidebar from "@/app/_components/UserGameListSidebar/UserGameListSidebar";
import UserSidebar from "@/app/_components/UserSlidebar/UserSlidebar";

export default async function MyList() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <UserSidebar />

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-6">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Saved Games</h1>
                <div>
                    <UserGameListSidebar />
                </div>
            </main>
        </div>
    )
}