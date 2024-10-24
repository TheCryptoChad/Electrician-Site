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
		<nav className='flex h-1/3 items-center justify-between w-[90%] pt-5 px-20 text-xl font-bold text-white'>
			<Image
				alt='Logo'
				height={80}
				src='/images/logo.png'
				width={80}
			/>
			<NavigationMenu>
				<NavigationMenuList className='gap-8'>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Services</NavigationMenuTrigger>
						<NavigationMenuContent>
                        <ul className="grid columns-2 gap-3 w-[400px]">
                            {services.map((service: string) => (
                                <li key={service} className="">
                                    <NavigationMenuLink href={service.split(' ').join('-').toLowerCase()}>{service}</NavigationMenuLink>
                                    <Separator className='w-[90%]' />
                                </li>
                            ))}
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
