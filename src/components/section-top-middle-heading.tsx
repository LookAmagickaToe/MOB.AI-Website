import { cn } from "@/lib/utils";

export default function SectionWithMiddleHeading({
	preheading,
	heading,
	subheading,
	children,
	small = false,
}: {
	preheading: string | null;
	heading: string;
	subheading: string | null;
	small?: boolean;
	children: React.ReactNode;
}) {
	return (
		<section className="section-with-lines">
			<div className={cn("px-4 md:px-6 py-6 sm:py-20 border-b", { "py-10": small })}>
				<div className="max-w-3xl mx-auto text-center">
					{preheading && (
						<div className="mb-2">
							<span className="relative uppercase text-accent-foreground sm:text-base text-xs">{preheading}</span>
						</div>
					)}
					<h2 className="text-center">{heading}</h2>
					{subheading && <h4 className="mt-10 text-center text-muted-foreground">{subheading}</h4>}
				</div>
			</div>
			<div className="p-2 lg:p-6 bg-muted/20">{children}</div>
		</section>
	);
}
