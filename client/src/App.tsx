import { Switch, Route, useLocation } from "wouter";
import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import Landing from "@/pages/Landing";
import StudentRegistration from "@/pages/StudentRegistration";
import CompanyRegistration from "@/pages/CompanyRegistration";
import StudentCollect from "@/pages/StudentCollect";
import StudentRewards from "@/pages/StudentRewards";
import CoordinatorOps from "@/pages/CoordinatorOps";
import CoordinatorVerifications from "@/pages/CoordinatorVerifications";
import CoordinatorBins from "@/pages/CoordinatorBins";
import CoordinatorBatches from "@/pages/CoordinatorBatches";
import CoordinatorWallet from "@/pages/CoordinatorWallet";
import RecyclerPortal from "@/pages/RecyclerPortal";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/not-found";

type Role = "student" | "coordinator" | "recycler" | "admin";

function Router({ role }: { role: Role }) {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      
      {/* Registration Routes */}
      <Route path="/register/student" component={StudentRegistration} />
      <Route path="/register/company" component={CompanyRegistration} />
      
      {/* Student Routes */}
      <Route path="/collect" component={StudentCollect} />
      <Route path="/rewards" component={StudentRewards} />
      <Route path="/profile" component={StudentRewards} />
      
      {/* Coordinator Routes */}
      <Route path="/ops" component={CoordinatorOps} />
      <Route path="/verifications" component={CoordinatorVerifications} />
      <Route path="/bins" component={CoordinatorBins} />
      <Route path="/batches" component={CoordinatorBatches} />
      <Route path="/wallet" component={CoordinatorWallet} />
      
      {/* Recycler Routes */}
      <Route path="/portal" component={RecyclerPortal} />
      <Route path="/kyc" component={RecyclerPortal} />
      
      {/* Admin Routes */}
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/reports" component={AdminDashboard} />
      
      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const [role, setRole] = useState<Role>("student");
  
  const isPublicRoute = location === "/" || location.startsWith("/register");
  
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  if (isPublicRoute) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Router role={role} />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar role={role} />
              <div className="flex flex-col flex-1">
                <header className="flex items-center justify-between gap-4 p-4 border-b">
                  <div className="flex items-center gap-2">
                    <SidebarTrigger data-testid="button-sidebar-toggle" />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Demo Mode:</span>
                      <Select value={role} onValueChange={(v) => setRole(v as Role)}>
                        <SelectTrigger className="w-[140px] h-8" data-testid="select-role">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="coordinator">Coordinator</SelectItem>
                          <SelectItem value="recycler">Recycler</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <ThemeToggle />
                </header>
                <main className="flex-1 overflow-auto p-6">
                  <Router role={role} />
                </main>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
