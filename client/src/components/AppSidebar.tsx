import { Leaf, Package, MapPin, Users, Settings, BarChart3, Wallet, CheckSquare, Recycle } from "lucide-react";
import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const studentItems = [
  { title: "Collect", url: "/collect", icon: Recycle },
  { title: "Rewards", url: "/rewards", icon: Package },
  { title: "Profile", url: "/profile", icon: Users },
];

const coordinatorItems = [
  { title: "Dashboard", url: "/ops", icon: BarChart3 },
  { title: "Verifications", url: "/verifications", icon: CheckSquare },
  { title: "Bins Map", url: "/bins", icon: MapPin },
  { title: "Batches", url: "/batches", icon: Package },
  { title: "Wallet", url: "/wallet", icon: Wallet },
];

const recyclerItems = [
  { title: "Marketplace", url: "/portal", icon: Package },
  { title: "KYC", url: "/kyc", icon: CheckSquare },
];

const adminItems = [
  { title: "Admin", url: "/admin", icon: Settings },
  { title: "Reports", url: "/reports", icon: BarChart3 },
];

type AppSidebarProps = {
  role?: "student" | "coordinator" | "recycler" | "admin";
};

export function AppSidebar({ role = "student" }: AppSidebarProps) {
  const [location] = useLocation();

  const items = role === "student" 
    ? studentItems 
    : role === "coordinator" 
    ? coordinatorItems 
    : role === "recycler"
    ? recyclerItems
    : adminItems;

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg">EcoPlastics</h2>
              <p className="text-xs text-muted-foreground capitalize">{role}</p>
            </div>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} data-testid={`link-${item.title.toLowerCase()}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
