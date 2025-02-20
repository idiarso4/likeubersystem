import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Map from "./Map";
import AddressSearch from "./AddressSearch";

interface Location {
  lat: number;
  lng: number;
}

interface Address {
  id: string;
  text: string;
  description: string;
}

interface LocationSetupProps {
  onLocationConfirm?: (location: Location | Address) => void;
  defaultLocation?: Location;
  isLoading?: boolean;
}

const LocationSetup = ({
  onLocationConfirm = () => {},
  defaultLocation = { lat: 40.7128, lng: -74.006 },
  isLoading = false,
}: LocationSetupProps) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setSelectedAddress(null);
  };

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
    setSelectedLocation(null);
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      onLocationConfirm(selectedLocation);
    } else if (selectedAddress) {
      onLocationConfirm(selectedAddress);
    }
  };

  return (
    <Card className="w-full max-w-[1200px] p-6 bg-white shadow-lg">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Set Your Location</h2>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="map">Select on Map</TabsTrigger>
            <TabsTrigger value="search">Search Address</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="w-full">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-grow">
                <Map
                  center={defaultLocation}
                  onLocationSelect={handleLocationSelect}
                  selectedLocation={selectedLocation}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="search" className="w-full">
            <div className="flex justify-center">
              <AddressSearch
                onAddressSelect={handleAddressSelect}
                isLoading={isLoading}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center pt-4">
          <Button
            size="lg"
            onClick={handleConfirm}
            disabled={!selectedLocation && !selectedAddress}
            className="w-full max-w-md"
          >
            Confirm Location
          </Button>
        </div>

        {(selectedLocation || selectedAddress) && (
          <div className="text-center text-sm text-gray-600">
            {selectedLocation && (
              <p>
                Selected coordinates: {selectedLocation.lat.toFixed(4)},{" "}
                {selectedLocation.lng.toFixed(4)}
              </p>
            )}
            {selectedAddress && (
              <p>
                Selected address: {selectedAddress.text}
                <br />
                {selectedAddress.description}
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default LocationSetup;
