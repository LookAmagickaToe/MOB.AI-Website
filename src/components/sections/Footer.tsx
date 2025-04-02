"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/providers/language";

export default function Footer() {
	const { language } = useLanguage();
	return (
		<footer className="w-full border-t border-dashed bg-background">
			<div className="container mx-auto px-0 md:px-6 py-5">
				<div className="mt-0 flex flex-col md:flex-row justify-between items-center">
					<p className="text-xs ">{new Date().getFullYear()} ISAR AI. All rights reserved.</p>
					<div className="flex space-x-4 mt-4 md:mt-0">
						<Link href="/impressum#datenschutz" className="text-xs transition-colors">
							Privacy Policy
						</Link>
						<Link href="/impressum" className="text-xs transition-colors">
							Impressum
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
