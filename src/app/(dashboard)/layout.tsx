import { Inter } from "next/font/google";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });
import "@/app/globals.css"; 
import { SideBarProviders } from "@/providers/SidebarMargin";
import { ReduxProviders } from "@/providers/ReduxProvider";
// import { Navbar } from "@/components/templates/dashboard/aside-menu/Navbar";
export default function Layout({ children, }: Readonly<{ children: ReactNode }>) {
    return (
        <html>
            <body className={inter.className} >
                <ReduxProviders>
                {/* <Navbar /> */}
                    <SideBarProviders>
                        <div className="w-full flex items-center justify-center">
                            <div className="w-11/12">
                                {children}
                            </div>
                        </div>
                    </SideBarProviders>
                </ReduxProviders>

            </body>
        </html>
    )
}


