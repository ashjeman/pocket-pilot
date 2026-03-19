"use client";
import BgComponent from "@/lib/components/auth/bg-component";
import LogoLightComponent from "@/lib/components/common/logo-light-component";
import CreditComponent from "@/lib/components/common/credit-component";
import DescriptionComponent from "@/lib/components/auth/description-component";
import AuthFormComponent from "@/lib/components/auth/auth-form-component";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex">
      {/* ── Left decorative panel ── */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[42%] bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 flex-col justify-between p-12 relative overflow-hidden">
        <BgComponent />
        <LogoLightComponent />
        <DescriptionComponent />
        <CreditComponent />
      </div>

      {/* ── Right: form panel ── */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-background">
        <AuthFormComponent />
      </div>
    </div>
  );
}
