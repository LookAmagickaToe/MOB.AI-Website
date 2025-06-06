import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SpinningText } from "./spinning-text";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
	children: ReactNode;
	className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
	name: string;
	className: string;
	background: ReactNode;
	Icon: React.ElementType;
	description: ReactNode;
	footer: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
	return (
		<div className={cn("grid w-full auto-rows-[30rem] grid-cols-3 gap-2 md:gap-6", className)} {...props}>
			{children}
		</div>
	);
};

const BentoCard = ({ name, className, background, Icon, description, footer, ...props }: BentoCardProps) => (
	<div
		key={name}
		className={cn("group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-lg md:rounded-xl", "border bg-card p-6 hover:border-sky-500", className)}
		{...props}
	>
		<div>{background}</div>
		<div className="pointer-events-none z-10 flex transform-gpu flex-col justify-start h-full gap-1">
			<div className="flex flex-col gap-2 relative">
				<div className="h-16 w-16">
					<div className="h-16 absolute inset-0 w-16 rounded-full bg-sky-500/5 flex items-center justify-center">
						<SpinningText className="text-xs absolute inset-0 text-sky-500 font-bold" duration={30} radius={3.2}>
							{`• • • • • • • • • • • • • • • •`}
						</SpinningText>
						<Icon className="size-6 text-accent-foreground" strokeWidth={1} />
					</div>
				</div>

				<h3 className="mt-2">{name}</h3>
			</div>
			<div className="h-full">
				<div className="text-muted-foreground text-xs md:text-base">{description}</div>
			</div>
			<div className="flex items-start flex-col border-t pt-2">
				<p className="my-0 py-0 text-accent-foreground">OUTCOME</p>
				<p className="text-muted-foreground">{footer}</p>
			</div>
		</div>

		<div className="absolute sm:-right-14 sm:-top-14 -right-7 -top-7">
			<div className="size-40 sm:size-80 transition-all duration-300 group-hover:scale-110 rounded-full bg-sky-500/5 flex items-center justify-center" />
		</div>

		<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-sky-500/5" />
	</div>
);

export { BentoCard, BentoGrid };
