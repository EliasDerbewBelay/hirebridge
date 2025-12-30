import DashboardOverview from "@/components/company/dashboard/DashboardOverview";
import StatsGrid from "@/components/company/dashboard/StatsGrid";
import RecentActivity from "@/components/company/dashboard/RecentActivity";
import TeamMembers from "@/components/company/dashboard/TeamMembers";
import QuickActions from "@/components/company/dashboard/QuickActions";
import HiringPipeline from "@/components/company/dashboard/HiringPipeline";

export default function page() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <DashboardOverview />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatsGrid />
        <div className="lg:col-span-2">
          <HiringPipeline />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <TeamMembers />
      </div>

      <QuickActions />
    </div>
  );
}
