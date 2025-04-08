"use client";

import React, { useEffect } from "react";
import content from "@/app/sv.json";
import { ShoppingCart, User } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Navbar from "./navbar";
import NavbarMobile from "./navbar-mobile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Header = () => {
  const { logo } = content.layout;
  const { setTheme } = useTheme();

  /* sätter light-mode (ifall man varit i shop delen med darkmode så ska den byta till light på huvudsidan för den stödjer inte darkmode) */
  useEffect(() => {
    setTheme("light");
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }, []);

  return (
    <header className={`text-secondary-foreground flex justify-between items-center gap-5 px-5 sm:px-10 py-2 bg-secondary`}>
      <Link href={"/"}>
        <CldImage
          src={logo.url}
          alt={logo.alt}
          width={300}
          height={300}
          preserveTransformations
        />
      </Link>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="flex gap-5">
        {/* <span>
          <User />
        </span>
        <span>
          <ShoppingCart />
        </span> */}
        <div className="sm:hidden">
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
