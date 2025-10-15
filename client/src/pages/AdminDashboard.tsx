import { KPICard } from "@/components/KPICard";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { Users, Building, DollarSign, Leaf } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">System-wide governance and analytics</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Users"
          value="1,842"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <KPICard
          title="Active Partners"
          value="12"
          icon={Building}
        />
        <KPICard
          title="Total Revenue"
          value="₹145K"
          icon={DollarSign}
          trend={{ value: 15, isPositive: true }}
        />
        <KPICard
          title="CO₂ Saved"
          value="320 tons"
          icon={Leaf}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <AnalyticsChart />
        <AnalyticsChart />
      </div>
    </div>
  );
}
