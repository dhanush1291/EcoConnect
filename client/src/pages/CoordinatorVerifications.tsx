import { VerificationCard } from "@/components/VerificationCard";
import { Badge } from "@/components/ui/badge";

export default function CoordinatorVerifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold mb-2">Verify Submissions</h1>
          <p className="text-muted-foreground">Review and approve student collections</p>
        </div>
        <Badge variant="secondary" className="text-base px-4 py-2">
          12 Pending
        </Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <VerificationCard />
        <VerificationCard />
      </div>
    </div>
  );
}
