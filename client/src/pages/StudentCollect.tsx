import { CollectionForm } from "@/components/CollectionForm";
import { KPICard } from "@/components/KPICard";
import { Package, TrendingUp, Flame } from "lucide-react";

export default function StudentCollect() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Submit Collection</h1>
        <p className="text-muted-foreground">Scan a bin and upload your recyclables</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <KPICard
          title="Your Collections"
          value="23"
          icon={Package}
          trend={{ value: 15, isPositive: true }}
        />
        <KPICard
          title="EcoPoints"
          value="1,250"
          icon={TrendingUp}
          subtitle="This month"
        />
        <KPICard
          title="Current Streak"
          value="7 days"
          icon={Flame}
        />
      </div>

      <CollectionForm />
    </div>
  );
}
