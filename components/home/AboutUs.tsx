import Image from 'next/image';
import { Separator } from '../ui/separator';
import { companyName } from '@/lib/constants';

export default function AboutUs() {
	return (
		<section className='relative flex h-[220vh] w-full justify-center text-white lg:h-[200vh]'>
			<div className='absolute -z-10 h-full w-full bg-blue-900 opacity-50 mix-blend-multiply lg:h-[90%]'></div>
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
				className='absolute top-1/2 -z-20 h-1/2 w-full lg:h-2/5'
				height={50}
				src='/images/route-hero.jpg'
				width={1080}
			/>

			<div className='relative flex w-[90vw] grid-cols-2 flex-col gap-20 gap-y-10 pt-10 lg:grid lg:w-3/5'>
				<p></p>

				<div className='flex flex-col gap-4'>
					<div className='flex items-center gap-5'>
						<Separator className='w-8 bg-[#F7D7A7] lg:w-16' />
						<h2 className='flex-1 whitespace-nowrap font-bold text-[#F7D7A7] lg:text-xl'>About Us</h2>
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

				<div className='flex w-screen flex-col gap-4 lg:absolute lg:bottom-[48%] lg:gap-5'>
					<div className='flex items-center gap-2'>
						<h1 className='text-4xl font-extrabold text-[#F7D7A7] lg:text-9xl'>10</h1>
						<p className='font-bold lg:text-lg'>
							%
							<br className='max-lg:hidden' />
							<br className='max-lg:hidden' />
							Increase in
							<br />
							Property Value *
						</p>
					</div>

					<div className='flex items-center gap-2 lg:ml-10'>
						<h1 className='text-4xl font-extrabold text-[#F7D7A7] lg:text-9xl'>2,970</h1>
						<p className='font-bold lg:text-lg'>
							Happy
							<br />
							Owners
						</p>
					</div>

					<div className='lg:ml-20 flex items-center gap-2'>
						<h1 className='text-4xl font-extrabold text-[#F7D7A7] lg:text-9xl'>32,876,449</h1>
						<p className='text-sm font-bold lg:text-lg'>
							Nails Used*
							<br className='max-lg:hidden' />
							<br />
							<span className='text-xs italic lg:text-sm'>
								*Guestimate.
								<br />
								We don&apos;t actually count
							</span>
						</p>
					</div>
				</div>

				<div className='col-span-2 flex flex-col gap-4 lg:gap-5'>
					<h1 className='text-4xl font-extrabold'>More Than Electricians...</h1>

					<p className='lg:w-3/5'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa impedit, facilis obcaecati facere omnis
						tempore at beatae aut blanditiis aspernatur. Porro tempore commodi sequi nisi voluptatem suscipit recusandae
						soluta. Eligendi.
					</p>

					<div className='grid grid-cols-1 gap-y-6 max-lg:ml-2 lg:w-2/3 lg:grid-cols-4'>
						<div className='flex items-center gap-2 lg:flex-col lg:justify-center'>
							<Image
								alt='Service 1'
								className='duration-900 transition-transform hover:scale-110'
								height={50}
								src='/icons/location.svg'
								width={50}
							/>

							<p className='font-bold'>Service 1</p>
						</div>

						<div className='flex items-center gap-2 lg:flex-col lg:justify-center'>
							<Image
								alt='Service 2'
								className='duration-900 transition-transform hover:scale-110'
								height={50}
								src='/icons/location.svg'
								width={50}
							/>

							<p className='font-bold'>Service 2</p>
						</div>

						<div className='flex items-center gap-2 lg:flex-col lg:justify-center'>
							<Image
								alt='Service 3'
								className='duration-900 transition-transform hover:scale-110'
								height={50}
								src='/icons/location.svg'
								width={50}
							/>

							<p className='font-bold'>Service 3</p>
						</div>

						<div className='flex items-center gap-2 lg:flex-col lg:justify-center'>
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

					<h1 className='text-3xl font-extrabold max-lg:mt-5'>How our team keeps you safe</h1>

					<ul className='ml-4 flex flex-col gap-5 lg:ml-20'>
						{[1, 2, 3].map((service: number) => (
							<li
								key={service}
								className='flex items-center gap-5'
							>
								<Image
									alt='Checkmark'
									height={20}
									src='/icons/checkmark.svg'
									width={20}
								/>

								<p className='font-semibold'>Service {service}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
