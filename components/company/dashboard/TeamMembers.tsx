// components/dashboard/TeamMembers.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "John Smith",
    role: "Hiring Manager",
    email: "john@company.com",
    phone: "+1 (555) 123-4567",
    avatar: "/avatars/john.jpg",
    status: "available",
    tasks: 12,
  },
  {
    name: "Lisa Wong",
    role: "Recruiter",
    email: "lisa@company.com",
    phone: "+1 (555) 987-6543",
    avatar: "/avatars/lisa.jpg",
    status: "busy",
    tasks: 8,
  },
  {
    name: "Robert Kim",
    role: "Interviewer",
    email: "robert@company.com",
    phone: "+1 (555) 456-7890",
    avatar: "/avatars/robert.jpg",
    status: "available",
    tasks: 5,
  },
];

export default function TeamMembers() {
  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Team Members</CardTitle>
        <CardDescription className="text-muted-foreground">
          Active hiring team
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-muted">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {member.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className={`text-xs border ${
                        member.status === "available"
                          ? "border-green-500/30 text-green-600 dark:text-green-400"
                          : "border-amber-500/30 text-amber-600 dark:text-amber-400"
                      }`}
                    >
                      {member.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {member.tasks} tasks
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
