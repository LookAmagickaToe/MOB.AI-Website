"use client";
import { useMotionValueEvent, useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { SpinningText } from "../magicui/spinning-text";

interface TimelineEntry {
	title: string;
	icon: React.ReactNode;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 25%", "end 50%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className="flex justify-center pb-20" ref={containerRef}>
			<div ref={ref} className="relative">
				{data.map((item, index) => (
					<div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
						<div className="sticky flex flex-col items-start md:flex-row z-40 top-10 self-start ">
							{/* Dot */}
							<div className="h-16 absolute left-3 md:left-0 w-16 rounded-full bg-card">
								<div className="h-16 absolute inset-0 w-16 rounded-full bg-sky-500/5  flex items-center justify-center ">
									<SpinningText className="text-xs absolute inset-0 text-sky-500 font-bold" duration={30} radius={3.2}>
										{`${index + 1} • ${index + 1} • ${index + 1} • ${index + 1} • ${index + 1} • ${index + 1} • ${index + 1} • ${index + 1} •`}
									</SpinningText>
									{item.icon}
								</div>
							</div>

							<div className="flex flex-col pl-24 pr-4 md:pl-24 mt-4 sm:mt-2">
								<h3 className="text-2xl md:text-5xl font-bold ">{item.title}</h3>
								<div className="text-xs md:text-base relative max-w-md mt-4">{item.content}</div>
							</div>
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-8 left-10.5 top-0 overflow-hidden w-[2px] bg-sky-500/10 "
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-linear-to-t from-purple-500 via-sky-500 to-transparent from-0% via-10% rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
