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
      <SidebarHeader>
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

        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg grayscale">
                    {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Johnny</span>
                    <span className="truncate text-xs text-muted-foreground">
                      johnny@gmail.com
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                // side={isMobile ? "bottom" : "right"}
                side={"right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="" alt="{user.name}" />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">Johny</span>
                      <span className="truncate text-xs text-muted-foreground">
                        johnny@gmail.com
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <LogOut className="size-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
