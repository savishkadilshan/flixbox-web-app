import Sidebar from "@/app/_components/Sidebar/Sidebar";
import GameUploadForm from "@/app/_components/GameUploadForm/GameUploadForm";

export default function AdminHome() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Panel</h1>
          <div>
            {/* Upload form */}
            <GameUploadForm />
          </div>
      </main>
    </div>
  );
}
