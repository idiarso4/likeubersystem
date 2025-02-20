import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Store,
  ShoppingBag,
  Settings,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: Store, label: "Restaurants", href: "/admin/restaurants" },
  { icon: ShoppingBag, label: "Orders", href: "/admin/orders" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-white shadow-sm">
        <div className="flex h-full flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="flex h-16 items-center justify-center border-b">
              <h1 className="text-xl font-bold text-primary">Foodie Admin</h1>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <button className="flex w-full items-center space-x-3 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 border-b bg-white shadow-sm">
          <div className="flex h-full items-center justify-between px-6">
            <h2 className="text-lg font-semibold">
              {sidebarItems.find((item) => item.href === location.pathname)
                ?.label || "Dashboard"}
            </h2>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
