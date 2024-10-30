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
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Separator } from './ui/separator';
import { services } from '@/lib/constants';
const routes = ['/', '/reviews', '/financing', '/learning-hub', '/contact-us'];

export default function Navbar() {
	return (
		<nav className='flex h-1/3 w-[90%] items-center justify-between px-5 pt-5 text-xl font-bold text-white lg:px-20'>
			<Link href='/'>
				<Image
					alt='Logo'
					height={80}
					src='/images/logo.png'
					width={80}
				/>
			</Link>

			<NavigationMenu>
				<NavigationMenuList className='gap-8 max-lg:hidden'>
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

					{routes.slice(1).map((route) => (
						<NavigationMenuItem key={route}>
							<Link
								href={route}
								legacyBehavior
								passHref
							>
								<NavigationMenuLink>
									{route
										.slice(1)
										.split('-')
										.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
										.join(' ')}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>

			<Drawer>
				<DrawerTrigger className='bg-header-gradient fixed right-10 z-50 rounded-full p-2 lg:hidden'>
					<Image
						alt='Menu'
						height={25}
						src='/icons/menu.svg'
						width={25}
					/>
				</DrawerTrigger>

				<DrawerContent className='bg-drawer-gradient flex h-screen flex-col items-center justify-center gap-10 rounded-none border-none'>
					<DrawerTitle className='flex w-1/3 justify-end'>
						<DrawerClose className='bg-header-button-gradient size-6 rounded-full text-black hover:text-white'>
							X
						</DrawerClose>
					</DrawerTitle>

					{routes.map((route) => (
						<Link
							key={route}
							className='text-xl font-extrabold text-white hover:text-[#F7D7A7]'
							href={route}
						>
							<DrawerClose>
								{route === '/'
									? 'Home'
									: route
											.slice(1)
											.split('-')
											.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
											.join(' ')}
							</DrawerClose>
						</Link>
					))}
				</DrawerContent>
			</Drawer>
		</nav>
	);
}
