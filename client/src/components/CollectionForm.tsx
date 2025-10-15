import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { PhotoUpload } from "./PhotoUpload";
import { QrCode, MapPin } from "lucide-react";

export function CollectionForm() {
  const [binId, setBinId] = useState("");
  const [weight, setWeight] = useState([2.5]);
  const [notes, setNotes] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Collection submitted:", { binId, weight: weight[0], notes, photoCount: photos.length });
    alert("Collection submitted successfully! Pending verification.");
  };

  const handleQRScan = () => {
    console.log("QR Scanner opened");
    setBinId("BIN-" + Math.random().toString(36).substring(2, 8).toUpperCase());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Collection</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="bin-id">Bin ID</Label>
            <div className="flex gap-2">
              <Input
                id="bin-id"
                value={binId}
                onChange={(e) => setBinId(e.target.value)}
                placeholder="Scan QR or enter manually"
                data-testid="input-bin-id"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleQRScan}
                data-testid="button-scan-qr"
              >
                <QrCode className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Upload Photos</Label>
            <PhotoUpload onPhotosChange={setPhotos} />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Estimated Weight</Label>
              <span className="font-display text-lg font-semibold text-primary">
                {weight[0].toFixed(1)} kg
              </span>
            </div>
            <Slider
              value={weight}
              onValueChange={setWeight}
              min={0.1}
              max={10}
              step={0.1}
              data-testid="slider-weight"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0.1 kg</span>
              <span>10 kg</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any additional details..."
              rows={3}
              data-testid="textarea-notes"
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted p-3 rounded-md">
            <MapPin className="h-4 w-4" />
            <span>Location auto-detected: Main Campus, Building A</span>
          </div>

          <Button type="submit" className="w-full" data-testid="button-submit-collection">
            Submit Collection
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
