import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    name: "Margherita Pizza",
    restaurant: "Pizza Palace",
    orders: 245,
    revenue: "$3,675",
  },
  {
    name: "California Roll",
    restaurant: "Sushi Master",
    orders: 189,
    revenue: "$2,835",
  },
  {
    name: "Classic Burger",
    restaurant: "Burger Joint",
    orders: 167,
    revenue: "$1,670",
  },
  {
    name: "Pepperoni Pizza",
    restaurant: "Pizza Palace",
    orders: 156,
    revenue: "$2,340",
  },
];

const PopularItems = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between space-x-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.restaurant}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{item.orders} orders</p>
                  <p className="text-sm text-muted-foreground">
                    {item.revenue}
                  </p>
                </div>
                <div className="h-2 w-24 rounded-full bg-secondary">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${(item.orders / 245) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularItems;
