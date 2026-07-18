import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatsGrid from "../../components/dashboard/StatsGrid";
import RecentActivities from "../../components/dashboard/RecentActivities";
import LeadsChart from "../../components/dashboard/LeadsChart";

export default function Home() {
    return (
        <div className="space-y-6">
            <WelcomeCard />

            <StatsGrid />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <RecentActivities />

                <LeadsChart />
            </div>
        </div>
    );
}