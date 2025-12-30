// components/dashboard/DashboardOverview.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Bell, Download } from "lucide-react";

export default function DashboardOverview() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-2xl font-semibold text-foreground">
            Company Dashboard
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Overview of your hiring and team performance
          </CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-border">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="border-border">
            <Bell className="mr-2 h-4 w-4" />
            Alerts
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Job Post
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
