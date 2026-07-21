import { Outlet } from "react-router-dom";

import Navigation from "../components/navigation/Navigation";

export default function DashboardLayout() {
    return (
        <main className="min-h-screen bg-zinc-950">
            <Navigation />

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </main>
    );
}