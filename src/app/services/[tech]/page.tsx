"use client"

import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { tech }=useParams()
  console.log(tech)
  return <div>page</div>;
};

export default Page;
