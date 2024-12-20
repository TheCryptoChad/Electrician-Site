import Link from 'next/link';
import { Button } from '../ui/button';

export default function Learning() {
	return (
		<section className='flex flex-col items-center gap-4 py-20 text-center'>
			<h1 className='w-[90vw] text-4xl font-extrabold lg:text-6xl'>
				Expert Insights
				<br />
				in Action
			</h1>

			<p className='w-[90vw] font-semibold lg:w-1/3'>
				Explore the knowledge and expertise we share through our educational videos. See how you make informed decisions
				and protect your home
			</p>

			<div className='w-[90vw] lg:w-1/2'>
				<script
					src='https://static.elfsight.com/platform/platform.js'
					async
				></script>
				<div
					className='elfsight-app-32e18f29-f06d-48fb-a8aa-1dc6b9488d0a'
					data-elfsight-app-lazy
				></div>
			</div>

			<Link href='/learning-hub'>
				<Button className='bg-header-button-gradient h-12 w-80 rounded-lg text-2xl font-bold text-black transition-transform duration-300 hover:scale-110 lg:w-96'>
					Explore Our Learning Hub
				</Button>
			</Link>
		</section>
	);
}
