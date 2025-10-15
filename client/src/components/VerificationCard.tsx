import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusBadge } from "./StatusBadge";
import { Check, X, User, MapPin, Calendar } from "lucide-react";

type Submission = {
  id: string;
  student: string;
  binId: string;
  estWeight: number;
  photos: string[];
  location: string;
  date: string;
  status: "PENDING_QC" | "APPROVED" | "REJECTED";
};

const mockSubmission: Submission = {
  id: "SUB-001",
  student: "Alex Chen",
  binId: "BIN-A12",
  estWeight: 3.2,
  photos: ["https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400", "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=400"],
  location: "Main Campus, Building A",
  date: "2025-10-15 14:30",
  status: "PENDING_QC",
};

export function VerificationCard() {
  const [submission, setSubmission] = useState(mockSubmission);
  const [verifiedWeight, setVerifiedWeight] = useState(submission.estWeight.toString());

  const handleApprove = () => {
    console.log("Approved:", submission.id, "Weight:", verifiedWeight);
    setSubmission({ ...submission, status: "APPROVED" });
  };

  const handleReject = () => {
    console.log("Rejected:", submission.id);
    setSubmission({ ...submission, status: "REJECTED" });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Submission {submission.id}</CardTitle>
          <StatusBadge status={submission.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Student:</span>
            <span className="font-medium">{submission.student}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Bin:</span>
            <span className="font-medium">{submission.binId}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Submitted:</span>
            <span className="font-medium">{submission.date}</span>
          </div>
        </div>

        <div>
          <Label className="text-sm text-muted-foreground mb-2 block">Photos</Label>
          <div className="grid grid-cols-2 gap-2">
            {submission.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Submission ${index + 1}`}
                className="w-full h-32 object-cover rounded-md border"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm text-muted-foreground">Estimated Weight</Label>
            <p className="font-display text-xl font-bold text-primary mt-1">{submission.estWeight} kg</p>
          </div>
          <div>
            <Label htmlFor="verified-weight">Verified Weight</Label>
            <Input
              id="verified-weight"
              type="number"
              step="0.1"
              value={verifiedWeight}
              onChange={(e) => setVerifiedWeight(e.target.value)}
              data-testid="input-verified-weight"
            />
          </div>
        </div>

        {submission.status === "PENDING_QC" && (
          <div className="flex gap-2 pt-2">
            <Button
              variant="default"
              className="flex-1"
              onClick={handleApprove}
              data-testid="button-approve"
            >
              <Check className="h-4 w-4 mr-2" />
              Approve
            </Button>
            <Button
              variant="destructive"
              className="flex-1"
              onClick={handleReject}
              data-testid="button-reject"
            >
              <X className="h-4 w-4 mr-2" />
              Reject
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
