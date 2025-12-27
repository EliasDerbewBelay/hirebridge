import Guestheader from "./guast-header";
import Empoyeeheader from "./employee-header";
import Companyheader from "./company-header";
import Adminheader from "./admin-header";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-around space-x-4 items-center p-4 border-b bg-background">
      <div>
        <h1 className="font-bold text-2xl text-slate-700 dark:text-white">
          <span className="text-4xl font-bold text-blue-900 dark:text-pink-700">H</span>ireBridge
        </h1>
      </div>

      <div className="flex space-x-4">
        <ModeToggle />
        <div className="flex space-x-2">
          <Button>Register</Button>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
}
