import { title } from 'process';

export const phoneNumber = '(210) 838-8117';

export const email = 'email@email.com';

export const address = '1234 Electrician St.';

export const companyName = 'Electrician Company LLC';

export const services = [
	'Service 1',
	'Service 2',
	'Service 3',
	'Service 4',
	'Service 5',
	'Service 6',
	'Service 7',
	'Service 8',
];

export const serviceDetails = {
	'Service 1': {
		title: 'Service 1',
		description: 'This is a description of service 1.',
		cost: '$100',
		time: '1 hour',
		type: 'Type 1',
		images: ['/images/home-hero.webp', '/images/route-hero.webp'],
	},
	'Service 2': {
		title: 'Service 2',
		description: 'This is a description of service 2.',
		cost: '$100',
		time: '1 hour',
		type: 'Type 1',
		images: ['/images/home-hero.webp', '/images/route-hero.webp'],
	},
	'Service 3': {
		title: 'Service 3',
		description: 'This is a description of service 3.',
		cost: '$100',
		time: '1 hour',
		type: 'Type 1',
		images: ['/images/home-hero.webp', '/images/route-hero.webp'],
	},
} as const;

export const servicePages = {
	'Service 1': {
		description: 'lorem ipsum',
		specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4'],
		benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
		contractorDescription: 'This is a description of the contractor.',
	},
	'Service 2': {
		description: 'lorem ipsum',
		specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4'],
		benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
		contractorDescription: 'This is a description of the contractor.',
	},
	'Service 3': {
		description: 'lorem ipsum',
		specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4'],
		benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
		contractorDescription: 'This is a description of the contractor.',
	},
	'Service 4': {
		description: 'lorem ipsum',
		specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4'],
		benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
		contractorDescription: 'This is a description of the contractor.',
	},
	'Service 5': {
		description: 'lorem ipsum',
		specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4'],
		benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
		contractorDescription: 'This is a description of the contractor.',
	},
	'Service 6': {
		description: 'lorem ipsum',
		specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4'],
		benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
		contractorDescription: 'This is a description of the contractor.',
	},
	'Service 7': {
		description: 'lorem ipsum',
		specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4'],
		benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
		contractorDescription: 'This is a description of the contractor.',
	},
	'Service 8': {
		description: 'lorem ipsum',
		specializations: ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4'],
		benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
		contractorDescription: 'This is a description of the contractor.',
	},
} as const;

export const serviceSteps = {
	'Service 1': {
		'Step Name': {
			title: 'Step Name',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
		'Step Name 2': {
			title: 'Step Name 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
		'Step Name 3': {
			title: 'Step Name 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
	},
	'Service 2': {
		'Step Name': {
			title: 'Step Name',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
		'Step Name 2': {
			title: 'Step Name 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
		'Step Name 3': {
			title: 'Step Name 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
	},
	'Service 3': {
		'Step Name': {
			title: 'Step Name',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
		'Step Name 2': {
			title: 'Step Name 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
		'Step Name 3': {
			title: 'Step Name 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque enim recusandae, aperiam dicta modi similique! Laborum, magnam pariatur? Deleniti nostrum dolorum nemo nam quis maiores tempore non ea soluta?',
			image: '/images/home-hero.webp',
		},
	},
} as const;

export const routes = ['/', '/reviews', '/financing', '/learning-hub', '/contact-us'];

export const socials = {
	Instagram: 'https://www.instagram.com/',
	Facebook: 'https://www.facebook.com/',
	Youtube: 'https://www.youtube.com/',
	Twitter: 'https://www.twitter.com/',
	TikTok: 'https://www.tiktok.com/',
	LinkedIn: 'https://www.linkedin.com/',
};
