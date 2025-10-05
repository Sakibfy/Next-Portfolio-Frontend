"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { NavMenu } from "./nav.menu";
import { NavigationSheet } from "./navigation-sheet";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

const Navbar = () => {

  const session = useSession()

  console.log(session);


  return (
    <nav className="fixed top-4 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full bg-background  z-30">
      <div className="flex h-full bg-[#344c36] rounded-full text-white items-center justify-between px-6 md:px-8">
        {/* Logo with consistent padding */}
        <Link href="/" className="flex-shrink-0 ">
          <h2 className="bg-[#f9af1b] rounded-full p-2 font-bold">John Doe</h2>
        </Link>

        {/* Desktop Menu with consistent horizontal spacing */}
        <NavMenu className="hidden md:block" />

        {/* Actions and Mobile Menu */}
        <div className="flex items-center gap-4 md:gap-6">
         {session?.status === "authenticated" ? (
    <Button
      variant="destructive"
      className="w-full justify-start gap-2 cursor-pointer"
      onClick={() => signOut()}
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  ) : session?.status === "unauthenticated" ? (
    <Link href="/login">
      <Button className="rounded-full px-5 py-2 text-sm bg-white text-black md:text-base hover:text-white">
        Login
      </Button>
    </Link>
  ) : null}

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
