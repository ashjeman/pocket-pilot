import { Heart, Plane } from "lucide-react";
export default function LogoDarkComponent() {
  return (
    <div className="relative z-10 flex items-center gap-3">
      <div className="size-11 bg-gradient-to-br from-purple-600 to-pink-500 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
        <Plane className="size-5 text-white fill-white" />
      </div>
      <div>
        <p className="text-black font-semibold text-lg leading-tight">
          PocketPilot
        </p>
        <p className="text-black/70 text-xs">Plan your finances</p>
      </div>
    </div>
  );
}
