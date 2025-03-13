import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Solutions for SMEs",
  description: "Empowering small and medium enterprises with accessible AI Agent solutions",
  openGraph: {
    title: "AI Solutions for SMEs",
    description: "Empowering small and medium enterprises with accessible AI Agent solutions",
    url: "https://mob-ai-website.vercel.app/",
    siteName: "MOB.AI",
    images: [
      {
        url: "https://mob-ai-website.vercel.app/bg-image.jpeg", // Change to your actual image URL
        width: 1200,
        height: 630,
        alt: "AI Solutions for SMEs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark-gradient-bg text-foreground min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'