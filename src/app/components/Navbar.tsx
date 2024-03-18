"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../../app/components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-20 mt-10 inset-x-0 max-w-xl md:mx-auto z-50 rounded-full mx-10 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="tracking-[4px] font-bold text-xl">
          Azhar <span className="text-slate-500 tracking-[4px]">/{">"}</span>
        </div>
        <Link href={"/"}>
          <MenuItem active={active} setActive={setActive} item="home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/services/interface-design">
              Interface Design
            </HoveredLink>
            <HoveredLink href="/services/seo">
              Search Engine Optimization
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="contact"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
