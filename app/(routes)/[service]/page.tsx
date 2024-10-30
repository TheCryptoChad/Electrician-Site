import { PageProps } from '@/.next/types/app/page';
import { servicePages } from '@/lib/constants';

type Props = PageProps & {
	params: {
		service: string;
	};
};

export default async function Page(props: Props) {
	const service: keyof typeof servicePages = (await props.params).service
		.split('-')
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ') as keyof typeof servicePages;

	return (
		<section className='flex flex-col items-center gap-10 p-10'>
			<article className='flex w-[90vw] flex-col items-center gap-10 rounded-3xl bg-[#F1F1F1] p-10 text-black lg:w-3/5'>
				<div className='flex flex-col gap-2'>
					<h1 className='text-center text-2xl font-extrabold lg:text-5xl'>
						<span className='bg-highlighted-gradient px-2 text-white'>Random County,</span> FL {service} Contractor
					</h1>

					<p className='text-center'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum impedit libero sunt placeat, illum repellat
						beatae nisi alias cumque ipsam ea voluptatibus nam cupiditate quisquam soluta. Beatae facilis eius ratione?
					</p>
				</div>

				<div className='flex w-4/5 flex-col items-center gap-5 font-bold'>
					<p className='w-full'>We specialize in:</p>

					<ul className='grid w-4/5 grid-cols-1 gap-x-10 max-lg:gap-y-5 lg:grid-cols-2'>
						{servicePages[service].specializations.map((specialization: string) => (
							<li key={specialization}>• {specialization}</li>
						))}
					</ul>
				</div>
			</article>

			<div className='flex justify-between gap-10 px-2 max-lg:w-[90vw] max-lg:flex-col lg:px-20'>
				<div className='flex flex-1 flex-col gap-5'>
					<h2 className='text-2xl font-extrabold lg:text-5xl'>
						Top Rated & Reviewed {service} Contractor Serving X, Y, Z, and surrounding counties.
					</h2>

					<p>{servicePages[service].contractorDescription}</p>
				</div>

				<div className='flex flex-1 flex-col gap-5'>
					<h2 className='text-2xl font-extrabold lg:text-5xl'>What are the benefits of {service}?</h2>

					<ul>
						{servicePages[service].benefits.map((benefit: string) => (
							<li key={benefit}>
								<span className='mr-2 font-bold'>•</span> {benefit}
							</li>
						))}
					</ul>

					<p>
						Contact us today for help – we are a family owned business. We do the job right at a fair price, and we only
						use quality materials & expert installers.{' '}
						<span className='font-bold'>Call today for a FREE estimate!</span>
					</p>
				</div>
			</div>
		</section>
	);
}
