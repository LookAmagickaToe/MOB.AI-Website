export default function SectionWithLeftHeading({ heading, subheading, rightSide, children }: { heading: string; subheading: string | null; children: React.ReactNode; rightSide: React.ReactNode }) {
	return (
		<section className="relative w-full">
			<div className="container px-0 relative">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-start divide-x divide-dashed ">
					<div className="w-full">
						<div className="border-b border-muted border-dashed">
							<h2 className="text-3xl md:text-4xl px-8 my-8 font-heading">{heading}</h2>
						</div>
						{subheading && <p className="text-xl text-muted-foreground  max-w-[600px]">{subheading}</p>}
						<div className="my-8 px-8 ">{children}</div>
					</div>

					{rightSide}
				</div>
			</div>
		</section>
	);
}
