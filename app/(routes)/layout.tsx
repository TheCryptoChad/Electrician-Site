import RouteHero from '@/components/RouteHero';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<RouteHero />
			{children}
		</main>
	);
}
