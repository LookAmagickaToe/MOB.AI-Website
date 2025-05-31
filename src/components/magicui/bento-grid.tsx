import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
	children: ReactNode;
	className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
	name: string;
	className: string;
	background: ReactNode;
	Icon: React.ElementType;
	description: string;
	href: string;
	cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
	return (
		<div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
			{children}
		</div>
	);
};

const BentoCard = ({ name, className, background, Icon, description, href, cta, ...props }: BentoCardProps) => (
	<div
		key={name}
		className={cn(
			"group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
			"border bg-card p-6 hover:border-sky-500",
			// light styles
			// "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
			// dark styles
			// "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
			className
		)}
		{...props}
	>
		<div>{background}</div>
		<div className="pointer-events-none z-10 flex transform-gpu flex-col justify-start h-full gap-1">
			<h3 className="mt-2">{name}</h3>
			<p className="max-w-lg text-muted-foreground">{description}</p>
		</div>

		<div className="absolute sm:-right-14 sm:-bottom-14 -right-7 -bottom-7">
			<div className="size-40 sm:size-80 transition-all duration-300 group-hover:scale-110 rounded-full bg-sky-500/5 flex items-center justify-center">
				<Icon className="size-20 sm:size-44 text-sky-500" strokeWidth={1} />
			</div>
		</div>

		<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-sky-500/5" />
	</div>
);

export { BentoCard, BentoGrid };
