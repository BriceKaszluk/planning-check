"use client";

import { useEffect, useState } from "react";
import { signOut } from "@/utils/supabase/signout";
import { checkIfUserLogIn } from "@/utils/supabase/checkIfUserLogIn";
import Link from "next/link";
import { User } from "@supabase/auth-js";

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await checkIfUserLogIn();
      setUser(user);
    };

    fetchUser();
  }, []);

  return user ? (
    <div className="flex items-center gap-4">
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
