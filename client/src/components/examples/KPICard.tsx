import { KPICard } from "../KPICard";
import { Package } from "lucide-react";

export default function KPICardExample() {
  return (
    <div className="p-4 max-w-sm">
      <KPICard
        title="Total Collections"
        value="1,248"
        icon={Package}
        trend={{ value: 12.5, isPositive: true }}
        subtitle="This month"
      />
    </div>
  );
}
