import Link from 'next/link';
import Image from 'next/image';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from './ui/navigation-menu';
import { services } from '@/lib/constants';
import { Separator } from './ui/separator';
import { Fragment } from 'react';

export default function Navbar() {
	return (
		<nav className='flex h-1/3 w-[90%] items-center justify-between px-20 pt-5 text-xl font-bold text-white'>
			<Link href='/'>
				<Image
					alt='Logo'
					height={80}
					src='/images/logo.png'
					width={80}
				/>
			</Link>
			<NavigationMenu>
				<NavigationMenuList className='gap-8'>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Services</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[400px] grid-cols-2 gap-2 p-4 pr-0'>
								{services.map((service: string, index: number) => {
									const notLastRow = index < services.length - 2;

									return (
										<li key={service}>
											<NavigationMenuLink
												className={'hover:text-[#878787]'}
												href={service.split(' ').join('-').toLowerCase()}
											>
												{service}
											</NavigationMenuLink>
											{notLastRow && <Separator className='mt-2 w-[90%]' />}
										</li>
									);
								})}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link
							href='/review'
							legacyBehavior
							passHref
						>
							<NavigationMenuLink>Review</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link
							href='/financing'
							legacyBehavior
							passHref
						>
							<NavigationMenuLink>Financing</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link
							href='/learning'
							legacyBehavior
							passHref
						>
							<NavigationMenuLink>Learning Hub</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link
							href='/contact'
							legacyBehavior
							passHref
						>
							<NavigationMenuLink>Contact Us</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
}
