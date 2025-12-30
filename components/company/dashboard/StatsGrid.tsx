// components/dashboard/StatsGrid.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    title: "Active Positions",
    value: "24",
    change: "+12%",
    icon: Briefcase,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Total Candidates",
    value: "1,234",
    change: "+8%",
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Interviews Today",
    value: "18",
    change: "+3",
    icon: Clock,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Hired This Month",
    value: "42",
    change: "+15%",
    icon: CheckCircle,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border/50 bg-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground/80">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500 dark:text-green-400">
                {stat.change}
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
