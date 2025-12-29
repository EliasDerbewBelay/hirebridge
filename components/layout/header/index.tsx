import Guestheader from "./guast-header";
import Empoyeeheader from "./employee-header";
import Companyheader from "./company-header";
import Adminheader from "./admin-header";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around space-x-4 items-center p-4 border-b bg-background">
      <Link href="/" className="inline-block">
        <div className="group relative">
          <div className="flex items-baseline">
            <div className="relative mr-1">
              <span className="text-4xl font-black text-blue-900 dark:text-blue-400 md:text-5xl">
                H
              </span>
              <div className="absolute -top-1 -right-1 h-2 w-2 animate-pulse rounded-full bg-gradient-to-br from-pink-600 to-purple-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 md:text-4xl">
              <span className="relative">
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-700 group-hover:to-pink-700 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 bg-clip-text text-transparent">
                  ireBridge
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-900 to-purple-700 dark:from-blue-400 dark:to-purple-500 transition-all duration-500 group-hover:w-full" />
              </span>
            </h1>
          </div>
          <div className="mt-1 text-xs font-medium tracking-wider text-slate-500 dark:text-slate-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Talent × Opportunity
          </div>
        </div>
      </Link>

      <div className="flex space-x-4">
        <ModeToggle />
        <div className="flex space-x-2">
          <Button>
            <Link href="/Register">Register</Link>
          </Button>
          <Button>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
