import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function CurrentLoanItemComponent() {
  return (
    <CardContent className="space-y-3">
      <div className="p-3 border border-border rounded-lg space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Car Loan</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              3.5% APR · Until Jun 2028
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-red-500">$18,500</p>
            <p className="text-xs text-muted-foreground">remaining</p>
          </div>
        </div>
        <Progress className="h-1.5" />
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">26% paid off</span>
          <span className="text-xs font-medium text-foreground">$450/mo</span>
        </div>
      </div>
      <Separator className="my-1" />
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Total Loan Debt</span>
        <span className="text-sm font-semibold text-red-500">$52,700</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Monthly Payments</span>
        <span className="text-sm font-semibold text-purple-600">$1050</span>
      </div>
    </CardContent>
  );
}
