import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Empoyeeheader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Find Your Next Role
            </h1>
            <p className="text-muted-foreground">
              Discover opportunities that match your skills
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive"></span>
            </Button>
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={userProfile.avatar} />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{userProfile.name}</p>
                <p className="text-xs text-muted-foreground">
                  {userProfile.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
