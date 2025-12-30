"use client";

import { useEffect, useRef, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

import Guestheader from "./guast-header";
import Empoyeeheader from "./employee-header";
import Companyheader from "./company-header";
import Adminheader from "./admin-header";

type UserRole = "employee" | "company" | "admin" | null;

export default function Header() {
  // ✅ Type-safe stable Supabase client
  const supabaseRef = useRef<
    ReturnType<typeof createSupabaseBrowserClient> | null
  >(null);

  if (!supabaseRef.current) {
    supabaseRef.current = createSupabaseBrowserClient();
  }

  const supabase = supabaseRef.current;

  const [role, setRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserRole = async () => {
    const {
      data: { user },
    } = await supabase!.auth.getUser();

    if (!user) {
      setRole(null);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase!
      .from("user_profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (error) {
      console.error("Error fetching role:", error);
      setRole(null);
    } else {
      setRole(data?.role ?? null);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUserRole();

    const { data: subscription } = supabase!.auth.onAuthStateChange(
      async () => {
        setLoading(true);
        await fetchUserRole();
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  if (loading) return null;

  if (!role) return <Guestheader />;

  switch (role) {
    case "employee":
      return <Empoyeeheader />;
    case "company":
      return <Companyheader />;
    case "admin":
      return <Adminheader />;
    default:
      return <Guestheader />;
  }
}
