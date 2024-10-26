'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

type Props = {
	title: string;
	description: string;
	images: string[];
	cost: string;
	time: string;
	type: string;
};

export default function Service(props: Props) {
	return (
		<article className='flex w-full justify-center gap-20'>
			<div>
				<Carousel
                    className='w-96 h-full'
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
							<CarouselItem key={image} className='border size-full h-80'>
								<Image
									alt={props.title}
                                    className='w-full h-full object-cover'
									height={200}
									src={image}
									width={100}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					{/* <CarouselPrevious />
					<CarouselNext /> */}
				</Carousel>
			</div>
			<div className='flex w-1/4 flex-col gap-6'>
				<h2 className='text-4xl font-extrabold'>{props.title}</h2>
				<p className='text-[#54595F]'>{props.description}</p>
				<div className='flex w-full flex-col gap-5 bg-[#F1F1F1] p-8 pr-4'>
					<h2 className='w-full text-start text-2xl font-bold text-[#F7D7A7]'>SERVICE DETAILS</h2>
					<div className='grid grid-cols-2 gap-5 text-nowrap'>
						<div>
							<div className='grid grid-cols-4 items-center'>
								<Image
									alt='Cost'
									height={20}
									src='/icons/cost.svg'
									width={20}
								/>
								<h3 className='col-span-3 font-bold'>APRX. COST</h3>
								<p></p>
								<p>{props.cost}</p>
							</div>
						</div>
						<div>
							<div className='grid grid-cols-4 items-center'>
								<Image
									alt='Time'
									height={20}
									src='/icons/time.svg'
									width={20}
								/>
								<h3 className='col-span-3 font-bold'>JOB TIME</h3>
								<p></p>
								<p>{props.time}</p>
							</div>
						</div>
						<div>
							<div className='grid grid-cols-4 items-center'>
								<Image
									alt='Type'
									height={20}
									src='/icons/type.svg'
									width={20}
								/>
								<h3 className='col-span-3 font-bold'>JOB TYPE</h3>
								<p></p>
								<p>{props.type}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
