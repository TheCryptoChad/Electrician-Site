'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from './ui/breadcrumb';

export default function RouteHero() {
	const path = usePathname();
	const route = path.slice(1).charAt(0).toUpperCase() + path.slice(2);

	return (
		<section className='relative flex h-1/2 w-screen flex-col items-center gap-8'>
			<Image
				alt='Hero'
				className='absolute -z-10 flex size-full items-center justify-center object-cover object-top'
				height={50}
				src='/images/route-hero.jpg'
				width={1080}
			/>
			<Navbar />
			<div className='flex w-[90%] flex-col items-start justify-center gap-2 py-6 pl-20'>
				<h1 className='text-4xl font-extrabold text-white'>{route}</h1>
				<Breadcrumb>
					<BreadcrumbList className='text-lg font-bold text-white'>
						<BreadcrumbItem>
							<BreadcrumbLink className='hover:text-white'>
								<Link href='/'>Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator className='text-[#F7D7A7]' />
						<BreadcrumbItem>
							<BreadcrumbPage className='font-bold text-[#F7D7A7]'>{route}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</section>
	);
}