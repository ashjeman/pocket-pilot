"use client";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import BudgetOverviewSummary from "./budget-overview-summary";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function BudgetOverviewComponent() {
  return (
    <div className="w-full h-full flex flex-col">
      <CardHeader className="w-full pb-4">
        <div className="flex flex-row judtify-between">
          <div className="flex flex-col w-full">
            <CardTitle>Budget Overview</CardTitle>
            <p className="mr-4 text-gray-700">March 2026</p>
          </div>
          <div className="flex flex-row gap-10">
            <BudgetOverviewSummary />
            <BudgetOverviewSummary />
            <BudgetOverviewSummary />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 pb-4">
        <ChartContainer
          config={chartConfig}
          className="h-full w-full aspect-auto"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
}
