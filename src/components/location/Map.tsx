import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  onLocationSelect?: (location: { lat: number; lng: number }) => void;
  selectedLocation?: { lat: number; lng: number } | null;
}

const Map = ({
  center = { lat: 40.7128, lng: -74.006 }, // Default to New York City
  zoom = 13,
  onLocationSelect = () => {},
  selectedLocation = null,
}: MapProps) => {
  const [isZooming, setIsZooming] = useState(false);

  // Placeholder map controls
  const handleZoomIn = () => {
    setIsZooming(true);
    setTimeout(() => setIsZooming(false), 300);
  };

  const handleZoomOut = () => {
    setIsZooming(true);
    setTimeout(() => setIsZooming(false), 300);
  };

  return (
    <Card className="w-full h-[600px] relative bg-gray-100 overflow-hidden">
      {/* Placeholder Map Background */}
      <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-74.0060,40.7128,13,0/800x600?access_token=placeholder')] bg-cover bg-center">
        {/* Center Marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <MapPin
                  className="w-8 h-8 text-primary animate-bounce"
                  onClick={() => onLocationSelect(center)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to select this location</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Map Controls */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomIn}
            className={`${isZooming ? "scale-95" : ""} transition-transform`}
          >
            +
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomOut}
            className={`${isZooming ? "scale-95" : ""} transition-transform`}
          >
            -
          </Button>
        </div>

        {/* Location Info */}
        {selectedLocation && (
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium">
              Selected Location: {selectedLocation.lat.toFixed(4)},{" "}
              {selectedLocation.lng.toFixed(4)}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Map;
