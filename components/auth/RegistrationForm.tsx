"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/supabaseClient";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function RegistrationForm() {
  const router = useRouter();

  const [role, setRole] = useState<"employee" | "company">("employee");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    companyName: "",
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          role,
          username: role === "employee" ? formData.username : null,
          company_name: role === "company" ? formData.companyName : null,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // Email confirmation ON
    if (!data.session) {
      alert("Check your email to confirm your account.");
      return;
    }

    // Logged in immediately (email confirmation OFF)
    if (role === "employee") {
      router.push("/employee/dashboard");
    } else {
      router.push("/company/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow border">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>

      {/* Role Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => setRole("employee")}
          className={`flex-1 py-2 rounded ${
            role === "employee" ? "bg-blue-600 text-white" : "border"
          }`}
        >
          Employee
        </button>
        <button
          type="button"
          onClick={() => setRole("company")}
          className={`flex-1 py-2 rounded ${
            role === "company" ? "bg-blue-600 text-white" : "border"
          }`}
        >
          Company
        </button>
      </div>

      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        {role === "employee" ? (
          <Input
            placeholder="Username"
            required
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        ) : (
          <Input
            placeholder="Company name"
            required
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
          />
        )}

        <Input
          type="email"
          placeholder="Email address"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <Input
          type="password"
          placeholder="Confirm password"
          required
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Creating account..." : `Register as ${role}`}
        </Button>
      </form>
    </div>
  );
}
