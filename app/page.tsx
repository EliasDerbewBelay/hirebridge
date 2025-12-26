import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 gap-4">
      <h1 className="text-5xl font-bold text-slate-700 dark:text-white">HireBridge</h1>
      <p className="flex text-center max-w-[40rem] text-xl font-extralight ">
        HireBridge bridges the gap between talent and opportunity by providing a
        single platform where job seekers can discover the right jobs and apply
        online, while companies post vacancies, manage applications, and hire
        with confidence.
      </p>

      <Button>Get Started</Button>
    </div>
  );
}
