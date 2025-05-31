"use client";

export default function Text({ children }: { children: React.ReactNode }) {
	return <p className="text-base md:text-lg">{children}</p>;
}
