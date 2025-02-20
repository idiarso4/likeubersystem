import StatsCards from "@/components/admin/dashboard/StatsCards";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import PopularItems from "@/components/admin/dashboard/PopularItems";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <StatsCards />

      <div className="grid gap-6 md:grid-cols-2">
        <RevenueChart />
        <PopularItems />
      </div>
    </div>
  );
};

export default Dashboard;
