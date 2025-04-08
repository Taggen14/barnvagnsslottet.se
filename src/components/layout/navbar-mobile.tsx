"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { CldImage } from "next-cloudinary";
import content from "@/app/sv.json";
import Navbar from "./navbar";

const NavbarMobile = () => {
  const { logo } = content.layout;

  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-secondary gap-0">
        <SheetHeader className="px-1 pt-6 gap-0">
          <SheetTitle>
            <div className="flex justify-center">
              <CldImage
                src={logo.url}
                alt={logo.alt}
                width={300}
                height={300}
                preserveTransformations
              />
            </div>
          </SheetTitle>
          <SheetDescription className="flex flex-wrap space-x-3 text-[0.6rem] justify-center text-secondary-foreground"></SheetDescription>
        </SheetHeader>
        <Navbar />
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
