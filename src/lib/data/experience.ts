import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'Full-stack-developer',
		company: 'Abhram Technologies ',
		description: 'Engineered full-stack web applications using Python, SQL, HTML, React, CSS, and JavaScript.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Ernakulam',
		period: { from:new Date(2024, 4)},
		skills: getSkills('react','django','python','html','css','js','postgresql'),
		name: 'Full Stack developer',
		color: 'red',
		links: [],
		logo: Assets.abhram,
		shortDescription: 'Engineered full-stack web applications using Python, SQL, HTML, React, CSS, and JavaScript.'
	},
	{
		slug: 'python-developer',
		company: 'Soften Technologies',
		description: 'Developed web applications with Python, Django, and Flask.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Ernakulam',
		period: { from: new Date(2023, 8) ,to:new Date(2024,3)},
		skills: getSkills('django','python','html','css','js','postgresql'),
		name: 'Python Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developed web applications with Python, Django, and Flask.'
	},
];


export const title = 'Experience';
