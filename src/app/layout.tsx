import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "@/app/globals.css";
import { PostHogProvider } from "@/providers/posthog";

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
		url: "https://isarai.de/",
		siteName: "MOB.AI",
		images: [
			{
				url: "https://isarai.de/bg-image.jpeg",
				width: 1200,
				height: 630,
				alt: "ISAR AI",
			},
		],
		locale: "de_DE",
		type: "website",
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="de" className="dark">
			<body className={`${body.className} ${heading.variable} text-foreground min-h-screen flex flex-col overflow-y-scroll overflow-x-hidden`}>
				<PostHogProvider>{children}</PostHogProvider>
			</body>
		</html>
	);
}
