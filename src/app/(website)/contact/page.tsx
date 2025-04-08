"use client";

import React from "react";
import { usePathname } from "next/navigation";
import content from "@/app/sv.json";
import FormTemplate from "@/components/form-template";

const Contact = () => {
  const { title, description } = content.contact;
  const { contact } = content.layout.footer;
  const pathname = usePathname().slice(1);

  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-5 p-0 md:p-10">
        <div className="flex-1 space-y-5 p-5 md-p-0">
          <p>{description}</p>
          <div className="flex flex-col">
            <a
              href={contact.tele.href}
              className="text-secondary-foreground font-bold"
            >
              {contact.tele.text}
              <span className="text-foreground font-normal hover:text-foreground/80 transition-colors duration-300">
                {contact.tele.nr}
              </span>
            </a>
            <a
              href={contact.mail.href}
              className="text-secondary-foreground font-bold"
            >
              {contact.mail.text}
              <span className="text-foreground font-normal hover:text-foreground/80 transition-colors duration-300">
                {contact.mail.address}
              </span>
            </a>
            <a
              href={contact.address.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground font-bold"
            >
              {contact.address.text}
              <span className="text-foreground font-normal hover:text-foreground/80 transition-colors duration-300 space-x-1">
                <span>{contact.address.street},</span>
                <span>{contact.address.postal_code}</span>
                <span>{contact.address.postal_city}</span>
              </span>
            </a>
          </div>
        </div>
        <div className="md:flex-1 p-5 md-p-0">
          <FormTemplate subject={pathname} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
