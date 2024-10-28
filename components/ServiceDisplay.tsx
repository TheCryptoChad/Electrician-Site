'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const serviceSteps = {
	'Service 1': {
		'Step Name': {
			title: 'Step Name',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
		'Step Name 2': {
			title: 'Step Name 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
		'Step Name 3': {
			title: 'Step Name 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
	},
	'Service 2': {
		'Step Name': {
			title: 'Step Name',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
		'Step Name 2': {
			title: 'Step Name 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
		'Step Name 3': {
			title: 'Step Name 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
	},
	'Service 3': {
		'Step Name': {
			title: 'Step Name',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
		'Step Name 2': {
			title: 'Step Name 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
		'Step Name 3': {
			title: 'Step Name 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.jpg',
		},
	},
} as const;

type Service = keyof typeof serviceSteps;
type Step = keyof (typeof serviceSteps)[Service];

export default function ServiceDisplay() {
	const [selectedService, setSelectedService] = useState<Service>('Service 1');
	const [selectedStep, setSelectedStep] = useState<Step>('Step Name');

	return (
		<div className='flex w-full items-center justify-center gap-5 h-[60vh] z-20'>
			<div className='flex w-1/12 flex-col items-center justify-around h-full'>
				{Object.keys(serviceSteps).map((service) => (
					<Button
						key={service}
						className={`${selectedService === service ? 'bg-header-button-gradient text-black' : 'bg-[#3C3C3C]'} hover:bg-header-button-gradient border rotate-90 rounded-none font-extrabold`}
						onClick={() => {
							setSelectedService(service as Service);
							setSelectedStep(Object.keys(serviceSteps[service as Service])[0] as Step);
						}}
					>
						{service}
					</Button>
				))}
			</div>

			<div className='flex w-3/12 flex-col items-center justify-between h-full'>
				{Object.entries(serviceSteps[selectedService]).map(([key, value]) => (
					<div
						key={key}
						className='flex cursor-pointer gap-5 items-center flex-1 justify-between'
						onClick={() => setSelectedStep(key as Step)}
					>
						<h2 className={`${key === selectedStep && 'underline'} font-extrabold text-xl`}>{key}</h2>
						<Image
							alt={key}
                            className='h-[70%] rounded-lg w-1/2 z-10'
							height={80}
							src={value.image}
							width={80}
						/>
					</div>
				))}
			</div>
			<div className='relative w-2/3 h-full flex flex-col justify-end gap-5 pb-12 px-16'>
				<Image
					alt={selectedStep}
					className='absolute size-[90%] top-[5%] left-[5%] rounded-xl -z-10'
					height={200}
					src={serviceSteps[selectedService][selectedStep].image}
					width={200}
				/>
				<h2 className='font-extrabold text-3xl'><span className='text-[#F7D7A7]'>01. </span>{serviceSteps[selectedService][selectedStep].title}</h2>
				<p className='text-justify'>{serviceSteps[selectedService][selectedStep].description}</p>
			</div>
		</div>
	);
}
