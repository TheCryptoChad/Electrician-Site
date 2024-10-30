import Link from 'next/link';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { email } from '@/lib/constants';

export default function FAQs() {
	return (
		<section className='flex justify-center py-20 text-white'>
			<article className='bg-faqs-radial-gradient flex w-screen grid-cols-3 flex-col gap-5 px-8 py-20 lg:grid lg:w-[90vw] lg:gap-16 lg:rounded-xl lg:px-32'>
				<div className='flex items-center gap-7 max-lg:flex-col'>
					<h1 className='text-4xl font-extrabold text-[#F7D7A7] max-lg:w-full lg:text-7xl'>FAQs</h1>{' '}
					<Separator
						className='bg-[#F7D7A7] max-lg:hidden'
						orientation='vertical'
					/>
				</div>

				<p className='col-span-2 leading-5'>
					Here you’ll find a compilation of the <b>most frequently asked questions.</b> If there’s something you want to
					know which isn’t here, please send an email to{' '}
					<span className='font-bold text-[#F7D7A7] underline'>
						<Link href={`mailto:${email}`}>{email}!</Link>
					</span>
				</p>

				<div className='col-span-2 flex flex-col gap-2 rounded-xl border border-[#F7D7A7] p-5 max-lg:h-60'>
					<h2 className='font-bold text-[#F7D7A7]'>How long does it take?</h2>

					<p className='leading-5'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ut blanditiis alias commodi eum nemo earum
						saepe, ad dignissimos rerum eaque voluptates necessitatibus velit veniam ratione accusamus autem repudiandae
						fugit?{' '}
						<span className='font-bold text-[#F7D7A7] underline'>
							<Link href='/contact-us'>Click here.</Link>
						</span>
					</p>
				</div>

				<p className='max-lg:hidden'></p>
				<p className='max-lg:hidden'></p>

				<div className='col-span-2 flex flex-col gap-2 rounded-xl border border-[#F7D7A7] p-5 max-lg:h-60'>
					<h2 className='font-bold text-[#F7D7A7]'>Why is the price higher than the competitors?</h2>

					<p className='leading-5'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ut blanditiis alias commodi eum nemo earum
						saepe, ad dignissimos rerum eaque voluptates necessitatibus velit veniam ratione accusamus autem repudiandae
						fugit?
					</p>
				</div>

				<div className='col-span-2 flex flex-col gap-2 rounded-xl border border-[#F7D7A7] p-5 max-lg:h-60'>
					<h2 className='font-bold text-[#F7D7A7]'>Do you offer financing?</h2>

					<p className='leading-5'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ut blanditiis alias commodi eum nemo earum
						saepe, ad dignissimos rerum eaque voluptates necessitatibus velit veniam ratione accusamus autem repudiandae
						fugit?
					</p>
				</div>

				<div className='col-span-3 flex items-center justify-center gap-8 max-lg:flex-col lg:gap-4'>
					<p>Have another question?</p>

					<Link href='/contact-us'>
						<Button className='bg-header-button-gradient h-12 w-72 rounded-lg font-bold transition-transform duration-300 hover:scale-110 lg:w-36'>
							Contact Us
						</Button>
					</Link>
				</div>
			</article>
		</section>
	);
}
