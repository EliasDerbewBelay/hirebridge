import { 
  Search, 
  Filter, 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign,
  Building,
  Bookmark,
  TrendingUp,
  CheckCircle,
  Calendar,
  User,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Mock data for jobs and user profile
const dashboardData = {
  userProfile: {
    name: "Alex Johnson",
    title: "Frontend Developer",
    location: "San Francisco, CA",
    profileCompletion: 85,
    savedJobs: 12,
    applications: 8,
    interviews: 2,
    avatar: "/avatars/01.png"
  },
  recommendedJobs: [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 hours ago",
      featured: true,
      match: 95,
      skills: ["React", "TypeScript", "Next.js", "Tailwind"],
      logo: "/company-logos/techcorp.png"
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $130k",
      posted: "1 day ago",
      featured: false,
      match: 88,
      skills: ["JavaScript", "React", "Vue", "CSS"],
      logo: "/company-logos/startupxyz.png"
    },
    {
      id: 3,
      title: "UI/UX Developer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $120/hr",
      posted: "3 days ago",
      featured: true,
      match: 92,
      skills: ["Figma", "React", "UI/UX", "Prototyping"],
      logo: "/company-logos/designstudio.png"
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "DigitalSolutions",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "5 days ago",
      featured: false,
      match: 85,
      skills: ["Node.js", "React", "MongoDB", "AWS"],
      logo: "/company-logos/digitalsolutions.png"
    },
  ],
  recentApplications: [
    {
      jobTitle: "Senior React Developer",
      company: "TechCorp Inc.",
      status: "under-review",
      date: "Dec 10, 2023",
      nextStep: "Technical Interview"
    },
    {
      jobTitle: "Frontend Engineer",
      company: "StartupXYZ",
      status: "applied",
      date: "Dec 8, 2023",
      nextStep: "Awaiting Response"
    },
    {
      jobTitle: "UI Developer",
      company: "CreativeLabs",
      status: "interview",
      date: "Dec 5, 2023",
      nextStep: "Interview on Dec 15"
    }
  ],
  upcomingInterviews: [
    {
      jobTitle: "UI Developer",
      company: "CreativeLabs",
      date: "Dec 15, 2023",
      time: "10:00 AM",
      type: "Technical Interview",
      interviewer: "Sarah Chen"
    },
    {
      jobTitle: "Frontend Engineer",
      company: "TechStart",
      date: "Dec 18, 2023",
      time: "2:30 PM",
      type: "Culture Fit",
      interviewer: "Mike Rodriguez"
    }
  ],
  trendingSkills: [
    { name: "React", demand: "high", jobs: 1245 },
    { name: "TypeScript", demand: "high", jobs: 987 },
    { name: "Next.js", demand: "medium", jobs: 654 },
    { name: "Node.js", demand: "high", jobs: 1123 },
    { name: "AWS", demand: "high", jobs: 876 }
  ]
};

function JobCard({ job }: { job: typeof dashboardData.recommendedJobs[0] }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:border-primary/20">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
              <Building className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg">{job.title}</h3>
                {job.featured && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground font-medium">{job.company}</p>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{job.salary}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <span>{job.posted}</span>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="w-24 mr-2">
                <Progress value={job.match} className="h-2" />
              </div>
              <span className="text-sm font-medium">{job.match}% match</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Save
            </Button>
            <Button size="sm">
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ApplicationStatus({ status }: { status: string }) {
  const statusConfig = {
    'under-review': { label: 'Under Review', variant: 'default' as const },
    'applied': { label: 'Applied', variant: 'secondary' as const },
    'interview': { label: 'Interview', variant: 'outline' as const },
    'rejected': { label: 'Rejected', variant: 'destructive' as const },
    'offer': { label: 'Offer', variant: 'success' as const },
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.applied;

  return (
    <Badge variant={config.variant}>
      {config.label}
    </Badge>
  );
}

export default function EmployeeDashboard() {
  const { userProfile } = dashboardData;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - User Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={userProfile.avatar} />
                    <AvatarFallback className="text-lg">AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-bold text-xl">{userProfile.name}</h2>
                    <p className="text-muted-foreground">{userProfile.title}</p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {userProfile.location}
                    </div>
                  </div>
                </div>

                {/* Profile Completion */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Profile Strength</span>
                    <span className="font-medium">{userProfile.profileCompletion}%</span>
                  </div>
                  <Progress value={userProfile.profileCompletion} className="h-2" />
                  <Button variant="link" className="w-full mt-2 p-0 h-auto">
                    Complete your profile <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center">
                      <Bookmark className="h-5 w-5 text-primary mr-3" />
                      <span>Saved Jobs</span>
                    </div>
                    <span className="font-bold">{userProfile.savedJobs}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Applications</span>
                    </div>
                    <span className="font-bold">{userProfile.applications}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-purple-500 mr-3" />
                      <span>Interviews</span>
                    </div>
                    <span className="font-bold">{userProfile.interviews}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Skills */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Trending Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dashboardData.trendingSkills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="flex items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge 
                          variant={skill.demand === 'high' ? 'default' : 'secondary'} 
                          className="ml-2 text-xs"
                        >
                          {skill.demand}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.jobs.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4">
                  View all skills <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search jobs, companies, or keywords..."
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Location, city, or remote"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                    <Button>
                      Search Jobs
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Remote", "Full-time", "React", "Senior Level", "$100k+"].map((filter) => (
                    <Badge key={filter} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                      {filter} ×
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Jobs */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Recommended For You</h2>
                  <p className="text-muted-foreground">Jobs that match your profile and skills</p>
                </div>
                <Button variant="link">
                  View all jobs <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dashboardData.recommendedJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Applications */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Track your job applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.recentApplications.map((app, index) => (
                      <div key={index} className="flex items-start justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                        <div className="space-y-1">
                          <h4 className="font-medium leading-none">{app.jobTitle}</h4>
                          <p className="text-sm text-muted-foreground">{app.company}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <span>Applied: {app.date}</span>
                            <span className="mx-2">•</span>
                            <span className="font-medium">Next: {app.nextStep}</span>
                          </div>
                        </div>
                        <ApplicationStatus status={app.status} />
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="w-full mt-4">
                    View all applications <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Interviews */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Interviews</CardTitle>
                  <CardDescription>Your scheduled interviews</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.upcomingInterviews.map((interview, index) => (
                      <Card key={index} className="bg-primary/5 border-primary/20">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-medium">{interview.jobTitle}</h4>
                              <p className="text-sm text-muted-foreground">{interview.company}</p>
                            </div>
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {interview.type}
                            </Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2" />
                              {interview.date} at {interview.time}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <User className="h-4 w-4 mr-2" />
                              Interviewer: {interview.interviewer}
                            </div>
                          </div>
                          <Button variant="outline" className="w-full mt-4 border-primary/30">
                            Join Meeting
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <Button variant="link" className="w-full mt-4">
                    View calendar <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}