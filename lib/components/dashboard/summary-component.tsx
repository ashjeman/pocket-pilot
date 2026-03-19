import { Plane } from "lucide-react";
import { Card } from "../ui/card";

export default function SummaryComponent() {
  return (
    <Card className="py-6 px-8 w-full">
      <div className="flex flex-row justify-between w-full">
        <div>
          <p className="text-lg text-gray-700 p-2">Total Balance</p>
          <p className="text-3xl text-black font-bold p-2">$12,450</p>
          <p className="text-md p-1">+12.5% this month</p>
        </div>
        <div className="size-11 bg-green-100 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
          <Plane className="size-5 text-green-800 fill-green-800" />
        </div>
      </div>
    </Card>
  );
}
