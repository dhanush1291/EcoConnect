import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal } from "lucide-react";

const leaders = [
  { rank: 1, name: "Alex Chen", points: 2450, avatar: "AC" },
  { rank: 2, name: "Sarah Kim", points: 2180, avatar: "SK" },
  { rank: 3, name: "Mike Johnson", points: 1920, avatar: "MJ" },
  { rank: 4, name: "Emma Davis", points: 1750, avatar: "ED" },
  { rank: 5, name: "Ryan Lee", points: 1580, avatar: "RL" },
];

export function LeaderboardCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          <CardTitle>Top Contributors</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaders.map((leader) => (
            <div
              key={leader.rank}
              className="flex items-center gap-3 p-2 rounded-md hover-elevate"
              data-testid={`leaderboard-rank-${leader.rank}`}
            >
              <div className="flex items-center justify-center w-8">
                {leader.rank <= 3 ? (
                  <Medal className={`h-5 w-5 ${
                    leader.rank === 1 ? "text-chart-3" : leader.rank === 2 ? "text-muted-foreground" : "text-chart-5"
                  }`} />
                ) : (
                  <span className="text-sm font-medium text-muted-foreground">#{leader.rank}</span>
                )}
              </div>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {leader.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{leader.name}</p>
              </div>
              <Badge variant="secondary" className="font-display">
                {leader.points}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
