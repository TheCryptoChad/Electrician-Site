import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { companyName, socials } from '@/lib/constants';

export const metadata: Metadata = {
	title: `Learning Hub | ${companyName}`,
};

export default function Page() {
	return (
		<section className='flex flex-col items-center justify-center gap-10 py-20'>
			<div className='flex w-4/5 flex-col gap-4'>
				<h1 className='text-4xl'>Why we create content?</h1>
				<p className='text-[#7a7a7a]'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum delectus, provident reprehenderit ducimus ex
					rerum commodi inventore ut, perspiciatis error dolores sint dicta! Animi, voluptate repellat. Dolorum saepe
					iusto labore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum delectus, provident
					reprehenderit ducimus ex rerum commodi inventore ut, perspiciatis error dolores sint dicta! Animi, voluptate
					repellat. Dolorum saepe iusto labore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
					delectus, provident reprehenderit ducimus ex rerum commodi inventore ut, perspiciatis error dolores sint
					dicta! Animi, voluptate repellat. Dolorum saepe iusto labore?
				</p>
			</div>

			<div className='w-4/5'>
				<script
					src='https://static.elfsight.com/platform/platform.js'
					async
				></script>
				<div
					className='elfsight-app-716e5c51-9ae2-4461-b127-b4737e4e3a26'
					data-elfsight-app-lazy
				></div>
			</div>

			<Link
				className='flex w-full justify-center'
				href={socials.Youtube}
				target='_blank'
			>
				<Button className='bg-header-button-gradient h-12 w-2/3 rounded-lg text-lg font-bold text-black transition-transform duration-300 hover:scale-110 lg:w-[20%]'>
					Join The Community!
				</Button>
			</Link>
		</section>
	);
}
