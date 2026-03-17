"use client";
import BgComponent from "@/lib/components/auth/bg-component";
import LogoComponent from "@/lib/components/common/logo-component";
import CreditComponent from "@/lib/components/common/credit-component";
import DescriptionComponent from "@/lib/components/auth/description-component";
import AuthFormComponent from "@/lib/components/auth/auth-form-component";
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
