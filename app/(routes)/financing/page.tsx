import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Page() {
	return (
		<section className='flex h-screen flex-col items-center justify-center py-20'>
			<div className='relative flex w-5/6 flex-col gap-5 rounded-md border bg-white px-8 pb-10 pt-4 shadow-lg lg:w-1/4'>
				<h1 className='text-center text-2xl font-bold'>Financing Calculator</h1>

				<div className='flex flex-col gap-4 text-lg'>
					<div className='grid w-full max-w-sm items-center gap-2'>
						<Label htmlFor='project-cost'>Project Cost</Label>
						<Input
							disabled
							id='project-cost'
							placeholder='$12,000.00'
							type='text'
						/>
					</div>

					<div className='grid w-full max-w-sm items-center gap-2'>
						<Label htmlFor='credit-score'>Your Credit Score</Label>
						<Input
							disabled
							id='credit-score'
							placeholder='Excellent (741 - 850)'
							type='text'
						/>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center text-[#878787]'>
					<h3>Estimated</h3>

					<h2>
						<span className='text-2xl font-extrabold'>$257.87</span> /mo.
					</h2>
				</div>

				<div className='gird-cols-3 grid gap-x-4 gap-y-2 rounded bg-gray-200 p-2 text-sm'>
					<p className='col-span-2'>Principal</p>
					<p className='text-end'>$12,000.00</p>
					<p className='col-span-2'>Interest</p>
					<p className='text-end'>$3,472.04</p>

					<Separator className='col-span-3 w-full self-center bg-black' />

					<p className='col-span-2 font-bold'>Total Loan Cost Estimate</p>
					<p className='text-end font-bold'>$15,472.04</p>
				</div>

				<p className='text-sm font-bold'>Get your personalized rates.</p>

				<p className='text-justify text-sm'>This takes two minutes and does not affect your credit score.</p>

				<Link
					className='absolute -bottom-6 left-0 flex w-full justify-center'
					href='/contact-us'
				>
					<Button className='bg-header-button-gradient h-12 w-[80%] rounded-lg text-lg font-bold transition-transform duration-300 hover:scale-110'>
						Get Financing Options
					</Button>
				</Link>
			</div>
		</section>
	);
}
