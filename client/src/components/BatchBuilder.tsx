import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "./StatusBadge";
import { Package } from "lucide-react";

type BatchItem = {
  id: string;
  type: "bin" | "submission";
  name: string;
  weight: number;
  location: string;
  selected: boolean;
};

const mockItems: BatchItem[] = [
  { id: "BIN-A12", type: "bin", name: "Bin A12", weight: 12.3, location: "Building A", selected: false },
  { id: "BIN-C08", type: "bin", name: "Bin C08", weight: 15.1, location: "Building C", selected: false },
  { id: "SUB-001", type: "submission", name: "Alex Chen", weight: 3.2, location: "Building A", selected: false },
  { id: "SUB-002", type: "submission", name: "Sarah Kim", weight: 4.5, location: "Building B", selected: false },
];

export function BatchBuilder() {
  const [items, setItems] = useState(mockItems);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const selectedItems = items.filter(item => item.selected);
  const totalWeight = selectedItems.reduce((sum, item) => sum + item.weight, 0);

  const handleCreateBatch = () => {
    console.log("Creating batch with items:", selectedItems);
    alert(`Batch created with ${selectedItems.length} items (${totalWeight.toFixed(1)} kg)`);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Create Pickup Batch</CardTitle>
          <StatusBadge status="OPEN" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 border rounded-md hover-elevate"
              data-testid={`batch-item-${item.id}`}
            >
              <Checkbox
                checked={item.selected}
                onCheckedChange={() => toggleItem(item.id)}
                data-testid={`checkbox-${item.id}`}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{item.name}</p>
                  <Badge variant="outline" className="text-xs">
                    {item.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
              <div className="text-right">
                <p className="font-display font-semibold text-primary">{item.weight} kg</p>
              </div>
            </div>
          ))}
        </div>

        {selectedItems.length > 0 && (
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Selected Items</p>
                <p className="font-display text-2xl font-bold">{selectedItems.length}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Weight</p>
                <p className="font-display text-2xl font-bold text-primary">{totalWeight.toFixed(1)} kg</p>
              </div>
            </div>
            <Button
              className="w-full"
              onClick={handleCreateBatch}
              data-testid="button-create-batch"
            >
              <Package className="h-4 w-4 mr-2" />
              Create Batch & Request Quotes
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
