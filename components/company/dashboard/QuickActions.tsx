// components/dashboard/QuickActions.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  Calendar,
  Settings,
  BarChart3,
  Upload,
} from "lucide-react";

const quickActions = [
  {
    icon: FileText,
    label: "Create Job Post",
    description: "Post a new position",
  },
  {
    icon: Users,
    label: "Add Candidate",
    description: "Manually add candidate",
  },
  {
    icon: Calendar,
    label: "Schedule Interview",
    description: "Set up meetings",
  },
  {
    icon: BarChart3,
    label: "Generate Reports",
    description: "Analytics & insights",
  },
  { icon: Upload, label: "Bulk Import", description: "Import candidates" },
  { icon: Settings, label: "Settings", description: "Configure dashboard" },
];

export default function QuickActions() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Quick Actions</CardTitle>
        <CardDescription className="text-muted-foreground">
          Frequently used actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="flex flex-col h-24 border-border/50 bg-background hover:bg-muted/50"
            >
              <div className="mb-2 rounded-lg bg-primary/10 p-2">
                <action.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {action.label}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                {action.description}
              </span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
