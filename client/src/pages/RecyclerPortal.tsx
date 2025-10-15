import { MarketplaceCard } from "@/components/MarketplaceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { KPICard } from "@/components/KPICard";
import { Package, TrendingUp } from "lucide-react";

export default function RecyclerPortal() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Recycler Marketplace</h1>
        <p className="text-muted-foreground">Browse batches and submit quotes</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <KPICard
          title="Active Quotes"
          value="3"
          icon={Package}
        />
        <KPICard
          title="Won Batches"
          value="12"
          icon={TrendingUp}
          subtitle="This month"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <MarketplaceCard />
        <QuoteForm />
      </div>
    </div>
  );
}
