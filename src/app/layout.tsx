import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Lato, Space_Mono, Jersey_10, Roboto, Poppins, Instrument_Serif, Fira_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/providers/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/providers/language";

// const font = Cutive_Mono({ subsets: ["latin"], weight: "400", variable: "--font-body" });
const body = Space_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-body" });
const heading = Inter({ subsets: ["latin"], weight: ["400"], variable: "--font-heading" });

export const viewport: Viewport = {
	themeColor: { color: "hsl(240 10% 3.9%)" },
};

export const metadata: Metadata = {
	applicationName: "ISAR AI",
	appleWebApp: {
		title: "ISAR AI",
	},
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${body.className} ${heading.variable} text-foreground min-h-screen flex flex-col overflow-y-scroll overflow-x-hidden`}>{children}</body>
		</html>
	);
}
