// components/dashboard/RecentActivity.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, UserPlus, MessageSquare, CheckCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "Alex Johnson",
    action: "applied for",
    position: "Senior Frontend Developer",
    time: "10 min ago",
    icon: UserPlus,
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    user: "Sarah Miller",
    action: "completed interview for",
    position: "Product Manager",
    time: "45 min ago",
    icon: MessageSquare,
    iconColor: "text-green-500",
  },
  {
    id: 3,
    user: "Michael Chen",
    action: "received offer for",
    position: "DevOps Engineer",
    time: "2 hours ago",
    icon: CheckCircle,
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    user: "Emma Davis",
    action: "was scheduled for",
    position: "Backend Developer",
    time: "5 hours ago",
    icon: Clock,
    iconColor: "text-amber-500",
  },
];

export default function RecentActivity() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Activity</CardTitle>
        <CardDescription className="text-muted-foreground">
          Latest updates from your hiring pipeline
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className="rounded-lg bg-muted p-2">
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{activity.user}</span>{" "}
                  {activity.action}{" "}
                  <span className="font-medium">{activity.position}</span>
                </p>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
              <Badge variant="outline" className="border-border">
                New
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
