import { BatchBuilder } from "@/components/BatchBuilder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";

const activeBatches = [
  { id: "BATCH-001", weight: 35.1, status: "QUOTED" as const, quotes: 3 },
  { id: "BATCH-002", weight: 28.5, status: "SCHEDULED" as const, recycler: "GreenCycle Inc" },
];

export default function CoordinatorBatches() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Batch Management</h1>
        <p className="text-muted-foreground">Create batches and manage pickups</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <BatchBuilder />
        
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Active Batches</h2>
          {activeBatches.map((batch) => (
            <Card key={batch.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{batch.id}</CardTitle>
                  <StatusBadge status={batch.status} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight:</span>
                    <span className="font-display font-semibold text-primary">{batch.weight} kg</span>
                  </div>
                  {batch.quotes && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Quotes Received:</span>
                      <span className="font-medium">{batch.quotes}</span>
                    </div>
                  )}
                  {batch.recycler && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Recycler:</span>
                      <span className="font-medium">{batch.recycler}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
