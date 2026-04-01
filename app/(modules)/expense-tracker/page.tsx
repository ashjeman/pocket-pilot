import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BudgetCategoriesComponent from "@/lib/components/expense-planner/budget-categories-component";
import BudgetOverviewComponent from "@/lib/components/expense-planner/budget-overview-component";
import CurrentLoanComponent from "@/lib/components/expense-planner/current-loan-component";
import FixedMonthlyCommitmentComponent from "@/lib/components/expense-planner/fixed-monthly-commitment-component";
import RecentExpensesComponent from "@/lib/components/expense-planner/recent-expenses-component";
import { Download, Plus } from "lucide-react";

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
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button size="lg" variant="default">
                <Plus />
                Add Expense
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name-1">Name</Label>
                  <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Username</Label>
                  <Input
                    id="username-1"
                    name="username"
                    defaultValue="@peduarte"
                  />
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
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
        <div className="grid grid-cols-3 gap-4">
          <BudgetCategoriesComponent />
          <BudgetCategoriesComponent />
          <BudgetCategoriesComponent />
          <BudgetCategoriesComponent />
          <BudgetCategoriesComponent />
          <BudgetCategoriesComponent />
        </div>
      </div>
      <div>
        <RecentExpensesComponent />
      </div>
    </div>
  );
}
