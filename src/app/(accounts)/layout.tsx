import { Inter } from "next/font/google";
import { ReactNode } from "react";import "@/app/globals.css";   
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, }: Readonly<{ children: ReactNode }>) {
    return (
        <html>
            <body className={inter.className} >
                {children}
            </body>
        </html>
    )
}