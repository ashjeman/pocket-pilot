"use client";
import { supabase } from "@/app/supabase-client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  EllipsisVertical,
  Filter,
  InfoIcon,
  Search,
  SquarePen,
  Trash,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Expense } from "@/types";

export default function RecentExpensesComponent() {
  const [recentExpense, setRecentExpenses] = useState<Expense[]>([]);
  const fetchExpense = async () => {
    const { error, data } = await supabase.from("expense").select("*");

    if (error) {
      console.error("Error reading expenses: ", error.message);
      return;
    }
    setRecentExpenses(data);
  };

  useEffect(() => {
    fetchExpense();
  }, []);

  useEffect(() => {
    console.log(recentExpense);
  }, [recentExpense]);

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row w-full justify-between">
          <CardTitle>Recent Expenses</CardTitle>
          <div className="flex flex-row justify-between gap-4">
            <Field>
              <InputGroup className="h-9">
                <InputGroupInput
                  id="input-group-url"
                  placeholder="Search expenses..."
                />
                <InputGroupAddon align="inline-start">
                  <Search />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Button variant="outline" className="w-9 h-9 p-0">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="w-9 h-9 p-0">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="px-4">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="h-15">
                <TableCell className="w-3/8">
                  <p className="font-semibold">Description</p>
                </TableCell>
                <TableCell className="w-2/8">
                  <p className="font-semibold">Category</p>
                </TableCell>
                <TableCell className="w-1/8">
                  <p className="font-semibold">Date</p>
                </TableCell>
                <TableCell className="w-1/8">
                  <p className="font-semibold">Amount</p>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentExpense.map((item) => (
                <TableRow key={item.id} className="h-15">
                  <TableCell className="w-3/8">
                    <div className="flex flex-row gap-2 items-center">
                      <div className="size-8 bg-purple-50 rounded-lg flex items-center justify-center align-center">
                        <DollarSign className="text-purple-700 w-4 h-4" />
                      </div>
                      <p className="font-semibold">{item.description}</p>
                    </div>
                  </TableCell>
                  <TableCell className="w-2/8">
                    <p className="text-gray-500">{item.category}</p>
                  </TableCell>
                  <TableCell className="w-1/8">
                    <div className="flex flex-row gap-2 items-center">
                      <Calendar className="text-gray-500 w-4 h-4" />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </TableCell>
                  <TableCell className="w-1/8">
                    <div className="flex flex-row items-center justify-between">
                      <p className="font-semibold">
                        RM {item.amount.toFixed(2)}
                      </p>
                      <div className="flex flex-row">
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                          <SquarePen className="text-blue-500 w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                          <Trash className="text-red-500 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
