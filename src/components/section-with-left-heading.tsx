export default function SectionWithLeftHeading({
	heading,
	subheading,
	rightSide,
	children,
}: {
	heading: React.ReactNode;
	subheading: string | null;
	children: React.ReactNode;
	rightSide: React.ReactNode;
}) {
	return (
		<section className="section-with-lines">
			<div className="px-0 relative">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:divide-x lg:divide-dashed ">
					<div className="w-full ">
						<div className="border-b border-muted border-dashed ">
							<h2 className="px-8 py-8">{heading}</h2>
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
