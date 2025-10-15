import { BinMap } from "@/components/BinMap";
import { KPICard } from "@/components/KPICard";
import { MapPin, AlertTriangle } from "lucide-react";

export default function CoordinatorBins() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Smart Bins Map</h1>
        <p className="text-muted-foreground">Real-time IoT bin monitoring</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <KPICard
          title="Total Bins"
          value="24"
          icon={MapPin}
        />
        <KPICard
          title="Threshold Alerts"
          value="5"
          icon={AlertTriangle}
        />
      </div>

      <BinMap />
    </div>
  );
}
