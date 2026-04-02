"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { supabase } from "@/app/supabase-client";
import { ExpenseCategory } from "@/types";

export default function AddExpenseComponent() {
  const [open, setOpen] = useState(false);
  const [expense, setExpense] = useState({
    description: "",
    amount: 0,
    category: "Food & Dining",
    date: new Date() as Date | undefined,
    user_id: 3,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { error } = await supabase.from("expense").insert(expense).single();
    if (error) {
      console.error("Error adding expense: ", error.message);
    } else {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="default" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Expense
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <form onSubmit={handleSubmit}>
          {/* Coloured header band */}
          <div className="bg-muted/50 border-b border-border px-6 py-5">
            <DialogHeader>
              <DialogTitle className="text-base font-semibold">
                Add Expense
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                Record a new transaction to your expense tracker.
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Fields */}
          <div className="px-6 py-5 flex flex-col gap-4">
            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="expenseDesc"
                className="text-xs font-medium text-muted-foreground tracking-wide"
              >
                Description
              </Label>
              <Input
                id="expenseDesc"
                placeholder="e.g. Lunch at Nando's"
                value={expense.description}
                onChange={(e) =>
                  setExpense({ ...expense, description: e.target.value })
                }
                className="text-sm"
              />
            </div>

            {/* Amount + Category side by side */}
            <div className="flex flex-row gap-3 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <Label
                  htmlFor="expAmount"
                  className="text-xs font-medium text-muted-foreground tracking-wide"
                >
                  Amount (RM)
                </Label>
                <Input
                  id="expAmount"
                  type="number"
                  placeholder="0.00"
                  value={expense.amount}
                  onChange={(e) =>
                    setExpense({
                      ...expense,
                      amount: parseFloat(e.target.value) || 0,
                    })
                  }
                  className=" text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5 !w-full">
                <Label className="text-xs font-medium text-muted-foreground tracking-wide">
                  Category
                </Label>
                <Select
                  value={expense.category}
                  onValueChange={(value) =>
                    setExpense({ ...expense, category: value })
                  }
                >
                  <SelectTrigger className="w-full h-9 text-sm">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Object.values(ExpenseCategory).map((cat) => (
                        <SelectItem key={cat} value={cat} className="text-sm">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs font-medium text-muted-foreground tracking-wide">
                Transaction Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!expense.date}
                    className="w-full justify-start text-left text-sm font-normal data-[empty=true]:text-muted-foreground"
                  >
                    <CalendarIcon className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                    {expense.date
                      ? format(expense.date, "dd/MMM/yyyy")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={expense.date}
                    onSelect={(date) => setExpense({ ...expense, date })}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border bg-muted/30 flex justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" size="sm">
              Save Expense
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
