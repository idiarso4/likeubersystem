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
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const restaurants = [
  {
    id: "1",
    name: "Pizza Palace",
    owner: "John Smith",
    cuisine: "Italian",
    status: "open",
    rating: 4.5,
    orders: 1234,
  },
  {
    id: "2",
    name: "Sushi Master",
    owner: "Amy Chen",
    cuisine: "Japanese",
    status: "open",
    rating: 4.8,
    orders: 2156,
  },
  {
    id: "3",
    name: "Burger Joint",
    owner: "Mike Wilson",
    cuisine: "American",
    status: "closed",
    rating: 4.2,
    orders: 987,
  },
];

const RestaurantsTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Cuisine</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Total Orders</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
              <TableCell className="font-medium">{restaurant.name}</TableCell>
              <TableCell>{restaurant.owner}</TableCell>
              <TableCell>
                <Badge variant="secondary" className="capitalize">
                  {restaurant.cuisine}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    restaurant.status === "open" ? "success" : "secondary"
                  }
                  className="capitalize"
                >
                  {restaurant.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  {restaurant.rating}
                </div>
              </TableCell>
              <TableCell>{restaurant.orders}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
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

export default RestaurantsTable;
