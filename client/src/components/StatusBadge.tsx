import { Badge } from "@/components/ui/badge";

type Status = "PENDING_QC" | "APPROVED" | "REJECTED" | "OPEN" | "QUOTED" | "SCHEDULED" | "COMPLETED" | "PAID";

const statusConfig: Record<Status, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  PENDING_QC: { label: "Pending Review", variant: "secondary" },
  APPROVED: { label: "Approved", variant: "default" },
  REJECTED: { label: "Rejected", variant: "destructive" },
  OPEN: { label: "Open", variant: "secondary" },
  QUOTED: { label: "Quoted", variant: "outline" },
  SCHEDULED: { label: "Scheduled", variant: "default" },
  COMPLETED: { label: "Completed", variant: "default" },
  PAID: { label: "Paid", variant: "default" },
};

type StatusBadgeProps = {
  status: Status;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge variant={config.variant} data-testid={`badge-status-${status.toLowerCase()}`}>
      {config.label}
    </Badge>
  );
}
