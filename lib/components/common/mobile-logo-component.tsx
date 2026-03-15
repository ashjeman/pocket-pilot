import { Heart } from "lucide-react";
export default function MobileLogoComponent() {
  return (
    <div className="flex items-center gap-2.5 lg:hidden">
      <div className="size-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
        <Heart className="size-4 text-white fill-white" />
      </div>
      <p className="font-semibold text-foreground">ExpenseFlow</p>
    </div>
  );
}
