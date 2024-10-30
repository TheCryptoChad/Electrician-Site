import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import ServiceDisplay from '../ServiceDisplay';

const rating: number = 4.9;
const stars = Array.from({ length: Math.ceil(rating) }, () => 1);

export default function Reviews() {
	return (
		<section className='flex w-full flex-col items-center gap-20 py-10'>
			<div className='flex w-full justify-center px-2 pt-10 lg:px-40'>
				<div className='flex items-center justify-center gap-5 py-4 max-lg:w-[90vw] max-lg:flex-col'>
					<div className='w-full lg:w-1/2'>
						<h1 className='text-2xl font-extrabold lg:text-5xl'>Electrician Company in County, FL</h1>

						<p>
							<b>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam delectus voluptate necessitatibus quo,
								possimus voluptas vel cumque architecto! Est magnam doloribus itaque officiis, sunt dolor voluptas
								aliquam repellat voluptatibus repudiandae?
							</b>
							<br />
							<br />
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam delectus voluptate necessitatibus quo,
							possimus voluptas vel cumque architecto! Est magnam doloribus itaque officiis, sunt dolor voluptas aliquam
							repellat voluptatibus repudiandae?
							<br />
							<br />
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam delectus voluptate necessitatibus quo,
							possimus voluptas vel cumque architecto! Est magnam doloribus itaque officiis, sunt dolor voluptas aliquam
							repellat voluptatibus repudiandae?
							<br />
							<br />
						</p>
					</div>

					<video className='h-[30vh] w-full border lg:h-2/3 lg:w-1/2' />
				</div>
			</div>

			<div className='relative w-[90vw] bg-[#13192C] text-white'>
				<div className='bg-header-button-gradient absolute left-1/2 top-0 flex h-40 w-4/5 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 py-5'>
					<div className='flex items-center gap-2'>
						{stars.map((_, index: number) => {
							return (
								<Fragment key={index}>
									{rating < stars.length && index === stars.length - 1 ? (
										<Image
											alt='Half Star'
											height={30}
											src='/icons/star-half.svg'
											width={30}
										/>
									) : (
										<Image
											alt='Full Star'
											height={30}
											src='/icons/star.svg'
											width={30}
										/>
									)}
								</Fragment>
							);
						})}
					</div>

					<div className='flex items-start gap-2'>
						<Image
							alt='Google'
							className='mt-1'
							height={20}
							src='/icons/google.svg'
							width={20}
						/>

						<p className='text-center text-sm font-bold'>
							<span className='text-lg'>GOOGLE RATING</span>
							<br />
							{rating}
							<br />
							STARS
						</p>
					</div>
				</div>

				<div className='mt-28 flex flex-col items-center gap-5'>
					<h1 className='text-4xl font-extrabold max-lg:text-center lg:text-6xl'>Our Electrician Services</h1>

					<ServiceDisplay />
				</div>

				<div className='relative m-10 flex w-full flex-col gap-5 lg:m-20'>
					<Image
						alt='5 Reasons'
						className='absolute -left-20 -top-10 z-10 h-[115%] w-full max-lg:hidden'
						height={200}
						src='/images/route-hero.jpg'
						width={200}
					/>

					<div className='z-20 flex w-1/2 flex-col'>
						<h2 className='text-xl font-extrabold lg:text-2xl'>
							<span className='text-[#F7D7A7]'>5 REASONS</span> TO GET A
						</h2>

						<h1 className='text-4xl font-extrabold lg:text-6xl'>Service Name</h1>

						<Separator className='mt-2 w-2/3 bg-white lg:mt-5' />
					</div>

					{['First', 'Second', 'Third', 'Fourth', 'Fifth'].map((step: string, index: number) => (
						<div
							key={step}
							className='z-20 w-[80%] lg:w-1/2'
						>
							<p className='mb-1 text-2xl font-extrabold'>
								<span className='mr-2 text-[#F7D7A7]'>0{index + 1}.</span> {step} step
							</p>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta
								modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea
								soluta?
							</p>
						</div>
					))}
				</div>
			</div>

			<div className='flex flex-col items-center gap-5 max-lg:w-[90vw]'>
				<h1 className='text-center text-4xl font-extrabold lg:text-6xl'>A Rock Solid Reputation</h1>

				<p className='text-center'>
					Read what our happy customers are saying about their experience of working with us.
				</p>

				<script
					src='https://static.elfsight.com/platform/platform.js'
					async
				></script>
				<div
					className='elfsight-app-b6270ddc-ed57-4f44-acad-3778bca8af78'
					data-elfsight-app-lazy
				></div>

				<Link href='/reviews'>
					<Button className='bg-header-button-gradient h-12 w-72 rounded-lg text-2xl font-bold text-black transition-transform duration-300 hover:scale-110 lg:w-96'>
						Visit Our Reviews Page
					</Button>
				</Link>
			</div>
		</section>
	);
}
