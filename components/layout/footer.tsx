export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">HireBridge</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Bridging talent with opportunity. HireBridge connects job seekers
              with companies through a modern, secure, and easy-to-use hiring
              platform.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Platform
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Find Jobs</li>
              <li>Post a Job</li>
              <li>Companies</li>
              <li>Applicants</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HireBridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
