import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, Trophy, Flame, Gift } from "lucide-react";

const rewards = [
  { id: 1, name: "Campus Store Voucher", points: 500, icon: Gift },
  { id: 2, name: "Free Coffee", points: 150, icon: Gift },
  { id: 3, name: "Eco Tote Bag", points: 300, icon: Gift },
  { id: 4, name: "Plant Sapling", points: 250, icon: Gift },
];

const badges = [
  { name: "First Collection", earned: true },
  { name: "10kg Milestone", earned: true },
  { name: "Weekly Streak", earned: false },
  { name: "Top Contributor", earned: false },
];

export function RewardsDisplay() {
  const ecoPoints = 1250;

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-primary">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Coins className="h-6 w-6" />
                <h3 className="font-display text-lg font-semibold">EcoPoints Balance</h3>
              </div>
              <div className="font-display text-5xl font-bold">{ecoPoints.toLocaleString()}</div>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <Badge className="bg-primary-foreground/20 text-primary-foreground border-0">
                <Flame className="h-3 w-3 mr-1" />
                7 Day Streak
              </Badge>
              <Badge className="bg-primary-foreground/20 text-primary-foreground border-0">
                <Trophy className="h-3 w-3 mr-1" />
                Rank #12
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`p-3 rounded-md border text-center ${
                  badge.earned ? "bg-primary/10 border-primary" : "bg-muted border-border opacity-50"
                }`}
                data-testid={`badge-achievement-${index}`}
              >
                <Trophy className={`h-6 w-6 mx-auto mb-1 ${badge.earned ? "text-primary" : "text-muted-foreground"}`} />
                <p className="text-xs font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Redeem Rewards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="flex items-center justify-between p-3 border rounded-md hover-elevate"
                data-testid={`item-reward-${reward.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <reward.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{reward.name}</p>
                    <p className="text-sm text-muted-foreground">{reward.points} points</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  disabled={ecoPoints < reward.points}
                  data-testid={`button-redeem-${reward.id}`}
                >
                  Redeem
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
