import Sidebar from "@/app/_components/Sidebar/Sidebar";

export default function AllGamesPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          All the added games
        </h1>
      </main>
    </div>
  );
}
