import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tag } from "lucide-react";

export default function BudgetCategoriesComponent() {
  return (
    <Card className="overflow-hidden w-full">
      <div className="w-full h-full flex flex-col ">
        <CardHeader className="w-full pb-4">
          <div className="flex flex-row justify-between">
            <CardTitle>Food and Dining</CardTitle>
            <div className="size-10 bg-purple-50 rounded-lg flex items-center justify-center">
              <Tag className="text-purple-700 w-5 h-5" />
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
