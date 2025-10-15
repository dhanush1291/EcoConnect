import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const transactions = [
  { id: 1, type: "credit", amount: 2450, description: "Batch BATCH-001 Payment", date: "Oct 15, 2025" },
  { id: 2, type: "credit", amount: 1875, description: "Batch BATCH-002 Payment", date: "Oct 12, 2025" },
  { id: 3, type: "debit", amount: 500, description: "Campus Utility Payment", date: "Oct 10, 2025" },
];

export function WalletCard() {
  const balance = 12450;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Campus Wallet</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Available Balance</span>
          </div>
          <div className="font-display text-3xl font-bold text-primary">
            ₹{balance.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 text-sm text-primary mt-2">
            <TrendingUp className="h-3 w-3" />
            <span>+18% this month</span>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Recent Transactions</h4>
          <div className="space-y-2">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-3 border rounded-md"
                data-testid={`transaction-${tx.id}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-md flex items-center justify-center ${
                    tx.type === "credit" ? "bg-primary/10" : "bg-muted"
                  }`}>
                    {tx.type === "credit" ? (
                      <ArrowDownRight className="h-4 w-4 text-primary" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{tx.description}</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div className={`font-display font-semibold ${
                  tx.type === "credit" ? "text-primary" : "text-muted-foreground"
                }`}>
                  {tx.type === "credit" ? "+" : "-"}₹{tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
