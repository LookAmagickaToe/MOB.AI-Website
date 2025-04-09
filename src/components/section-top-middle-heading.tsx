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
			<div className={cn("px-4 md:px-6 py-20", { "py-10": small })}>
				<div className="max-w-3xl mx-auto text-center">
					{preheading && <span className="relative mx-auto text-center uppercase text-accent-foreground pb-10">{preheading}</span>}
					<h2 className="text-center ">{heading}</h2>
					{subheading && <h3 className="mt-10 text-center text-muted-foreground">{subheading}</h3>}
				</div>
			</div>
			<div className="px-0">
				<div className="">{children}</div>
			</div>
		</section>
	);
}
