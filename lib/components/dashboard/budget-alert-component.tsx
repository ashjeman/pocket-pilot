import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BudgetAlertItemComponent from "./budget-alert-item-component";

export default function BudgetAlertComponent() {
  return (
    <div className="w-full h-full flex flex-col ">
      <CardHeader className="w-full pb-4">
        <div className="flex flex-row justify-between w-full">
          <CardTitle>Budget Alerts</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <BudgetAlertItemComponent />
        <BudgetAlertItemComponent />
        <BudgetAlertItemComponent />
        <BudgetAlertItemComponent />
        <BudgetAlertItemComponent />

        <BudgetAlertItemComponent />
      </CardContent>
    </div>
  );
}
