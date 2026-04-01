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
  Filter,
  InfoIcon,
  Search,
  TrendingUp,
} from "lucide-react";

export default function RecentExpensesComponent() {
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
                <TableCell className="w-1/8">
                  <p className="font-semibold">Status</p>
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="h-15">
                <TableCell className="w-3/8">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="size-8 bg-purple-50 rounded-lg flex items-center justify-center align-center">
                      <DollarSign className="text-purple-700 w-4 h-4" />
                    </div>
                    <p className="font-semibold">Whole Foods Market</p>
                  </div>
                </TableCell>
                <TableCell className="w-2/8">
                  <p className="text-gray-500">Food & Dining</p>
                </TableCell>
                <TableCell className="w-1/8">
                  <div className="flex flex-row gap-2 items-center">
                    <Calendar className="text-gray-500 w-4 h-4" />
                    <p className="text-gray-500">14 Mar</p>
                  </div>
                </TableCell>
                <TableCell className="w-1/8">
                  <p className="font-semibold">$85.50</p>
                </TableCell>
                <TableCell className="w-1/8">
                  <Badge className="bg-green-50 text-green-700">
                    completed
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
