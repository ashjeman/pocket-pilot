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
              <TableCell className="w-1/4">INV001</TableCell>
              <TableCell className="w-1/4">Paid</TableCell>
              <TableCell className="w-1/4 whitespace-nowrap">
                Credit Card
              </TableCell>
              <TableCell className="w-1/4 text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
