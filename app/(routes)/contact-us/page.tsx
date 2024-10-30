import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { phoneNumber, email, address, companyName } from '@/lib/constants';

export const metadata: Metadata = {
	title: `Contact Us | ${companyName}`,
};

export default function Page() {
	return (
		<section className='flex flex-col items-center justify-center gap-16 py-20'>
			<div className='flex w-4/5 items-center justify-evenly max-lg:flex-col max-lg:gap-8'>
				<div className='flex h-full flex-col justify-between gap-8 max-lg:w-full'>
					<h1 className='text-4xl font-extrabold text-black'>Contact Us</h1>

					<div className='flex flex-col justify-between gap-4 text-[#54595F]'>
						<Socials name='Phone' />
						<Socials name='Email' />
						<Socials name='Location' />
					</div>

					<Image
						alt='Google Review'
						height={80}
						src='/images/google-review.webp'
						width={200}
					/>
				</div>

				<ContactForm />
			</div>

			<div className='relative h-[80vh] w-[65%] bg-white max-lg:h-[50vh] max-lg:w-[90%]'>
				<iframe
					className='relative z-20 size-full border-none'
					loading='lazy'
					src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=New%20York%2C%20wendys&zoom=10&maptype=roadmap'
				></iframe>
				<a
					className='absolute left-0 top-0 z-0 text-black'
					href='https://www.zrivo.com/nebraska-paycheck-calculator'
				>
					Nebraska Paycheck Calculator
				</a>
			</div>
		</section>
	);
}

type SProps = {
	name: string;
};

function Socials(props: SProps) {
	return (
		<div className='flex items-center gap-5 hover:text-black'>
			<Image
				alt={props.name}
				className='invert filter'
				height={30}
				src={`/icons/${props.name === 'Phone' ? 'phone2' : props.name.toLowerCase()}.svg`}
				width={30}
			/>
			{props.name === 'Location' ? (
				<h2 className='text-xl'>{address}</h2>
			) : (
				<Link href={props.name === 'Phone' ? `tel:${phoneNumber}` : `mailto:${email}`}>
					<h2 className={`${props.name === 'Phone' ? 'text-3xl' : 'text-xl underline'} font-extrabold`}>
						{props.name === 'Phone' ? phoneNumber : email}
					</h2>
				</Link>
			)}
		</div>
	);
}
