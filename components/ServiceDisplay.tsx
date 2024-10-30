'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { serviceSteps } from '@/lib/constants';

type Service = keyof typeof serviceSteps;
type Step = keyof (typeof serviceSteps)[Service];

export default function ServiceDisplay() {
	const [selectedService, setSelectedService] = useState<Service>('Service 1');
	const [selectedStep, setSelectedStep] = useState<Step>('Step Name');

	return (
		<div className='z-20 flex w-full items-center justify-center gap-10 max-lg:flex-col lg:h-[60vh] lg:gap-5'>
			<div className='flex w-full items-center justify-around lg:h-full lg:w-1/12 lg:flex-col'>
				{Object.keys(serviceSteps).map((service) => (
					<Button
						key={service}
						className={`${selectedService === service ? 'bg-header-button-gradient text-black' : 'bg-[#3C3C3C]'} hover:bg-header-button-gradient rounded-none font-extrabold max-lg:w-1/4 lg:rotate-90 lg:border`}
						onClick={() => {
							setSelectedService(service as Service);
							setSelectedStep(Object.keys(serviceSteps[service as Service])[0] as Step);
						}}
					>
						{service}
					</Button>
				))}
			</div>

			<div className='grid w-full grid-cols-2 max-lg:gap-5 lg:flex lg:h-full lg:w-3/12 lg:flex-col lg:items-center lg:justify-between'>
				{Object.entries(serviceSteps[selectedService]).map(([key, value]) => (
					<div
						key={key}
						className='flex flex-1 cursor-pointer items-center justify-between max-lg:flex-col-reverse lg:gap-5'
						onClick={() => setSelectedStep(key as Step)}
					>
						<h2 className={`${key === selectedStep && 'max-lg:text-[#F7D7A7] lg:underline'} text-xl font-extrabold`}>
							{key}
						</h2>
						<Image
							alt={key}
							className='z-10 h-full w-3/4 rounded-lg lg:h-[70%] lg:w-1/2'
							height={80}
							src={value.image}
							width={80}
						/>
					</div>
				))}
			</div>

			<div className='relative flex h-[120%] w-[90%] flex-col justify-end gap-2 px-4 pb-2 pt-64 lg:h-full lg:w-2/3 lg:gap-5 lg:px-16 lg:pb-12'>
				<Image
					alt={selectedStep}
					className='absolute left-0 top-0 -z-10 size-full rounded-xl lg:left-[5%] lg:top-[5%] lg:size-[90%]'
					height={200}
					src={serviceSteps[selectedService][selectedStep].image}
					width={200}
				/>

				<h2 className='text-2xl font-extrabold lg:text-3xl'>
					<span className='text-[#F7D7A7]'>01. </span>
					{serviceSteps[selectedService][selectedStep].title}
				</h2>
				<p className='text-justify'>{serviceSteps[selectedService][selectedStep].description}</p>
			</div>
		</div>
	);
}
