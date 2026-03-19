import { TrendingUp } from "lucide-react";
import { Card } from "../ui/card";

export default function SidebarWidgetComponent() {
  return (
    <Card className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl p-4 text-white">
      <div className="flex items-center justify-between">
        <p className="text-xs opacity-90">Monthly Budget</p>
        <TrendingUp className="size-3.5 opacity-70" />
      </div>
      <p className="text-xl font-semibold">$3,245</p>
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[11px] opacity-80">
          <span>65% spent</span>
          <span>$2,109 used</span>
        </div>
        <div className="h-1.5 bg-white/25 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-[65%]" />
        </div>
      </div>
    </Card>
  );
}
