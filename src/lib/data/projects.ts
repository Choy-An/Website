import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Project 1',
		color: '#5e95e3',
		description:
			'This project visualizes the 2022 Hunga Tonga-Hunga Haʻapai eruption - from its underwater build-up to the record-breaking 57 km plume and its global aftermath. Using scientific records and satellite data, I built a timeline-based narrative with layered visuals and annotations to reveal how the volcano formed, evolved, and erupted, and to compare it with other historic eruptions.',
		shortDescription:
			'This project visualizes the 2022 Hunga Tonga-Hunga Haʻapai eruption - from its underwater build-up to the record-breaking 57 km plume and its global aftermath. Using scientific records and satellite data, I built a timeline-based narrative with layered visuals and annotations to reveal how the volcano formed, evolved, and erupted, and to compare it with other historic eruptions.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Figma,
		name: 'Hunga Tonga',
		period: {
			from: new Date()
		},
		skills: getSkills('figma', 'css', 'html'),
		type: 'Data-Driven Narrative'
	},
	{
		slug: 'Project 2',
		color: '#ff3e00',
		description:
			'Biodiversity is vanishing at an alarming rate, with many species moving closer to extinction. This project visualizes the survival status of 24 selected species from India, chosen to reflect different habitats and IUCN Red List categories. Using a layered paper-cut lightbox, the arrangement shows species sinking deeper as their threat level rises, and color bands indicate population size. The work combines data and emotion to make the crisis of extinction tangible and immediate.',
		shortDescription:
			'Biodiversity is vanishing at an alarming rate, with many species moving closer to extinction. This project visualizes the survival status of 24 selected species from India, chosen to reflect different habitats and IUCN Red List categories. Using a layered paper-cut lightbox, the arrangement shows species sinking deeper as their threat level rises, and color bands indicate population size. The work combines data and emotion to make the crisis of extinction tangible and immediate.',
		links: [{ to: 'https://www.figma.com/proto/9dk0eMiRDPa7glw7eg5nPE/Design-Project-1-FINAL?node-id=606-3126&t=yoxQsNxJE4opes56-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=599%3A4740', label: 'Figma Prototype' }],
		logo: Assets.Figma,
		name: 'Fading To Extinction',
		period: {
			from: new Date()
		},
		skills: getSkills('figma'),
		type: 'Tangible Data Visualization',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D'
			},
			{
				label: '2',
				src: 'https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://media.glamourmagazine.co.uk/photos/6491ba42cb8e656c58bca81c/16:9/w_2580,c_limit/ELEMENTAL%20200623%20default-ELEMENTAL_ONLINE-USE-m328_152_pub.pub16.222.jpg'
			}
		]
	},
	{
		slug: 'Project 3',
		color: '#ffff00',
		description:
			'An exploration of how Sacred Groves (Kaavus) in Kannur have transformed into built structures. The project studies their architecture and iconography, presented through research, case studies, and visual documentation.',
		shortDescription:
			'An exploration of how Sacred Groves (Kaavus) in Kannur have transformed into built structures. The project studies their architecture and iconography, presented through research, case studies, and visual documentation.',
		links: [{ to: 'https://www.figma.com/proto/9dk0eMiRDPa7glw7eg5nPE/Design-Project-1-FINAL?node-id=606-3126&t=yoxQsNxJE4opes56-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=599%3A4740', label: 'Figma' }],
		logo: Assets.Figma,
		name: 'Sacred Groves',
		period: {
			from: new Date()
		},
		skills: getSkills('figma'),
		type: 'Cultural Documentation & Digital Narrative',
		screenshots: [
			{
				src: 'https://i.ibb.co/DDx7sxg7/DP1.png'
			},
			{
				src: 'https://i.ibb.co/962BZwL/DP2.png'
			},
			{
            	src: 'https://i.ibb.co/VcqPdNjZ/DP3.png'
			},
			{
            	src: 'https://i.ibb.co/213xDZjC/DP4.png'
			},
			{
            	src: 'https://i.ibb.co/R44ThSWM/DP5.png'
			},
			{
            	src: 'https://i.ibb.co/Xx5sMgxc/DP6.png'
			},
			{
            	src: 'https://i.ibb.co/jkn3NLh8/DP7.png'
			},
			{
            	src: 'https://i.ibb.co/nsSnCD0d/DP8.png'
			},
			{
            	src: 'https://i.ibb.co/2YqXdr99/DP9.png'
			},
			{
            	src: 'https://i.ibb.co/b5YqcQcc/DP10.png'
			},
			{
            	src: 'https://i.ibb.co/cHd5vgW/DP11.png'
			},
			{
            	src: 'https://i.ibb.co/WZz26cS/DP12.png'
			},
			{
            	src: 'https://i.ibb.co/xKWqrcJZ/DP13.png'
			},
			{
            	src: 'https://i.ibb.co/bgrXkpK3/DP14.png'
			},
			{
            	src: 'https://i.ibb.co/kswjRZ5q/DP16.png'
			},
			{
            	src: 'https://i.ibb.co/yngfM3fJ/DP17.png'
			},
			{
            	src: 'https://i.ibb.co/5WcBF9VH/DP18.png'
			},
			{
            	src: 'https://i.ibb.co/dsjZ0p9r/DP19.png'
			},
			{
            	src: 'https://i.ibb.co/N6pHKfCL/DP20.png'
			},
			{
            	src: 'https://i.ibb.co/HfNdRTVH/DP21.png'
			},
			{
            	src: 'https://i.ibb.co/fVqMD8pR/DP22.png'
			},
			{
            	src: 'https://i.ibb.co/8LdCVxPK/DP23.png'
			},
		]
	}
];

export const title = 'Projects';
