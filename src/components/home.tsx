import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserTypeSelector from "./auth/UserTypeSelector";
import LoginForm from "./auth/LoginForm";
import LocationSetup from "./location/LocationSetup";

interface HomeProps {
  onComplete?: () => void;
}

const Home = ({ onComplete = () => {} }: HomeProps) => {
  const [currentStep, setCurrentStep] = useState<
    "userType" | "login" | "location"
  >("userType");
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);

  const handleUserTypeSelect = (userType: string) => {
    setSelectedUserType(userType);
    setCurrentStep("login");
  };

  const handleLoginSuccess = () => {
    setCurrentStep("location");
  };

  const handleLocationConfirm = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl p-6 bg-white shadow-xl">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Food Delivery Platform
            </h1>
            <p className="text-gray-500">
              Get started by setting up your account
            </p>
          </div>

          <Tabs value={currentStep} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="userType"
                disabled={currentStep !== "userType"}
                className={currentStep === "userType" ? "text-primary" : ""}
              >
                User Type
              </TabsTrigger>
              <TabsTrigger
                value="login"
                disabled={currentStep !== "login"}
                className={currentStep === "login" ? "text-primary" : ""}
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="location"
                disabled={currentStep !== "location"}
                className={currentStep === "location" ? "text-primary" : ""}
              >
                Location
              </TabsTrigger>
            </TabsList>

            <div className="mt-8 flex justify-center">
              <TabsContent
                value="userType"
                className="w-full flex justify-center"
              >
                <UserTypeSelector
                  onSelect={handleUserTypeSelect}
                  selectedType={selectedUserType}
                />
              </TabsContent>

              <TabsContent value="login" className="w-full flex justify-center">
                <LoginForm onSubmit={() => handleLoginSuccess()} />
              </TabsContent>

              <TabsContent
                value="location"
                className="w-full flex justify-center"
              >
                <LocationSetup onLocationConfirm={handleLocationConfirm} />
              </TabsContent>
            </div>
          </Tabs>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {["userType", "login", "location"].map((step, index) => (
              <div
                key={step}
                className={`h-2 w-16 rounded-full transition-all ${currentStep === step ? "bg-primary" : "bg-gray-200"}`}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
