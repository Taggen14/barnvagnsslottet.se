"use client";

import React from "react";
import content from "@/app/sv.json";
import { ShoppingCart, User } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Navbar from "./navbar";
import NavbarMobile from "./navbar-mobile";
import Link from "next/link";

const Header = () => {
  const { logo } = content.layout;

  return (
    <header className="text-secondary-foreground flex justify-between items-center px-10 py-2 bg-secondary">
      <Link href={"/"}>
        <CldImage
          src={logo.url}
          alt={logo.alt}
          width={300}
          height={300}
          preserveTransformations
        />
      </Link>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="flex gap-5">
        <span>
          <User />
        </span>
        <span>
          <ShoppingCart />
        </span>
        <div className="md:hidden">
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
