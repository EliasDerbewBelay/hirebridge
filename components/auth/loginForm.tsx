"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/supabaseClient";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError || !authData?.user) {
      setLoading(false);
      alert(authError?.message ?? "Login failed");
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("user_profiles")
      .select("role")
      .eq("id", authData.user.id)
      .maybeSingle();

    setLoading(false);

    if (profileError || !profile) {
      console.error(profileError?.message ?? "Profile not found");
      return;
    }

    if (profile.role === "employee") {
      router.push("/employee/dashboard");
    } else if (profile.role === "company") {
      router.push("/company/dashboard");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow border">
      <h1 className="text-3xl font-bold mb-4">Login</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
