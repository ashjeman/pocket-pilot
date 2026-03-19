import BudgetOverviewComponent from "@/lib/components/expense-planner/budget-overview-component";
import { Button } from "@/lib/components/ui/button";
import { Card } from "@/lib/components/ui/card";
import { Download, Plus } from "lucide-react";

export default function ExpenseTrackerPage() {
  return (
    <div className="min-h-screen flex flex-col w-full m-4">
      <div className="hidden lg:flex flex-row justify-between items-center p-8 relative overflow-hidden">
        <div className="flex-col">
          <p className="text-2xl font-bold">Expense Planner</p>
          <p className="text-gray-500">
            Track and manage your monthly expenses
          </p>
        </div>
        <Button size="lg" variant="outline">
          <Plus />
          Add Expense
        </Button>
      </div>
      <div className="flex flex-row gap-4 pb-4 w-full">
        <Card className="overflow-hidden w-full h-[500px]">
          <BudgetOverviewComponent />
        </Card>
      </div>
    </div>
  );
}
