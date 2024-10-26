import { PageProps } from '@/.next/types/app/page';
import { servicePages } from '@/lib/constants';

type Props = PageProps & {
	params: {
		service: string;
	};
};

export default function Page(props: Props) {
	const service: keyof typeof servicePages = props.params.service
		.split('-')
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ') as keyof typeof servicePages;

	return (
		<section className='flex flex-col items-center p-10 gap-10'>
			<article className='flex w-3/5 flex-col items-center bg-[#F1F1F1] p-10 gap-10 rounded-3xl text-black'>
				<div className='flex flex-col gap-2'><h1 className='text-5xl font-extrabold text-center'>
					<span className='bg-highlighted-gradient px-2 text-white'>Random County,</span> FL {service} Contractor
				</h1>
				<p className='text-center'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum impedit libero sunt placeat, illum repellat
					beatae nisi alias cumque ipsam ea voluptatibus nam cupiditate quisquam soluta. Beatae facilis eius ratione?
				</p></div>
				<div className='font-bold flex items-center flex-col gap-5 w-4/5'>
					<p className='w-full'>We specialize in:</p>
					<ul className='grid grid-cols-2 gap-x-10 w-4/5'>
						{servicePages[service].specializations.map((specialization: string) => (
							<li key={specialization}>• {specialization}</li>
						))}
					</ul>
				</div>
			</article>
			<div className='flex justify-between gap-10 px-20'>
				<div className='flex flex-col gap-5 flex-1'>
					<h2 className='font-extrabold text-5xl'>Top Rated & Reviewed {service} Contractor Serving X, Y, Z, and surrounding counties.</h2>
					<p>{servicePages[service].contractorDescription}</p>
				</div>
				<div className='flex flex-col gap-5 flex-1'>
					<h2 className='font-extrabold text-5xl'>What are the benefits of {service}?</h2>
					<ul>
						{servicePages[service].benefits.map((benefit: string) => (
							<li key={benefit}><span className='font-bold mr-2'>•</span> {benefit}</li>
						))}
					</ul>
					<p>
						Contact us today for help – we are a family owned business. We do the job right at a fair price, and we only
						use quality materials & expert installers. <span className='font-bold'>Call today for a FREE estimate!</span>
					</p>
				</div>
			</div>
		</section>
	);
}
