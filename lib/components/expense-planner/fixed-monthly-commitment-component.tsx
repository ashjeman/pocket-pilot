import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import FMCItemComponent from "./fmc-item-component";

export default function FixedMonthlyCommitmentComponent() {
  return (
    <div className="w-full h-full flex flex-col">
      <CardHeader className="w-full pb-4">
        <div className="flex flex-row judtify-between">
          <div className="flex flex-col w-full">
            <CardTitle>Fixed Monthly Commitments</CardTitle>
            <div className="flex flex-row">
              <p className="mr-4 text-gray-700">Total: </p>
              <p className="mr-4 text-purple-700 font-semibold">$2045/month </p>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <Button size="lg" variant="outline">
              <Plus />
              Add
            </Button>
          </div>
        </div>
      </CardHeader>
      <div className="flex flex-col w-full">
        <FMCItemComponent />
      </div>
    </div>
  );
}
