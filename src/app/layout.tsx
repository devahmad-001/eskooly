import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import './core_lemonade.css'
import Nav from "@/components/shared/nav/Nav";
import Footer from "@/components/shared/footer/Footer";
import { ThemeProviders } from "@/providers/ThemeProvider";
import { SideBarProviders } from "@/providers/SidebarMargin";
import { ReduxProviders } from "@/providers/ReduxProvider";
import { Navbar } from "@/components/templates/dashboard-menu/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eSkooly-Online School",
  description: "Free online School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* <ReduxProviders>
          <SideBarProviders>
            <Navbar /> */}

        <Nav />
        {children}
        <Footer />

        {/* </SideBarProviders>
        </ReduxProviders> */}

      </body>
    </html>
  );
}
