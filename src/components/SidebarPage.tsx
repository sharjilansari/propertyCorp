"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
// import Theme from "@/components/ui/Theme"
import CardPage from "./CardPage"
import { FaHome, FaShoppingCart, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./theme-provider";
import Checkout from "../app/checkout/page";
import sampleData from "@/data/sampleData.json";
import { constants } from "buffer";

interface Data {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  location: string;
  price_range: string;
  bedrooms: number;
  amenities: string[];
}

interface dataObj{
  data: Data[]
}

export function SidebarDemo(props: { data: Data[], description: string }) {
  // console.log("sidebar", props)
  // console.log("sidebar", props.data)
  const links = [
    {
      label: "Home",
      href: "/home",
      icon: (
        <FaHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Search",
      href: "!#",
      icon: (
        <FaSearch className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Checkout",
      href: `/checkout`,
      icon: (
        <FaShoppingCart className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard data={props.data} desc={props.description} />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Property Corp.
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content



export const Dashboard = (props: { data: Data[], desc: string }) => {
  // console.log("Dashboard", props.desc);
  // console.log("Dashboard", props.data);
  return (
    <div className="flex flex-1 overflow-auto">
      <div className="p-2 mx-0 my-auto md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-wrap gap-3 flex-1 w-full h-full overflow-auto">
        <CardPage data={props.data} buttonDesc={props.desc} />
      </div>
    </div>
  );
};
