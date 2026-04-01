import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import MobileLogoComponent from "../common/mobile-logo-component";
import { cn } from "@/lib/utils";
import { supabase } from "@/app/supabase-client";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Mode = "signin" | "signup";

export default function AuthFormComponent() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        console.log("Error signing up: ", error.message);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.log("Error signing in: ", error.message);
      } else {
        router.push("/dashboard");
      }
    }

    setLoading(false);
  };

  function handleGoogle() {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      router.push("/");
    }, 1200);
  }

  function switchMode(m: Mode) {
    setMode(m);
    setShowPassword(false);
    setShowConfirm(false);
  }
  return (
    <div className="w-full max-w-[400px] space-y-6">
      {/* Mobile logo */}
      <MobileLogoComponent />

      {/* Heading */}
      <div>
        <h1 className="text-foreground">
          {mode === "signin" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          {mode === "signin"
            ? "Sign in to continue to your dashboard"
            : "Start planning your finances & special moments"}
        </p>
      </div>

      {/* Mode toggle */}
      <div className="flex rounded-xl bg-muted p-1 gap-1">
        <button
          onClick={() => switchMode("signin")}
          className={cn(
            "flex-1 py-2 rounded-lg text-sm transition-all",
            mode === "signin"
              ? "bg-white text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Sign In
        </button>
        <button
          onClick={() => switchMode("signup")}
          className={cn(
            "flex-1 py-2 rounded-lg text-sm transition-all",
            mode === "signup"
              ? "bg-white text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Sign Up
        </button>
      </div>

      {/* Google button */}
      {/* <Button
        variant="outline"
        className="w-full h-11 gap-3 border-border hover:bg-muted/60"
        // onClick={handleGoogle}
        disabled={googleLoading}
      >
        {googleLoading ? (
          <div className="size-4 border-2 border-muted-foreground/30 border-t-muted-foreground rounded-full animate-spin" />
        ) : (
          <svg className="size-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        )}
        Continue with Google
      </Button> */}

      {/* Divider */}
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground shrink-0">
          or continue with email
        </span>
        <Separator className="flex-1" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full name — sign up only */}
        {mode === "signup" && (
          <div className="space-y-1.5">
            <Label htmlFor="fullname" className="text-xs">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <Input
                id="fullname"
                type="text"
                placeholder="Alex Johnson"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="pl-9 h-11"
                required
              />
            </div>
          </div>
        )}

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9 h-11"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-xs">
              Password
            </Label>
            {mode === "signin" && (
              <button
                type="button"
                className="text-xs text-purple-600 hover:text-purple-700 hover:underline"
              >
                Forgot password?
              </button>
            )}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder={
                mode === "signup" ? "Min. 8 characters" : "Enter your password"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-9 pr-10 h-11"
              required
              minLength={mode === "signup" ? 8 : undefined}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm password — sign up only */}
        {mode === "signup" && (
          <div className="space-y-1.5">
            <Label htmlFor="confirm" className="text-xs">
              Confirm Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
              <Input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={cn(
                  "pl-9 pr-10 h-11",
                  confirmPassword &&
                    confirmPassword !== password &&
                    "border-red-400 focus-visible:ring-red-300",
                )}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirm ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            {confirmPassword && confirmPassword !== password && (
              <p className="text-xs text-red-500">Passwords do not match</p>
            )}
          </div>
        )}

        {/* Sign up terms */}
        {mode === "signup" && (
          <p className="text-xs text-muted-foreground">
            By creating an account you agree to our{" "}
            <button type="button" className="text-purple-600 hover:underline">
              Terms of Service
            </button>{" "}
            and{" "}
            <button type="button" className="text-purple-600 hover:underline">
              Privacy Policy
            </button>
            .
          </p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          className="w-full h-11 bg-purple-600 hover:bg-purple-700 text-white gap-2"
          disabled={
            loading ||
            (mode === "signup" &&
              confirmPassword !== "" &&
              confirmPassword !== password)
          }
        >
          {loading ? (
            <>
              <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {mode === "signin" ? "Signing in..." : "Creating account..."}
            </>
          ) : (
            <>
              {mode === "signin" ? "Sign In" : "Create Account"}
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>

      {/* Switch mode link */}
      <p className="text-center text-sm text-muted-foreground">
        {mode === "signin" ? (
          <>
            Don't have an account?{" "}
            <button
              onClick={() => switchMode("signup")}
              className="text-purple-600 hover:text-purple-700 hover:underline"
            >
              Sign up for free
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => switchMode("signin")}
              className="text-purple-600 hover:text-purple-700 hover:underline"
            >
              Sign in
            </button>
          </>
        )}
      </p>
    </div>
  );
}
