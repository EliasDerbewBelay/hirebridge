import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Building2,
  TrendingUp,
  Shield,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Smart Matching",
      description:
        "AI-powered job matching that connects the right candidates with the right opportunities.",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Company Dashboard",
      description:
        "Complete hiring management platform with applicant tracking and analytics.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description:
        "Personalized career path recommendations and skill development resources.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Private",
      description:
        "Enterprise-grade security with complete control over your data and privacy.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director, TechCorp",
      content:
        "HireBridge reduced our hiring time by 60%. The quality of candidates is outstanding.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      content:
        "Found my dream job in 2 weeks! The application process was seamless.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Talent Acquisition Lead",
      content:
        "The analytics dashboard transformed how we track and improve our hiring process.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium"
            >
              <Zap className="mr-2 h-4 w-4" />
              Trusted by 10,000+ companies
            </Badge>

            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Bridge the Gap Between{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Talent & Opportunity
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-[42rem] text-xl text-muted-foreground">
              HireBridge revolutionizes hiring by providing a single platform
              where job seekers discover the right jobs and companies manage
              applications efficiently. Join thousands who have transformed
              their hiring journey.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2 px-8">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8">
                <Users className="h-4 w-4" />
                Book a Demo
              </Button>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">50K+</div>
                <div className="text-muted-foreground">Jobs Posted</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">
                  200K+
                </div>
                <div className="text-muted-foreground">Successful Hires</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Everything You Need for Modern Hiring
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              Comprehensive tools designed to streamline the entire hiring
              process for both candidates and employers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/40 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              How HireBridge Works
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              Simple, efficient, and effective hiring in four easy steps
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 hidden h-1 w-full -translate-x-1/2 -translate-y-1/2 bg-primary/20 md:block" />
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Create Profile",
                  desc: "Sign up and build your professional profile",
                },
                {
                  step: "02",
                  title: "Match & Discover",
                  desc: "Get AI-powered job matches and recommendations",
                },
                {
                  step: "03",
                  title: "Apply & Connect",
                  desc: "Apply with one click and connect with employers",
                },
                {
                  step: "04",
                  title: "Hire & Grow",
                  desc: "Complete the hiring process and onboard successfully",
                },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Trusted by Professionals Worldwide
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              See what our users say about their experience with HireBridge
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/40">
                <CardContent className="pt-6">
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    {testimonial.content}
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
            <div className="mx-auto max-w-[600px]">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="mb-8 text-primary-foreground/90">
                Join thousands of companies and candidates who have found
                success with HireBridge. Start your journey today.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" variant="secondary" className="gap-2 px-8">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
