"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function MovingBorderDemo() {
  return (
    <div className="flex gap-4">
      <Link href={"/contact"}>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-900"
        >
          Contact us
        </Button>
      </Link>
    </div>
  );
}
