export default function Footer() {
  return (
    <footer className="border-t bg-background/80 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 text-2xl font-bold">HireBridge</div>
            <p className="text-muted-foreground">
              Bridging talent with opportunity through innovative hiring
              solutions.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">For Candidates</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Find Jobs</li>
              <li>Career Advice</li>
              <li>Resume Builder</li>
              <li>Skill Assessment</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">For Companies</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Post Jobs</li>
              <li>Talent Search</li>
              <li>Analytics</li>
              <li>Enterprise Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HireBridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
