import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreditCard, TrendingUp } from "lucide-react";

export default function RecentTransactionComponent() {
  return (
    <div className="w-full h-full flex flex-col">
      <CardHeader className="w-full pb-4">
        <div className="flex flex-row justify-between w-full">
          <CardTitle>Recent Transactions</CardTitle>
          <p className="mr-4 font-bold">View All</p>
        </div>
      </CardHeader>

      <div className="px-4">
        <Table className="table-fixed">
          <TableBody>
            <TableRow className="h-15">
              <TableCell className="w-1/12">
                <div className="size-11 bg-red-100 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                  <CreditCard className="size-5 text-red-800" />
                </div>
              </TableCell>
              <TableCell className="w-7/12">
                <div>
                  <p className="text-md font-bold">Grocery store</p>
                  <p className="text-md text-gray-700">
                    Food & Dining | Mar 14
                  </p>
                </div>
              </TableCell>
              <TableCell className="w-4/12 text-right">
                <p className="font-bold text-md">$85.50</p>
              </TableCell>
            </TableRow>
            <TableRow className="h-15">
              <TableCell className="w-1/12">
                <div className="size-11 bg-green-100 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                  <TrendingUp className="size-5 text-green-800" />
                </div>
              </TableCell>
              <TableCell className="w-7/12">
                <div>
                  <p className="text-md font-bold">Salary</p>
                  <p className="text-md text-gray-700">Income | Mar 10</p>
                </div>
              </TableCell>
              <TableCell className="w-4/12 text-right">
                <p className="font-bold text-md">$4000.00</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
