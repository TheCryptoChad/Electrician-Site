import { companyName } from '@/lib/constants';
import Image from 'next/image';
import { Separator } from '../ui/separator';

export default function AboutUs() {
	return (
		<section className='relative flex h-[200vh] w-full justify-center text-white'>
			<div className='absolute -z-10 h-[90%] w-full bg-blue-900 opacity-50 mix-blend-multiply'></div>
			<div className='absolute top-0 -z-10 h-1/2 w-full bg-gradient-to-r from-transparent to-[#13192C]'></div>

			<Image
				alt='Hero'
				className='absolute top-0 -z-20 h-1/2 w-full'
				height={50}
				src='/images/route-hero.jpg'
				width={1080}
			/>
			<Image
				alt='Hero'
				className='absolute top-1/2 -z-20 h-2/5 w-full'
				height={50}
				src='/images/route-hero.jpg'
				width={1080}
			/>

			<div className='relative grid w-3/5 gap-y-10 grid-cols-2 pt-10'>
				<div className='absolute bottom-[48%] w-screen flex flex-col gap-5'>
					<div className='flex items-center gap-2'>
						<h1 className='text-9xl font-extrabold text-[#F7D7A7]'>10</h1>
						<p className='text-lg font-bold'>
							%<br /><br />
							Increase in
							<br />
							Property Value *
						</p>
					</div>

					<div className='ml-10 flex items-center gap-2'>
						<h1 className='text-9xl font-extrabold text-[#F7D7A7]'>2,970</h1>
						<p className='text-lg font-bold'>
							Happy
							<br />
							Owners
						</p>
					</div>

					<div className='ml-20 flex items-center gap-2'>
						<h1 className='text-9xl font-extrabold text-[#F7D7A7]'>32,876,449</h1>
						<p className='text-lg font-bold'>
							Nails Used*
							<br /><br />
							<span className='text-sm italic'>
								*Guestimate.
								<br />
								We don&apos;t actually count
							</span>
						</p>
					</div>
				</div>

				<p></p>

				<div className='flex flex-col gap-10'>
					<div className='flex items-center gap-5'>
						<Separator className='w-16 bg-[#F7D7A7]' />
						<h2 className='flex-1 whitespace-nowrap text-xl font-bold text-[#F7D7A7]'>About Us</h2>
					</div>
					<h1 className='text-4xl font-extrabold'>{companyName}</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit, facilis obcaecati facere omnis
						tempore at beatae aut blanditiis aspernatur. Porro tempore commodi sequi nisi voluptatem suscipit recusandae
						soluta. Eligendi.
						<br />
						<br />
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit, facilis obcaecati facere omnis
						tempore at beatae aut blanditiis aspernatur. Porro tempore commodi sequi nisi voluptatem suscipit recusandae
						soluta. Eligendi.
						<br />
						<br />
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit, facilis obcaecati facere omnis
						tempore at beatae aut blanditiis aspernatur. Porro tempore commodi sequi nisi voluptatem suscipit recusandae
						soluta. Eligendi.
					</p>
				</div>

				<div className='col-span-2 flex flex-col gap-5'>
					<h1 className='text-4xl font-extrabold'>More Than Electricians...</h1>
					<p className='w-3/5'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit, facilis obcaecati facere omnis
						tempore at beatae aut blanditiis aspernatur. Porro tempore commodi sequi nisi voluptatem suscipit recusandae
						soluta. Eligendi.
					</p>

					<div className='grid w-2/3 grid-cols-4'>
						<div className='flex flex-col items-center justify-center gap-2'>
							<Image
								alt='Service 1'
								className='duration-900 transition-transform hover:scale-110'
								height={50}
								src='/icons/location.svg'
								width={50}
							/>
							<p className='font-bold'>Service 1</p>
						</div>
						<div className='flex flex-col items-center justify-center gap-2'>
							<Image
								alt='Service 2'
								className='duration-900 transition-transform hover:scale-110'
								height={50}
								src='/icons/location.svg'
								width={50}
							/>
							<p className='font-bold'>Service 2</p>
						</div>
						<div className='flex flex-col items-center justify-center gap-2'>
							<Image
								alt='Service 3'
								className='duration-900 transition-transform hover:scale-110'
								height={50}
								src='/icons/location.svg'
								width={50}
							/>
							<p className='font-bold'>Service 3</p>
						</div>
						<div className='flex flex-col items-center justify-center gap-2'>
							<Image
								alt='Service 4'
								className='duration-900 transition-transform hover:scale-110'
								height={50}
								src='/icons/location.svg'
								width={50}
							/>
							<p className='font-bold'>Service 4</p>
						</div>
					</div>

					<h1 className='text-3xl font-extrabold'>How our team keeps you safe</h1>
					<ul className='ml-20 flex flex-col gap-5'>
						<li className='flex items-center gap-5'>
							<Image
								alt='Checkmark'
								height={20}
								src='/icons/checkmark.svg'
								width={20}
							/>
							<p className='font-semibold'>Service 1</p>
						</li>

						<li className='flex items-center gap-5'>
							<Image
								alt='Checkmark'
								height={20}
								src='/icons/checkmark.svg'
								width={20}
							/>
							<p className='font-semibold'>Service 1</p>
						</li>

						<li className='flex items-center gap-5'>
							<Image
								alt='Checkmark'
								height={20}
								src='/icons/checkmark.svg'
								width={20}
							/>
							<p className='font-semibold'>Service 1</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
