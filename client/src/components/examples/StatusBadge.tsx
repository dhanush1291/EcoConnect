import { StatusBadge } from "../StatusBadge";

export default function StatusBadgeExample() {
  return (
    <div className="p-4 flex flex-wrap gap-2">
      <StatusBadge status="PENDING_QC" />
      <StatusBadge status="APPROVED" />
      <StatusBadge status="REJECTED" />
      <StatusBadge status="OPEN" />
      <StatusBadge status="QUOTED" />
      <StatusBadge status="SCHEDULED" />
      <StatusBadge status="COMPLETED" />
      <StatusBadge status="PAID" />
    </div>
  );
}
