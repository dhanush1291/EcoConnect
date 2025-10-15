import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export function QuoteForm() {
  const [pricePerKg, setPricePerKg] = useState("25");
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote submitted:", { pricePerKg, date });
    alert("Quote submitted successfully!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price per kg (₹)</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={pricePerKg}
              onChange={(e) => setPricePerKg(e.target.value)}
              data-testid="input-price-per-kg"
            />
          </div>

          <div className="space-y-2">
            <Label>Pickup Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left"
                  data-testid="button-select-date"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="pt-2">
            <div className="p-3 bg-muted rounded-md text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Batch Weight:</span>
                <span className="font-semibold">35.1 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Your Quote:</span>
                <span className="font-display font-bold text-primary">
                  ₹{(parseFloat(pricePerKg) * 35.1).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" data-testid="button-submit-quote">
            Submit Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
