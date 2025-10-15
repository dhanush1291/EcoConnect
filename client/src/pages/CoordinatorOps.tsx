import { KPICard } from "@/components/KPICard";
import { AnalyticsChart } from "@/components/AnalyticsChart";
import { CheckSquare, Package, MapPin, Wallet, TrendingUp } from "lucide-react";

export default function CoordinatorOps() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Operations Dashboard</h1>
        <p className="text-muted-foreground">Monitor campus recycling operations</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Pending Verifications"
          value="12"
          icon={CheckSquare}
        />
        <KPICard
          title="Active Batches"
          value="3"
          icon={Package}
        />
        <KPICard
          title="Bins at Threshold"
          value="5"
          icon={MapPin}
        />
        <KPICard
          title="Wallet Balance"
          value="₹12,450"
          icon={Wallet}
          trend={{ value: 18, isPositive: true }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <AnalyticsChart />
        <KPICard
          title="Total Impact"
          value="2,547 kg"
          icon={TrendingUp}
          subtitle="320 tons CO₂ saved"
        />
      </div>
    </div>
  );
}
