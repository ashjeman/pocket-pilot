"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BudgetCategoriesComponent from "@/lib/components/expense-planner/budget-categories-component";
import BudgetOverviewComponent from "@/lib/components/expense-planner/budget-overview-component";
import CurrentLoanComponent from "@/lib/components/expense-planner/current-loan-component";
import FixedMonthlyCommitmentComponent from "@/lib/components/expense-planner/fixed-monthly-commitment-component";
import RecentExpensesComponent from "@/lib/components/expense-planner/recent-expenses-component";
import { CalendarIcon, Download, Plus } from "lucide-react";
import React from "react";
import { format } from "date-fns";

export default function ExpenseTrackerPage() {
  const [date, setDate] = React.useState<Date>();
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
                <DialogTitle>Add Expense</DialogTitle>
                <DialogDescription>
                  Add your recent expenses to visualize them.
                </DialogDescription>
              </DialogHeader>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name-1">Description</Label>
                  <Input
                    id="expenseDesc"
                    name="expenseDesc"
                    defaultValue="Groceries"
                  />
                </Field>
                <Field>
                  <Label htmlFor="username-1">Amount</Label>
                  <Input
                    id="expAmount"
                    name="expAmount"
                    defaultValue="80.00"
                    type="number"
                  />
                </Field>
                <Field>
                  <Label htmlFor="category-1">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="engineering">
                          Food & Dining
                        </SelectItem>
                        <SelectItem value="design">Transportaion</SelectItem>
                        <SelectItem value="marketing">Shopping</SelectItem>
                        <SelectItem value="sales">Entertainment</SelectItem>
                        <SelectItem value="support">
                          Bills & Utilities
                        </SelectItem>
                        <SelectItem value="hr">Social Life</SelectItem>
                        <SelectItem value="finance">Attire & Beauty</SelectItem>
                        <SelectItem value="operations">Health</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="name-1">Transaction date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        data-empty={!date}
                        className="w-[280px] justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
                      >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>
              </FieldGroup>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save</Button>
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
