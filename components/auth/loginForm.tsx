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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError || !authData?.user) {
      console.error(authError?.message ?? "Login failed");
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("user_profiles") // make sure this table exists
      .select("role")
      .eq("id", authData.user.id)
      .single();

    if (profileError) {
      console.error(profileError.message);
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
    <div className="border shadow-lg max-w-md mx-auto p-4 rounded-lg m-9">
      <h1 className="font-bold text-4xl">Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="your email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="mt-4 w-full">
          Login
        </Button>
      </form>
    </div>
  );
}
