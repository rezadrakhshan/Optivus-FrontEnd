import { Outlet } from "react-router-dom";

import Header from "../components/dashboard/Header";

export default function DashboardLayout() {
    return (
        <main className="min-h-screen bg-zinc-950">
            <Header />

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </main>
    );
}