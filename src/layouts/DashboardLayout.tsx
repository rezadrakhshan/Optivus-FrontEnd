import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 p-4">Header</header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
