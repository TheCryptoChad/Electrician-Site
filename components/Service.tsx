'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

type Props = {
	title: string;
	description: string;
	images: readonly string[];
	cost: string;
	time: string;
	type: string;
};

export default function Service(props: Props) {
	return (
		<article className='flex w-full gap-6 max-lg:flex-col lg:justify-center lg:gap-20'>
			<div className='flex flex-col gap-5 max-lg:w-full max-lg:px-5'>
				<h2 className='text-3xl font-extrabold lg:hidden'>{props.title}</h2>

				<Carousel
					className='h-full w-96 max-lg:h-[50vh] max-lg:w-full'
					opts={{ loop: true }}
					plugins={[
						Autoplay({
							playOnInit: true,
							delay: 3000,
						}),
					]}
				>
					<CarouselContent>
						{props.images?.map((image: string) => (
							<CarouselItem
								key={image}
								className='h-80 w-full border max-lg:h-[50vh]'
							>
								<Image
									alt={props.title}
									className='h-full w-full object-cover'
									height={200}
									src={image}
									width={100}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			<div className='flex w-full flex-col gap-6 max-lg:px-5 lg:w-1/4'>
				<h2 className='text-4xl font-extrabold max-lg:hidden'>{props.title}</h2>

				<p className='text-[#54595F]'>{props.description}</p>

				<div className='flex w-full flex-col gap-5 bg-[#F1F1F1] p-8 pr-4 max-lg:h-[35vh]'>
					<h2 className='w-full text-start text-2xl font-bold text-[#F7D7A7]'>SERVICE DETAILS</h2>

					<div className='grid grid-cols-2 gap-5 text-nowrap'>
						<ServiceDetails
							image='Cost'
							title='APRX. COST'
							value={props.cost}
						/>

						<ServiceDetails
							image='Time'
							title='JOB TIME'
							value={props.time}
						/>

						<ServiceDetails
							image='Type'
							title='JOB TYPE'
							value={props.type}
						/>
					</div>
				</div>
			</div>
		</article>
	);
}

type SDProps = {
	image: string;
	title: string;
	value: string;
};

function ServiceDetails(props: SDProps) {
	return (
		<div className='grid grid-cols-4 items-center'>
			<Image
				alt={props.image}
				height={20}
				src={`/icons/${props.image.toLowerCase()}.svg`}
				width={20}
			/>
			<h3 className='col-span-3 font-bold'>{props.title}</h3>
			<p></p>
			<p>{props.value}</p>
		</div>
	);
}
