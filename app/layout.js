import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/utils/cn"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "B-savings",
  description: "A simple E-Commerce App",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-slate-100")}>
        <Header />
        <div className="relative container mx-auto max-w-9xl text-slate-900">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
