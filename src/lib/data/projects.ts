import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { getAssetURL } from '$lib/data/assets';

export const items: Array<Project> = [
	{
		slug: 'portfolio-Telemetry',
		color: '#5e95e3',
		description:
			'This React application provides real-time data visualization from a drone using MQTTX. The system establishes an MQTT connection to receive live telemetry, including altitude, speed, GPS coordinates, battery status, and other crucial flight parameters. The data is dynamically displayed on the website using responsive charts, gauges, and live status indicators, ensuring an intuitive and seamless monitoring experience.Designed for real-time analysis, the application enables users to track drone performance instantly, making it ideal for surveillance, research, or industrial applications. With its lightweight and efficient architecture, the system ensures minimal latency, providing accurate insights into drone operations.',
		shortDescription:
			'A React application that displays real-time drone data using MQTTX. It visualizes live telemetry like altitude, speed, and GPS for seamless monitoring',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.react,
		name: 'Telemetry',
		period: {
			from: new Date()
		},
		
		skills: getSkills('react'),
		type: 'Website ',
		screenshots: [
			{
				label: 'screenshot',
				src: getAssetURL(Assets.telemetry)
			},
			
		]
	},
	
	{
		slug: 'portfolio-Online Store',
		color: '#ff3e00',
		description:
			'This online store provides a comprehensive selection of drone hardware parts and sensors, catering to hobbyists, professionals, and researchers. Built using Django for the backend and HTML, CSS, and jQuery for the frontend, the platform ensures a smooth and responsive user experience. The store supports secure transactions with Razorpay, enabling seamless online payments. With an intuitive interface, real-time stock updates, and efficient order management, this platform simplifies purchasing essential drone components and sensors.',
		shortDescription:
			'An online store for drone hardware parts and sensors, built with Django, HTML, CSS, and jQuery, featuring secure payments via Razorpay.',
		links: [{ to: '', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Online Store',
		period: {
			from: new Date()
		},
		skills: getSkills('django','python','html','css','js','postgresql'),
		type: 'Website ',
		screenshots: [
			{
				label: 'screenshot',
				src: getAssetURL(Assets.onlinestore)
			},
			
		]
	},
	{
		slug: 'portfolio-onlineclassroom',
		color: '#5e95e3',
		description:
			'This dynamic learning platform enables users to both upload and access courses, fostering an interactive educational environment. Developed using Django for the backend and HTML, CSS, and jQuery for the frontend, the platform ensures a smooth and user-friendly experience. Users can easily browse available courses, upload their own content, and engage in self-paced learning. With a structured course management system and intuitive UI, the platform enhances accessibility to quality educational content for learners and educators alike.',
		shortDescription:
			'A learning platform built with Django, HTML, CSS, and jQuery, where users can upload courses, explore content, and learn seamlessly',
		links: [{ to: 'https://github.com/govardhanob/online-learningwebsite', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Online Learning Platfrom',
		period: {
			from: new Date()
		},
		
		skills: getSkills('django','python','html','css','js','postgresql'),
		type: 'Website ',
		screenshots: [
			{
				label: 'screenshot',
				src: getAssetURL(Assets.onlineclassroom)
			},
			
		]
	},
];


export const title = 'Projects';
