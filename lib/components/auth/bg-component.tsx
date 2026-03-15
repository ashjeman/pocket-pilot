import { Heart, Sparkles } from "lucide-react";
export default function BgComponent() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -left-20 size-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute top-1/3 -right-16 size-64 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute -bottom-16 left-1/4 size-72 rounded-full bg-purple-300/20 blur-3xl" />
      {/* Floating hearts */}
      <Heart className="absolute top-24 right-20 size-6 text-white/20 fill-white/20" />
      <Heart className="absolute top-1/2 left-12 size-4 text-white/15 fill-white/15" />
      <Heart className="absolute bottom-32 right-14 size-8 text-white/15 fill-white/15" />
      <Sparkles className="absolute top-36 left-24 size-5 text-white/20" />
      <Sparkles className="absolute bottom-44 right-32 size-4 text-white/20" />
    </div>
  );
}
