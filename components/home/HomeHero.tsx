import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Navbar from '../Navbar';
import { phoneNumber } from '@/lib/constants';

export default function HomeHero() {
	return (
		<section className='relative flex w-screen flex-col items-center gap-8 pb-32 max-lg:h-screen'>
			<Image
				alt='Hero'
				className='absolute -z-10 flex size-full items-center justify-center'
				height={50}
				src='/images/home-hero.webp'
				width={1080}
			/>

			<Navbar />

			<div className='w-[90%] px-5 lg:px-20'>
				<div className='flex flex-col justify-between gap-8 lg:w-[45%]'>
					<div className='flex items-center gap-5'>
						<Separator className='w-8 bg-[#F7D7A7] lg:w-16' />
						<h2 className='flex-1 whitespace-nowrap font-bold text-[#F7D7A7] lg:text-xl'>Trusted Electrician</h2>
					</div>

					<h1 className='text-4xl font-extrabold leading-snug text-white lg:text-6xl'>
						Protecting what
						<br />
						matters <span className='bg-highlighted-gradient px-2 leading-snug'>the most</span>
					</h1>

					<p className='text-white max-lg:w-1/2 lg:text-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam soluta placeat recusandae nisi, laboriosam
						consectetur!
					</p>

					<Link href={`tel:${phoneNumber}`}>
						<Button className='-gap-2 hover:bg-header-button-gradient-hover bg-header-button-gradient flex h-20 w-64 flex-col items-center justify-center rounded-xl border border-black text-black'>
							<p className='text-2xl font-extrabold'>GET A QUOTE</p>
							<p className='font-bold'>
								IN <span className='underline'>JUST A CALL!</span>
							</p>
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
