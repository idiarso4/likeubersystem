import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, MapPin } from "lucide-react";

interface Address {
  id: string;
  text: string;
  description: string;
}

interface AddressSearchProps {
  onAddressSelect?: (address: Address) => void;
  isLoading?: boolean;
  suggestions?: Address[];
}

const defaultSuggestions: Address[] = [
  {
    id: "1",
    text: "123 Main Street",
    description: "Downtown, City Center, 12345",
  },
  {
    id: "2",
    text: "456 Park Avenue",
    description: "Uptown, Business District, 67890",
  },
  {
    id: "3",
    text: "789 Broadway",
    description: "Theater District, Entertainment Zone, 11223",
  },
];

const AddressSearch = ({
  onAddressSelect = () => {},
  isLoading = false,
  suggestions = defaultSuggestions,
}: AddressSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Card className="w-full max-w-[360px] p-4 bg-white shadow-lg">
      <div className="space-y-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for an address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>

        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          <div className="space-y-2">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion.id}
                variant="ghost"
                className="w-full justify-start text-left hover:bg-gray-100 p-3 space-x-3"
                onClick={() => onAddressSelect(suggestion)}
              >
                <MapPin className="h-4 w-4 text-gray-500" />
                <div className="flex flex-col">
                  <span className="font-medium">{suggestion.text}</span>
                  <span className="text-sm text-gray-500">
                    {suggestion.description}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              // Handle current location detection
            }}
          >
            Use Current Location
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AddressSearch;
