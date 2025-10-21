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
		links: [{ to: '', label: 'Video' }],
		logo: Assets.Figma,
		name: 'Fading To Extinction',
		period: {
			from: new Date()
		},
		skills: getSkills(''),
		type: 'Tangible Data Visualization',
		screenshots: [
			{
				src: '/images/TDV1.webp'
			},
			{
				src: '/images/TDV2.webp'
			},
			{
            	src: '/images/TDV3.webp'
			},
			{
            	src: '/images/TDV4.webp'
			},
			{
            	src: '/images/TDV5.webp'
			},
			{
            	src: '/images/TDV6.webp'
			},
			{
            	src: '/images/TDV7.webp'
			},
			{
            	src: '/images/TDV8.webp'
			},
			{
            	src: '/images/TDV9.webp'
			},
			{
            	src: '/images/TDV10.webp'
			},
			{
            	src: '/images/TDV11.webp'
			},
			{
            	src: '/images/TDV12.webp'
			},
			{
            	src: '/images/TDV13.webp'
			},
			{
            	src: '/images/TDV14.webp'
			},
			{
            	src: '/images/TDV15.webp'
			},
			{
            	src: '/images/TDV16.webp'
			},
			{
            	src: '/images/TDV17.webp'
			},
			{
            	src: '/images/TDV18.webp'
			},
			{
            	src: '/images/TDV19.webp'
			},
			{
            	src: '/images/TDV20.webp'
			},
			{
            	src: '/images/TDV21.webp'
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
		links: [{ to: 'https://www.figma.com/proto/9dk0eMiRDPa7glw7eg5nPE/Design-Project-1-FINAL?node-id=606-3126&t=yoxQsNxJE4opes56-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=599%3A4740', label: 'Figma Prototype' }],
		logo: Assets.Figma,
		name: 'Sacred Groves',
		period: {
			from: new Date()
		},
		skills: getSkills(''),
		type: 'Cultural Documentation & Digital Narrative',
		screenshots: [
			{
				src: '/images/DP1.webp'
			},
			{
				src: '/images/DP2.webp'
			},
			{
            	src: '/images/DP3.webp'
			},
			{
            	src: '/images/DP4.webp'
			},
			{
            	src: '/images/DP5.webp'
			},
			{
            	src: '/images/DP6.webp'
			},
			{
            	src: '/images/DP7.webp'
			},
			{
            	src: '/images/DP8.webp'
			},
			{
            	src: '/images/DP9.webp'
			},
			{
            	src: '/images/DP10.webp'
			},
			{
            	src: '/images/DP11.webp'
			},
			{
            	src: '/images/DP12.webp'
			},
			{
            	src: '/images/DP13.webp'
			},
			{
            	src: '/images/DP14.webp'
			},
			{
            	src: '/images/DP16.webp'
			},
			{
            	src: '/images/DP17.webp'
			},
			{
            	src: '/images/DP18.webp'
			},
			{
            	src: '/images/DP19.webp'
			},
			{
            	src: '/images/DP20.webp'
			},
			{
            	src: '/images/DP21.webp'
			},
			{
            	src: '/images/DP22.webp'
			},
			{
            	src: '/images/DP23.webp'
			},
			{
            	src: '/images/DP24.webp'
			}
		]
	}
];

export const title = 'Projects';
