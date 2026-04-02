import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BudgetCategoriesProps } from "@/lib/types";
import * as Icons from "lucide-react";

export default function BudgetCategoriesComponent({
  category,
  icon,
  color,
}: BudgetCategoriesProps) {
  const Icon =
    (Icons[icon as keyof typeof Icons] as React.ElementType) ??
    Icons.CircleDashed;

  return (
    <Card className="overflow-hidden w-full">
      <div className="w-full h-full flex flex-col ">
        <CardHeader className="w-full pb-4">
          <div className="flex flex-row justify-between items-center">
            <CardTitle>{category}</CardTitle>
            <div
              className={`size-8 ${color} rounded-lg flex items-center justify-center`}
            >
              <Icon className="w-4 h-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-row w-full justify-between">
              <p className="text-gray-700">Spent</p>
              <p>$850</p>
            </div>
            <div className="flex flex-row w-full justify-between">
              <p className="text-gray-700">Budget</p>
              <p>$1000</p>
            </div>
            <Progress />
            <Badge className="bg-blue-50 text-blue-700">85% used</Badge>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
