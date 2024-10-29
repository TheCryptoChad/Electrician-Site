import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { phoneNumber } from '@/lib/constants';

export default function Header() {
	return (
		<header className='bg-header-gradient flex h-[2.5rem] w-screen justify-around px-2 lg:h-[3.5rem] lg:px-24'>
			<div className='hidden flex-1 items-center font-bold text-white transition-transform duration-300 hover:scale-110 lg:flex'>
				Monday - Friday: 8:00 AM - 5:00 PM
			</div>

			<div className='flex flex-1 items-center gap-2 font-bold text-white lg:hidden'>
				<Image
					alt='Phone'
					className='brightness-0 invert filter'
					height={25}
					src='/icons/phone2.svg'
					width={25}
				/>{' '}
				{phoneNumber}
			</div>

			<Link
				className='hidden flex-1 justify-end lg:flex'
				href={`tel:${phoneNumber}`}
			>
				<Button className='bg-header-button-gradient group h-full w-1/2 rounded-none text-2xl font-extrabold text-black hover:text-white'>
					<>
						<Image
							alt='Phone'
							className='duration-900 transition-transform group-hover:invert group-hover:filter'
							height={40}
							src='/icons/phone.svg'
							width={40}
						/>{' '}
						{phoneNumber}
					</>
				</Button>
			</Link>

			<div className='flex items-center gap-2 lg:hidden'>
				<Link href={`tel:${phoneNumber}`}>
					<Button className='bg-header-button-gradient h-1/2 rounded-sm border border-black py-1 font-extrabold text-black'>
						CALL
					</Button>
				</Link>
				<Link href={`sms:${phoneNumber}`}>
					<Button className='bg-header-button-gradient h-1/2 rounded-sm border-2 border-black py-1 font-extrabold text-black'>
						TEXT
					</Button>
				</Link>
			</div>
		</header>
	);
}
