import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Weight, Clock, DollarSign } from "lucide-react";

type Batch = {
  id: string;
  location: string;
  distance: string;
  weight: number;
  polymers: string[];
  deadline: string;
  estimatedValue: number;
};

const mockBatch: Batch = {
  id: "BATCH-2024-001",
  location: "Main Campus",
  distance: "3.2 km",
  weight: 35.1,
  polymers: ["PET", "HDPE", "PP"],
  deadline: "Oct 18, 2025 5:00 PM",
  estimatedValue: 875,
};

export function MarketplaceCard() {
  const handleQuote = () => {
    console.log("Opening quote form for batch:", mockBatch.id);
    alert("Quote form opened");
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{mockBatch.id}</CardTitle>
          <Badge variant="default">Open</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Location:</span>
            <span className="font-medium">{mockBatch.location}</span>
            <Badge variant="outline" className="ml-auto">{mockBatch.distance}</Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Weight className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Total Weight:</span>
            <span className="font-display font-semibold text-primary">{mockBatch.weight} kg</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Pickup Deadline:</span>
            <span className="font-medium">{mockBatch.deadline}</span>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Est. Value:</span>
            <span className="font-display font-semibold text-primary">₹{mockBatch.estimatedValue}</span>
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Polymer Mix</p>
          <div className="flex gap-2">
            {mockBatch.polymers.map((polymer) => (
              <Badge key={polymer} variant="secondary">{polymer}</Badge>
            ))}
          </div>
        </div>

        <Button
          className="w-full"
          onClick={handleQuote}
          data-testid="button-submit-quote"
        >
          Submit Quote
        </Button>
      </CardContent>
    </Card>
  );
}
