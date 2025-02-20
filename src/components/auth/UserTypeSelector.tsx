import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserRound, Store, Car } from "lucide-react";

interface UserType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface UserTypeSelectorProps {
  onSelect?: (userType: string) => void;
  selectedType?: string | null;
}

const userTypes: UserType[] = [
  {
    id: "customer",
    title: "Customer",
    description: "Order food from your favorite restaurants",
    icon: <UserRound className="h-8 w-8" />,
  },
  {
    id: "restaurant",
    title: "Restaurant",
    description: "Manage your restaurant and orders",
    icon: <Store className="h-8 w-8" />,
  },
  {
    id: "driver",
    title: "Driver",
    description: "Deliver food and earn money",
    icon: <Car className="h-8 w-8" />,
  },
];

const UserTypeSelector = ({
  onSelect = () => {},
  selectedType = null,
}: UserTypeSelectorProps) => {
  return (
    <div className="w-full max-w-[480px] p-6 bg-white rounded-lg shadow-lg space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Choose User Type</h2>
        <p className="text-gray-500">Select how you want to use the platform</p>
      </div>

      <div className="grid gap-4">
        {userTypes.map((type) => (
          <Button
            key={type.id}
            variant={selectedType === type.id ? "default" : "outline"}
            className={`w-full h-auto p-4 flex items-start gap-4 ${
              selectedType === type.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => onSelect(type.id)}
          >
            <div
              className={`shrink-0 ${selectedType === type.id ? "text-white" : "text-primary"}`}
            >
              {type.icon}
            </div>
            <div className="text-left">
              <h3
                className={`font-semibold ${selectedType === type.id ? "text-white" : "text-gray-900"}`}
              >
                {type.title}
              </h3>
              <p
                className={`text-sm ${selectedType === type.id ? "text-gray-100" : "text-gray-500"}`}
              >
                {type.description}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelector;
