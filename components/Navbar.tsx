import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { phoneNumber } from '@/lib/constants';

export default function Navbar() {
	return (
		<header className='flex h-[3.5rem] w-screen justify-around bg-navbar-gradient px-24'>
			<div className='flex flex-1 items-center font-bold text-white transition-transform duration-300 hover:scale-110'>
				Monday - Friday: 8:00 AM - 5:00 PM
			</div>
			<Link
				className='flex flex-1 justify-end'
				href={`tel:${phoneNumber}`}
			>
				<Button className='group h-full w-1/2 rounded-none bg-navbar-button-gradient text-2xl font-extrabold text-black hover:text-white'>
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
		</header>
	);
}
