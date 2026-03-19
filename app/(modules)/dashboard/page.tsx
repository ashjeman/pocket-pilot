"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import SignOutButton from "@/lib/components/common/sign-out-button";
import BudgetAlertComponent from "@/lib/components/dashboard/budget-alert-component";
import ExpensesDonutComponent from "@/lib/components/dashboard/expenses-donut-component";
import HistoryChartComponent from "@/lib/components/dashboard/history-chart-component";
import RecentTransactionComponent from "@/lib/components/dashboard/recent-transaction-component";
import SummaryComponent from "@/lib/components/dashboard/summary-component";
import { Download, Plane, TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col w-full m-4">
      <div className="hidden lg:flex flex-row justify-between items-center p-8 relative overflow-hidden">
        <div className="flex-col">
          <p className="text-2xl font-bold">Dashboard</p>
          <p className="text-gray-500">
            Overview of your financial health — March 2026
          </p>
        </div>
        <Button size="lg" variant="outline">
          <Download />
          Export Report
        </Button>
      </div>
      <div className="flex flex-row justify-between !gap-4 pb-4">
        <SummaryComponent />
        <SummaryComponent />
        <SummaryComponent />
        <SummaryComponent />
      </div>
      <div className="flex flex-row gap-4 pb-4">
        <Card className="basis-2/3 h-[400px] overflow-hidden">
          <HistoryChartComponent />
        </Card>
        <Card className="basis-1/3 h-[400px]">
          <ExpensesDonutComponent />
        </Card>
      </div>
      <div className="flex flex-row gap-4">
        <Card className="basis-2/3 overflow-hidden">
          <RecentTransactionComponent />
        </Card>
        <Card className="basis-1/3 overflow-hidden">
          <BudgetAlertComponent />
        </Card>
      </div>
    </div>
  );
}
