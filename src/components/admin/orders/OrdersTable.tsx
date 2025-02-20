import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const orders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    restaurant: "Pizza Palace",
    items: 3,
    total: "$42.50",
    status: "delivered",
    date: "2024-03-15 14:30",
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    restaurant: "Sushi Master",
    items: 2,
    total: "$35.00",
    status: "in_progress",
    date: "2024-03-15 15:45",
  },
  {
    id: "#ORD-003",
    customer: "Mike Wilson",
    restaurant: "Burger Joint",
    items: 4,
    total: "$28.75",
    status: "pending",
    date: "2024-03-15 16:00",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "success";
    case "in_progress":
      return "warning";
    case "pending":
      return "secondary";
    default:
      return "secondary";
  }
};

const OrdersTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Restaurant</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.restaurant}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <Badge
                  variant={getStatusColor(order.status) as any}
                  className="capitalize"
                >
                  {order.status.replace("_", " ")}
                </Badge>
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrdersTable;
