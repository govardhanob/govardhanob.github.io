import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'FULLSTACK';

export const lastName = 'DEVELOPER';

export const description =  
	"Hi, I'm Govardhan,  a passionate  Full Stack Developer specializing in python and Django for backend development.";


export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/govardhanob' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/govardhan-ob/'
	},
	
	
	{
		platform: Platform.Email,
		link: 'govardhanob@gmail.com'
	},
	
	
];

export const skills = getSkills(
	'js',
	'python',
	'html',
	'css',
	'react',
	'bootstrap',
	'django',
	'mongodb',
	'sqlite',
	'postgresql',
	'git'
  );
  