import HomeHero from '@/components/home/HomeHero';
import Reviews from '@/components/home/Reviews';
import OurProcess from '@/components/home/OurProcess';
import AboutUs from '@/components/home/AboutUs';
import FAQs from '@/components/home/FAQs';
import Learning from '@/components/home/Learning';

export default function Home() {
	return (
		<main>
			<HomeHero />
			<Reviews />
			<OurProcess />
			{/* <AboutUs /> */}
			<FAQs />
			<Learning />
		</main>
	);
}
