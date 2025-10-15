import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Trash2, Battery, Weight } from "lucide-react";

const bins = [
  { id: "BIN-A12", location: "Building A", fill: 85, weight: 12.3, battery: 75, status: "warning" },
  { id: "BIN-B05", location: "Building B", fill: 45, weight: 6.8, battery: 90, status: "ok" },
  { id: "BIN-C08", location: "Building C", fill: 92, weight: 15.1, battery: 60, status: "critical" },
  { id: "BIN-D15", location: "Library", fill: 30, weight: 4.2, battery: 85, status: "ok" },
];

export function BinMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Bin Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {bins.map((bin) => (
            <div
              key={bin.id}
              className="p-4 border rounded-md hover-elevate"
              data-testid={`bin-${bin.id}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">{bin.id}</p>
                    <p className="text-sm text-muted-foreground">{bin.location}</p>
                  </div>
                </div>
                <Badge
                  variant={bin.status === "critical" ? "destructive" : bin.status === "warning" ? "secondary" : "outline"}
                >
                  {bin.fill}% Full
                </Badge>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Trash2 className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Fill:</span>
                  <span className="font-medium">{bin.fill}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <Weight className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="font-medium">{bin.weight}kg</span>
                </div>
                <div className="flex items-center gap-1">
                  <Battery className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">Battery:</span>
                  <span className="font-medium">{bin.battery}%</span>
                </div>
              </div>

              <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    bin.status === "critical" ? "bg-destructive" : bin.status === "warning" ? "bg-chart-3" : "bg-primary"
                  }`}
                  style={{ width: `${bin.fill}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
