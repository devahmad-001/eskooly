"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }: any) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </>
  );
}
