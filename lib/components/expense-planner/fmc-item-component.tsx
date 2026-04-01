import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { House } from "lucide-react";

export default function FMCItemComponent() {
  return (
    <CardContent className="space-y-2">
      <div className="flex items-center justify-between p-3 bg-muted/70 rounded-lg hover:bg-muted/90 transition-colors">
        <div className="flex items-center gap-2.5">
          <div className="size-10 bg-purple-50 rounded-lg flex items-center justify-center">
            <House className="text-purple-700 w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Rent</p>
            <p className="text-xs text-muted-foreground">Due: 1st of month</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-foreground">$450</p>
          <Badge variant="secondary" className="text-[10px] h-4 mt-0.5 ">
            Housing
          </Badge>
        </div>
      </div>
      <Separator className="my-2" />
      <div className="flex items-center justify-between pt-1">
        <span className="text-sm font-medium text-muted-foreground">
          Total Monthly Fixed
        </span>
        <span className="text-base font-semibold text-purple-600">$2045</span>
      </div>
    </CardContent>
  );
}
