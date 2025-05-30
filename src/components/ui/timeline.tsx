"use client";
import { useMotionValueEvent, useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

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
							<div className="h-16 absolute left-3 md:left-0 w-16 rounded-full bg-muted  flex items-center justify-center">
								{/* <div className="h-4 w-4 rounded-full bg-muted border border-muted-foreground/20 p-2" /> */}

								{item.icon}
							</div>

							<div className="flex flex-col md:pl-24 mt-2">
								<h3 className="hidden md:block text-xl md:text-5xl font-bold  ">{item.title}</h3>
								<div className="relative max-w-md mt-4">{item.content}</div>
							</div>
						</div>

						<div className="md:hidden relative pl-10 pr-4 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold ">{item.title}</h3>
							{item.content}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-sky-500 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};
