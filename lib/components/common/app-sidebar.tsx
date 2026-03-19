"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import LogoDarkComponent from "./logo-dark-component";
import SignOutButton from "./sign-out-button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronsUpDown,
  Heart,
  LayoutDashboard,
  LogOut,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SidebarWidgetComponent from "../sidebar/sidebar-widget-component";
import ProfileComponent from "../sidebar/profile-component";

const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Expense Tracker",
    url: "/expense-tracker",
    icon: Wallet,
  },
  {
    title: "Wedding Planner",
    url: "/wedding-planner",
    icon: Heart,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r-5 bg-white" {...props}>
      <SidebarHeader className="px-4 py-6">
        <LogoDarkComponent />
      </SidebarHeader>
      <Separator />
      <SidebarContent className="m-2">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-3 pb-2">
          Navigation
        </p>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.url}
                size="lg"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all cursor-pointer data-[active=true]:bg-purple-100 data-[active=true]:text-purple-700"
                suppressHydrationWarning
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarWidgetComponent />
        <ProfileComponent />
      </SidebarFooter>
    </Sidebar>
  );
}
