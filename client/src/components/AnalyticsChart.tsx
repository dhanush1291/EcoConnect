import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const data = [
  { month: "Jun", kg: 180 },
  { month: "Jul", kg: 240 },
  { month: "Aug", kg: 310 },
  { month: "Sep", kg: 390 },
  { month: "Oct", kg: 450 },
];

export function AnalyticsChart() {
  const maxValue = Math.max(...data.map(d => d.kg));

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Monthly Collections</CardTitle>
          <BarChart3 className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.month} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.month}</span>
                <span className="font-display font-semibold text-primary">{item.kg} kg</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${(item.kg / maxValue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
