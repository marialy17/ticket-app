"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Header() {
  return (
    <header className="header">
      <Link href="/" className="font-bold shrink-0">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="w-24 lg:w-28"
        />
      </Link>
      <div className="buttonContainer">
        <SignedOut>
          <SignInButton>
            <button className="button" aria-label="Sign In">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
