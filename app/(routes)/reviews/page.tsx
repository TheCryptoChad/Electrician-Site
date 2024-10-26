import ContactForm from '@/components/ContactForm';
import { Separator } from '@/components/ui/separator';
import { companyName, phoneNumber, email, address, socials, serviceDetails } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Service from '@/components/Service';

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

			<Separator className='w-5/6 bg-black' />

			<h1 className='text-4xl'>Our Work In Action</h1>

			<div className='flex flex-col items-center gap-10 w-full'>
			{Object.values(serviceDetails).map((service) => (
				<Service
					key={service.title}
					title={service.title}
					description={service.description}
					images={service.images}
					cost={service.cost}
					time={service.time}
					type={service.type}
				/>
			))}
			</div>
		</section>
	);
}
