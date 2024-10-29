import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { Separator } from './ui/separator';
import { address, companyName, email, phoneNumber, socials } from '@/lib/constants';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import ContactForm from './ContactForm';

export default function Footer() {
	return (
		<footer className='relative flex h-[160vh] w-screen items-center justify-center lg:h-[100vh]'>
			<Image
				alt='Footer'
				className='absolute -z-10 flex size-full items-center justify-center'
				height={200}
				src='/images/footer.jpg'
				width={1080}
			/>
			<div className='absolute inset-0 -z-10 bg-blue-900 opacity-50 mix-blend-multiply'></div>

			<section className='flex size-[96%] flex-col items-center justify-end gap-20 border border-[#F7D7A7] pb-10'>
				<div className='flex items-center gap-5 max-lg:flex-col lg:justify-evenly'>
					<div className='flex flex-col justify-between gap-5 max-lg:pl-5 lg:w-2/5 lg:gap-8'>
						<div className='flex items-center gap-5'>
							<Separator className='w-12 bg-[#F7D7A7]' />
							<h2 className='flex-1 whitespace-nowrap font-bold text-[#F7D7A7] lg:text-xl'>{companyName}</h2>
						</div>

						<h1 className='text-4xl font-extrabold text-white lg:text-6xl'>
							Our <span className='bg-highlighted-gradient px-2'>Promise</span>
						</h1>

						<p className='text-white lg:text-lg'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam soluta placeat recusandae nisi,
							laboriosam consectetur! Eaque officiis nesciunt optio, vel consequatur quisquam? Officiis doloribus
							adipisci, dolores a corrupti sapiente. Architecto?
						</p>

						<div className='flex flex-col gap-1 text-white'>
							<h2 className='text-2xl lg:text-3xl'>Name</h2>
							<h3 className='text-lg'>Company Role</h3>
						</div>

						<div className='flex flex-col justify-between gap-4 text-white'>
							<div className='flex items-center gap-5'>
								<Image
									alt='Phone'
									height={30}
									src='/icons/phone2.svg'
									width={30}
								/>
								<Link href={`tel:${phoneNumber}`}>
									<h2 className='text-2xl font-extrabold lg:text-3xl'>{phoneNumber}</h2>
								</Link>
							</div>

							<div className='flex items-center gap-5'>
								<Image
									alt='Email'
									height={30}
									src='/icons/email.svg'
									width={30}
								/>
								<Link href={`mailto:${email}`}>
									<h2 className='text-sm lg:text-xl'>{email}</h2>
								</Link>
							</div>

							<div className='flex items-center gap-5'>
								<Image
									alt='Location'
									height={30}
									src='/icons/location.svg'
									width={30}
								/>
								<h2 className='text-sm lg:text-xl'>{address}</h2>
							</div>
						</div>
					</div>

					<ContactForm />
				</div>

				<div className='flex w-full items-center max-lg:flex-col max-lg:gap-5 lg:justify-evenly'>
					<div className='flex items-center gap-5 lg:w-2/5'>
						{Object.entries(socials).map(([key, value]: [string, string]) => (
							<Link
								key={key}
								className='group'
								href={value}
								target='_blank'
							>
								<Image
									alt={key}
									className='lg:duration-900 lg:transition-transform lg:group-hover:scale-110'
									height={25}
									src={`/icons/${key.toLowerCase()}.svg`}
									width={25}
								/>
							</Link>
						))}
					</div>

					<p className='text-center text-white lg:w-1/4 lg:text-end'>&copy; {companyName} 2024</p>
				</div>
			</section>
		</footer>
	);
}
