import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import './core_lemonade.css'
import Nav from "@/components/shared/nav/Nav";
import Footer from "@/components/shared/footer/Footer";
import { ThemeProviders } from "@/providers/ThemeProvider";
import { SideBarProviders } from "@/providers/SidebarMargin";
import { ReduxProviders } from "@/providers/ReduxProvider";
import { Navbar } from "@/components/templates/dashboard/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProviders>
        <ReduxProviders>
          <SideBarProviders>
            <Navbar/> */}
           
              {/* <Nav/> */}
              {children}
              {/* <Footer/> */}
            
          {/* </SideBarProviders>
          </ReduxProviders>
        </ThemeProviders> */}
      </body>
    </html>
  );
}
