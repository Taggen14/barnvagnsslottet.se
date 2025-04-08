"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import content from "@/app/sv.json";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { logo } = content.layout;
  const { contact, copyright } = content.layout.footer;

  return (
    <footer className="bg-secondary text-secondary-foreground flex flex-col gap-10 py-5">
      <div className="flex flex-col md:flex-row gap-5 items-center md:items-start justify-evenly">
        <div>
          <CldImage
            src={logo.url}
            alt={logo.alt}
            width={300}
            height={300}
            preserveTransformations
          />
        </div>
        <div className="flex flex-col">
          <a
            className="hover:text-secondary-foreground/80 transition-colors duration-300"
            href={contact.tele.href}
          >
            {contact.tele.text}
            {contact.tele.nr}
          </a>
          <a
            className="hover:text-secondary-foreground/80 transition-colors duration-300"
            href={contact.mail.href}
          >
            {contact.mail.text}
            {contact.mail.address}
          </a>
          <div className="flex gap-5 justify-center">
            <a
              className="hover:text-secondary-foreground/80 transition-colors duration-300 mt-2"
              href="https://www.instagram.com/barnvagnsslottet/"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className="hover:text-secondary-foreground/80 transition-colors duration-300 mt-2"
              href="https://www.facebook.com/barnvagnslottet"
              target="_blank"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
      <div className="self-center text-xs">
        <span>{copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
