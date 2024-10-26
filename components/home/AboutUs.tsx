import { companyName } from '@/lib/constants';
import Image from 'next/image';
import { Separator } from '../ui/separator';

export default function AboutUs() {
	return (
		<section className='relative h-[200vh] w-full text-white'>
			<Image
				alt='Hero'
				className='absolute top-0 -z-10 flex h-1/2 w-full items-center justify-center'
				height={50}
				src='/images/route-hero.jpg'
				width={1080}
			/>
			<Image
				alt='Hero'
				className='absolute bottom-0 -z-10 flex h-1/2 w-full items-center justify-center'
				height={50}
				src='/images/route-hero.jpg'
				width={1080}
			/>
			<div>
			<div className='flex items-center gap-5'>
						<Separator className='w-16 bg-[#F7D7A7]' />
						<h2 className='flex-1 whitespace-nowrap text-xl font-bold text-[#F7D7A7]'>About Us</h2>
					</div>
				<h1 className='text-5xl font-extrabold'>{companyName}</h1>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit, facilis obcaecati facere omnis tempore at beatae aut blanditiis aspernatur. Porro tempore commodi sequi nisi voluptatem suscipit recusandae soluta. Eligendi.</p>
			</div>
		</section>
	);
}
