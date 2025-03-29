import type React from "react"
import type { Metadata } from "next"
import { Inter, Audiowide } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/LanguageContext" 

const audiowide = Audiowide({ subsets: ["latin"], weight: "400", variable: "--font-audiowide" })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ISAR AI",
  description: "Empowering small and medium enterprises with accessible AI Agent solutions",
  openGraph: {
    title: "ISAR AI",
    description: "Empowering small and medium enterprises with accessible AI Agent solutions",
    url: "https://mob-ai-website.vercel.app/",
    siteName: "MOB.AI",
    images: [
      {
        url: "https://mob-ai-website.vercel.app/bg-image.jpeg",
        width: 1200,
        height: 630,
        alt: "ISAR AI",
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
      <body className={`${inter.className} ${audiowide.variable} dark-gradient-bg text-foreground min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <LanguageProvider> {/* ✅ wrap everything inside here */}
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
