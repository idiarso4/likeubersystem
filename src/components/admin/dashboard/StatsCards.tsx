import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Store, ShoppingBag, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$15,231.89",
    icon: DollarSign,
    change: "+20.1%",
    trend: "up",
  },
  {
    title: "Total Orders",
    value: "1,429",
    icon: ShoppingBag,
    change: "+8.2%",
    trend: "up",
  },
  {
    title: "Active Restaurants",
    value: "24",
    icon: Store,
    change: "+12.5%",
    trend: "up",
  },
  {
    title: "Total Users",
    value: "3,842",
    icon: Users,
    change: "+4.9%",
    trend: "up",
  },
];

const StatsCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}
              >
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCards;
