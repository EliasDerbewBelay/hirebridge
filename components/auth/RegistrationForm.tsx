"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function RegistrationForm() {
  const router = useRouter();

  const [role, setRole] = useState("employee"); // default role
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    companyName: "",
  });

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate Password match

    if (formData.password !== formData.confirmPassword) {
      alert("Password do not match!");
      return;
    }

    // 2. Attempt Sign up

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,

      options: {
        data: {
          role: role,
          // only send the relevant name field
          username: role === "employee" ? formData.username : null,
          company_name: role === "company" ? formData.companyName : null,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      //SUCCESS LOGIC
      // if data.session is null, it means Email Confirmation is ON

      if (!data.session) {
        alert("please check your email to confirm your account!");
        return;
      }

      // if data.session exists, they are logged in now, Redirect them!

      if (role === "employee") {
        router.push("/employee/dashboard");
      } else {
        router.push("/company/dashboard");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow border border-white shadow-4 m-5 dark:bg-slate-900 dark:border-slate-500 ">
      <h2 className="text-2xl font-bold mb-2">Create Account</h2>
      {/* Role Toggle */}
      <div className="flex gap-4 mb-6 border rounded-lg">
        <button
          onClick={() => setRole("employee")}
          className={`flex-1 py-2 rounded-lg ${
            role === "employee" ? "bg-blue-500" : ""
          }`}
        >
          Employee
        </button>
        <button
          onClick={() => setRole("company")}
          className={`flex-1 py-2 rounded-lg ${
            role === "company" ? "bg-blue-500" : ""
          }`}
        >
          Company
        </button>
      </div>

      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        {role === "employee" ? (
          <Input
            type="text"
            placeholder="Username"
            className="w-full border p-2 rounded"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        ) : (
          <Input
            type="text"
            placeholder="Company Name"
            className="w-full border p-2 rounded"
            required
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
          />
        )}

        <Input
          type="text"
          placeholder="Email Address"
          className="w-full border p-2 rounded"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="confirm password"
          className="w-full border p-2 rounded"
          required
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-bold"
        >
          Register as {role.charAt(0).toUpperCase() + role.slice(1)}
        </Button>
      </form>
    </div>
  );
}
