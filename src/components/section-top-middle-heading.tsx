export default function SectionWithMiddleHeading({ preheading, heading, subheading, children }: { preheading: string | null; heading: string; subheading: string | null; children: React.ReactNode }) {
	return (
		<section className="relative w-full">
			<div className="container py-20 px-4 md:px-6 ">
				<div className="max-w-3xl mx-auto text-center">
					{preheading && <span className="mx-auto text-center uppercase text-muted-foreground pb-10">{preheading}</span>}
					<h2 className="text-6xl md:text-6xl font-heading mb-10 text-center ">{heading}</h2>
					{subheading && <h3 className="text-md md:text-lg mb-5 text-center text-muted-foreground">{subheading}</h3>}
				</div>
			</div>
			<div className="container px-0">
				<div className="">{children}</div>
			</div>
		</section>
	);
}
