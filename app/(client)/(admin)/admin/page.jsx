import Sidebar from "@/app/_components/Sidebar/Sidebar";

export default function AdminHome() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to FlixBox Admin Panel
        </h1>
        <p className="mt-4 text-gray-600">Manage your games and more.</p>
      </main>
    </div>
  );
}
