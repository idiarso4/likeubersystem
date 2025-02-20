import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RevenueChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          {/* Placeholder for chart - In a real app, use a charting library like recharts */}
          <div className="relative h-full w-full">
            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-primary/10 rounded-md" />
            <div className="absolute bottom-0 left-[20%] h-1/2 w-full bg-primary/20 rounded-md" />
            <div className="absolute bottom-0 left-[40%] h-2/3 w-full bg-primary/30 rounded-md" />
            <div className="absolute bottom-0 left-[60%] h-3/4 w-full bg-primary/40 rounded-md" />
            <div className="absolute bottom-0 left-[80%] h-1/2 w-full bg-primary/50 rounded-md" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
