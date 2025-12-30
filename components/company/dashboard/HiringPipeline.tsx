// components/dashboard/HiringPipeline.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const stages = [
  { name: "Applied", value: 124, color: "bg-blue-500" },
  { name: "Screening", value: 89, color: "bg-cyan-500" },
  { name: "Interview", value: 67, color: "bg-amber-500" },
  { name: "Final Round", value: 34, color: "bg-purple-500" },
  { name: "Offer", value: 23, color: "bg-green-500" },
  { name: "Hired", value: 12, color: "bg-emerald-500" },
];

export default function HiringPipeline() {
  const total = stages.reduce((sum, stage) => sum + stage.value, 0);

  return (
    <Card className="border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Hiring Pipeline</CardTitle>
        <CardDescription className="text-muted-foreground">
          Candidate progression across all positions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stages.map((stage) => {
            const percentage = (stage.value / total) * 100;
            return (
              <div key={stage.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">
                    {stage.name}
                  </span>
                  <span className="text-muted-foreground">
                    {stage.value} candidates
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
