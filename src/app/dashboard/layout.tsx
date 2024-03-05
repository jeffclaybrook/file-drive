import { ReactNode } from "react"
import SideNav from "./side-nav"

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
  <main className="container mx-auto pt-12 min-h-screen">
   <div className="flex gap-8">
    <SideNav />
    <div className="w-full">{children}</div>
   </div>
  </main>
 )
}