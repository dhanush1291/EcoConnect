import { RewardsDisplay } from "@/components/RewardsDisplay";
import { LeaderboardCard } from "@/components/LeaderboardCard";

export default function StudentRewards() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold mb-2">Rewards & Achievements</h1>
        <p className="text-muted-foreground">Redeem your EcoPoints and track your progress</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RewardsDisplay />
        </div>
        <div>
          <LeaderboardCard />
        </div>
      </div>
    </div>
  );
}
