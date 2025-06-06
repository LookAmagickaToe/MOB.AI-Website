export default function SectionWithLeftHeading({
	heading,
	subheading,
	rightSide,
	leftSide,
	children,
}: {
	heading: React.ReactNode;
	subheading: string | null;
	children: React.ReactNode;
	rightSide?: React.ReactNode;
	leftSide?: React.ReactNode;
}) {
	return (
		<section className="section-with-lines">
			<div className="px-0 relative">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-start divide-x">
					{leftSide && leftSide}
					<div className="w-full ">
						<div className="border-b border-muted p-8">
							{subheading && (
								<div className="mb-0">
									<span className="relative uppercase text-accent-foreground text-xs sm:text-base">{subheading}</span>
								</div>
							)}
							<h2>{heading}</h2>
						</div>

						<div className="p-2 md:p-6">{children}</div>
					</div>
					{rightSide && rightSide}
				</div>
			</div>
		</section>
	);
}
