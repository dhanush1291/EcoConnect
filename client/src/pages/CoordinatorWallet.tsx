import { WalletCard } from "@/components/WalletCard";
import { KPICard } from "@/components/KPICard";
import { DollarSign, TrendingUp } from "lucide-react";

export default function CoordinatorWallet() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Campus Wallet</h1>
        <p className="text-muted-foreground">Track payments and revenue</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <KPICard
          title="This Month Revenue"
          value="₹8,450"
          icon={DollarSign}
          trend={{ value: 22, isPositive: true }}
        />
        <KPICard
          title="Total Revenue"
          value="₹45,200"
          icon={TrendingUp}
        />
      </div>

      <div className="max-w-2xl">
        <WalletCard />
      </div>
    </div>
  );
}
