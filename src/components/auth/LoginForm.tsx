import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Mail } from "lucide-react";

interface LoginFormProps {
  onSubmit?: (data: { email: string; password: string }) => void;
  onSocialLogin?: (provider: string) => void;
  isLoading?: boolean;
}

const LoginForm = ({
  onSubmit = () => {},
  onSocialLogin = () => {},
  isLoading = false,
}: LoginFormProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Card className="w-full max-w-[480px] p-8 bg-white">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-500">Enter your credentials to continue</p>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onSocialLogin("google")}
            disabled={isLoading}
          >
            <Mail className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => onSocialLogin("github")}
            disabled={isLoading}
          >
            <Github className="mr-2 h-4 w-4" />
            Continue with GitHub
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Loading..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center text-sm">
            <a
              href="#"
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault();
                // Handle forgot password
              }}
            >
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LoginForm;
