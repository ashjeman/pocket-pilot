"use client";
import SignOutButton from "@/lib/components/common/sign-out-button";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex">
      {/* ── Left decorative panel ── */}
      <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden">
        <SignOutButton />
      </div>
    </div>
  );
}
