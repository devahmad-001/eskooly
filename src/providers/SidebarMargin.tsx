"use client";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/templates/dashboard/sidebar";

export function SideBarProviders({ children }: any) {
  const { isOpen } = useSelector((state: any) => state.sidebar);
  console.log("🚀 ~ SideBarProviders ~ isOpen:", isOpen);
  return (
    <>
      <Sidebar />
      <div
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </div>
    </>
  );
}
