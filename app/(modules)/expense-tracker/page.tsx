import { Card } from "@/components/ui/card";
import AddExpenseComponent from "@/lib/components/expense-planner/add-expense-component";
import BudgetCategoriesComponent from "@/lib/components/expense-planner/budget-categories-component";
import BudgetOverviewComponent from "@/lib/components/expense-planner/budget-overview-component";
import CurrentLoanComponent from "@/lib/components/expense-planner/current-loan-component";
import FixedMonthlyCommitmentComponent from "@/lib/components/expense-planner/fixed-monthly-commitment-component";
import RecentExpensesComponent from "@/lib/components/expense-planner/recent-expenses-component";
import { ExpenseCategory, ExpenseCategoryConfig } from "@/lib/types";

export default function ExpenseTrackerPage() {
  return (
    <div className="min-h-screen flex flex-col w-full m-4">
      <div className="hidden lg:flex flex-row justify-between items-center p-8 relative overflow-hidden">
        <div className="flex-col">
          <p className="text-2xl font-bold">Expense Tracker</p>
          <p className="text-gray-500">
            Track and manage your monthly expenses
          </p>
        </div>
        <AddExpenseComponent />
      </div>
      <div className="pb-4">
        <Card className="overflow-hidden w-full h-[500px]">
          <BudgetOverviewComponent />
        </Card>
      </div>
      <div className="flex flex-row gap-4 pb-4 w-full">
        <Card className="overflow-hidden w-full">
          <FixedMonthlyCommitmentComponent />
        </Card>
        <Card className="overflow-hidden w-full">
          <CurrentLoanComponent />
        </Card>
      </div>
      <div className="flex flex-col gap-4 pb-4 w-full">
        <p className="text-gray-500 font-semibold w-full">Budget Categories</p>
        <div className="grid grid-cols-4 gap-4">
          {Object.values(ExpenseCategory).map((category) => {
            const config = ExpenseCategoryConfig[category];
            return (
              <BudgetCategoriesComponent
                key={category}
                category={category}
                icon={config.icon}
                color={config.color}
              />
            );
          })}
        </div>
      </div>
      <div>
        <RecentExpensesComponent />
      </div>
    </div>
  );
}
