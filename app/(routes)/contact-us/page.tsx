import ContactForm from '@/components/ContactForm';
import { Separator } from '@/components/ui/separator';
import { companyName, phoneNumber, email, address, socials } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
	return (
		<section className='flex flex-col items-center justify-center gap-16 py-20'>
			<div className='flex items-center justify-evenly w-4/5'>
				<div className='flex flex-col justify-between h-full gap-8'>
					<h1 className='text-4xl font-extrabold text-black'>Contact Us</h1>

					<div className='flex flex-col justify-between gap-4 text-[#54595F]'>
						<div className='flex items-center gap-5 hover:text-black'>
							<Image
								alt='Phone'
								className='filter invert'
								height={30}
								src='/icons/phone2.svg'
								width={30}
							/>
							<Link href={`tel:${phoneNumber}`}>
								<h2 className='text-3xl font-extrabold'>{phoneNumber}</h2>
							</Link>
						</div>
						<div className='flex items-center gap-5 hover:text-black'>
							<Image
								alt='Email'
								className='filter invert'
								height={30}
								src='/icons/email.svg'
								width={30}
							/>
							<Link href={`mailto:${email}`}>
								<h2 className='text-xl underline'>{email}</h2>
							</Link>
						</div>
						<div className='flex items-center gap-5 hover:text-black'>
							<Image
								alt='Location'
								className='filter invert'
								height={30}
								src='/icons/location.svg'
								width={30}
							/>
							<h2 className='text-xl'>{address}</h2>
						</div>
					</div>

					<Image alt='Google Review' height={80} src='/images/google-review.webp' width={200} />
				</div>

				<ContactForm />
			</div>

			<div className="bg-white relative w-[65%] h-[80vh]">
					<iframe 
						className="border-none relative size-full z-20"
						loading="lazy"  
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=New%20York%2C%20wendys&zoom=10&maptype=roadmap">
					</iframe>
					<a className='text-black absolute left-0 top-0 z-0' href="https://www.zrivo.com/nebraska-paycheck-calculator">Nebraska Paycheck Calculator</a>
				</div>
		</section>
	);
}
