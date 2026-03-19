import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "../ui/card";
import { CircleAlert } from "lucide-react";

export default function BudgetAlertItemComponent() {
  return (
    <Card className="p-4 bg-red-50 border !border-red-300 mb-2">
      <div className="flex flex-row gap-4">
        <CircleAlert className="text-red-800" />
        <div className="flex flex-col">
          <p className="font-bold text-md text-red-800">Shopping Exceeded</p>
          <p className="text-md text-red-600">$680 spent of $500 budget</p>
        </div>
      </div>
    </Card>
  );
}
