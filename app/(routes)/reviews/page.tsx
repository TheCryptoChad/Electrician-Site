import ContactForm from '@/components/ContactForm';
import { Separator } from '@/components/ui/separator';
import { companyName, phoneNumber, email, address, socials } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Page() {
	return (
		<section className='flex flex-col items-center justify-center gap-10 py-20'>
			<div className='w-4/5'>
				<script
					src='https://static.elfsight.com/platform/platform.js'
					async
				></script>
				<div
					className='elfsight-app-ccdfcbe5-2b1c-43d3-b819-68cc3deedc87'
					data-elfsight-app-lazy
				></div>
			</div>

			<Separator className='bg-black w-5/6'/>

			<h1 className='text-4xl'>Our Work In Action</h1>

			<Link
				className='flex w-full justify-center'
				href={socials.Youtube}
				target='_blank'
			>
				<Button className='bg-header-button-gradient h-12 w-[20%] rounded-lg text-lg font-bold text-black transition-transform duration-300 hover:scale-110'>
					Join The Community!
				</Button>
			</Link>
		</section>
	);
}
