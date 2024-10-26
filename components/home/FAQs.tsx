import { email } from '@/lib/constants';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

export default function FAQs() {
	return (
		<section className='flex justify-center py-20 text-white'>
			<article className='bg-faqs-radial-gradient grid w-2/3 grid-cols-3 gap-16 rounded-xl px-32 py-20'>
				<div className='flex items-center gap-7'>
					<h1 className='text-7xl font-extrabold text-[#F7D7A7]'>FAQs</h1>{' '}
					<Separator
						className='bg-[#F7D7A7]'
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
				<div className='col-span-2 flex flex-col gap-2 rounded-xl border border-[#F7D7A7] p-5'>
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
				<p></p>
				<p></p>
				<div className='col-span-2 flex flex-col gap-2 rounded-xl border border-[#F7D7A7] p-5'>
					<h2 className='font-bold text-[#F7D7A7]'>Why is the price higher than the competitors?</h2>
					<p className='leading-5'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ut blanditiis alias commodi eum nemo earum
						saepe, ad dignissimos rerum eaque voluptates necessitatibus velit veniam ratione accusamus autem repudiandae
						fugit?
					</p>
				</div>
				<div className='col-span-2 flex flex-col gap-2 rounded-xl border border-[#F7D7A7] p-5'>
					<h2 className='font-bold text-[#F7D7A7]'>Do you offer financing?</h2>
					<p className='leading-5'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ut blanditiis alias commodi eum nemo earum
						saepe, ad dignissimos rerum eaque voluptates necessitatibus velit veniam ratione accusamus autem repudiandae
						fugit?
					</p>
				</div>
				<div className='col-span-3 flex items-center justify-center gap-4'>
					<p>Have another question?</p>
					<Link href='/contact-us'>
						<Button className='bg-header-button-gradient h-12 w-36 rounded-lg font-bold transition-transform duration-300 hover:scale-110'>
							Contact Us
						</Button>
					</Link>
				</div>
			</article>
		</section>
	);
}
