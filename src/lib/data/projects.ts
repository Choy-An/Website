import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Project 1',
		color: 'red',
		description:
			'An exploration of how Sacred Groves (Kaavus) in Kannur have transformed into built structures. The project studies their architecture and iconography, presented through research, case studies, and visual documentation.',
		shortDescription:
			'An exploration of how Sacred Groves (Kaavus) in Kannur have transformed into built structures. The project studies their architecture and iconography, presented through research, case studies, and visual documentation.',
		links: [{ to: 'https://www.figma.com/proto/9dk0eMiRDPa7glw7eg5nPE/Design-Project-1-FINAL?node-id=606-3126&t=yoxQsNxJE4opes56-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=599%3A4740', label: 'Figma Prototype' }],
		banner: Assets.Sacred,
		logo: Assets.T,
		name: 'Sacred Groves',
		period: {
			from: new Date('2024-03-14'), to: new Date('2024-04-27')
		},
		skills: getSkills('figma', 'illustrator','photoshop','procreate','sketchup'),
		type: 'Cultural Documentation & Digital Narrative',
		screenshots: [
			{src: '/images/DP1.webp'},
			{src: '/images/DP2.webp'},
			{src: '/images/DP3.webp'},
			{src: '/images/DP4.webp'},
			{src: '/images/DP5.webp'},
			{src: '/images/DP6.webp'},
			{src: '/images/DP7.webp'},
			{src: '/images/DP8.webp'},
			{src: '/images/DP9.webp'},
			{src: '/images/DP10.webp'},
			{src: '/images/DP11.webp'},
			{src: '/images/DP12.webp'},
			{src: '/images/DP13.webp'},
			{src: '/images/DP14.webp'},
			{src: '/images/DP15.webp'},
			{src: '/images/DP16.webp'},
			{src: '/images/DP17.webp'},
			{src: '/images/DP18.webp'},
			{src: '/images/DP19.webp'},
			{src: '/images/DP20.webp'},
			{src: '/images/DP21.webp'},
			{src: '/images/DP22.webp'},
			{src: '/images/DP23.webp'}
		],
        prototype: 'https://www.figma.com/proto/9dk0eMiRDPa7glw7eg5nPE/Design-Project-1-FINAL?node-id=599-4740&p=f&t=2deVnKKAsMmYvZxT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=599%3A4740https://embed.figma.com/proto/9dk0eMiRDPa7glw7eg5nPE/Design-Project-1-FINAL?node-id=599-4740&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=599%3A4740&embed-host=share', // your embed link here
	},
	{
		slug: 'Project 2',
		color: 'yellow',
		description:
			'Biodiversity is vanishing at an alarming rate, with many species moving closer to extinction. This project visualizes the survival status of 24 selected species from India, chosen to reflect different habitats and IUCN Red List categories. Using a layered paper-cut lightbox, the arrangement shows species sinking deeper as their threat level rises, and color bands indicate population size. The work combines data and emotion to make the crisis of extinction tangible and immediate.',
		shortDescription:
			'Biodiversity is vanishing at an alarming rate, with many species moving closer to extinction. This project visualizes the survival status of 24 selected species from India, chosen to reflect different habitats and IUCN Red List categories. Using a layered paper-cut lightbox, the arrangement shows species sinking deeper as their threat level rises, and color bands indicate population size. The work combines data and emotion to make the crisis of extinction tangible and immediate.',
		links: [{ to: '', label: 'Video' }],
		banner: Assets.Tangi,
		logo: Assets.Tangible,
		name: 'Fading To Extinction',
		period: {
			from: new Date('2025-07-02'), to: new Date('2025-08-23') 
		},
		skills: getSkills('figma', 'illustrator','photoshop','procreate'),
		type: 'Tangible Data Visualization',
		screenshots: [
			{src: '/images/TDV1.webp'},
			{src: '/images/TDV2.webp'},
			{src: '/images/TDV3.webp'},
			{src: '/images/TDV4.webp'},
			{src: '/images/TDV5.webp'},
			{src: '/images/TDV6.webp'},
			{src: '/images/TDV7.webp'},
			{src: '/images/TDV8.webp'},
			{src: '/images/TDV9.webp'},
			{src: '/images/TDV10.webp'},
			{src: '/images/TDV11.webp'},
			{src: '/images/TDV12.webp'},
			{src: '/images/TDV13.webp'},
			{src: '/images/TDV14.webp'},
			{src: '/images/TDV15.webp'},
			{src: '/images/TDV16.webp'},
			{src: '/images/TDV17.webp'},
			{src: '/images/TDV18.webp'},
			{src: '/images/TDV19.webp'},
			{src: '/images/TDV20.webp'},
			{src: '/images/TDV21.webp'},
			{src: '/images/TDV22.webp'},
			{src: '/images/TDV23.webp'},
			{src: '/images/TDV24.webp'},
			{src: '/images/TDV27.webp'},
			{src: '/images/TDV25.webp'},
			{src: '/images/TDV26.webp'}
		],
	},
		{
		slug: 'Project 3',
		color: '#2F87FF',
		description:
			'Redesign of the mAadhaar app aimed at improving usability, trust, and accessibility in India’s digital identity system. The project refined key user flows like address updates & verification through a clean, consistent interface. Developed collaboratively under industry guidance, it strengthened my understanding of end-to-end UX processes and design systems.',
		shortDescription:
			'Redesign of the mAadhaar app aimed at improving usability, trust, and accessibility in India’s digital identity system. The project refined key user flows like address updates & verification through a clean, consistent interface.',
		links: [{ to: 'https://www.figma.com/proto/1DCepfwiBkdBuw6riiw67b/Maadhaar?node-id=18-19677&p=f&t=SaCY1D8GKog1VczK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A19677', label: 'Figma Prototype' }],
		banner: Assets.Aadhaar,
		logo: Assets.Tangible,
		name: 'mAadhaar: Case Study',
		period: {
			from: new Date('2024-10-05'), to: new Date('2024-10-18') 
		},
		skills: getSkills('figma', 'illustrator','photoshop'),
		type: 'UI/UX Case Study',
		screenshots: [
			{src: '/images/mdr1.webp'},
			{src: '/images/mdr2.webp'},
			{src: '/images/mdr3.webp'},
			{src: '/images/mdr4.webp'},
			{src: '/images/mdr5.webp'},
			{src: '/images/mdr6.webp'},
			{src: '/images/mdr7.webp'},
			{src: '/images/mdr8.webp'},
			{src: '/images/mdr9.webp'},
			{src: '/images/mdr10.webp'},
			{src: '/images/mdr11.webp'},
			{src: '/images/mdr12.webp'},
			{src: '/images/mdr13.webp'},
			{src: '/images/mdr14.webp'},
			{src: '/images/mdr15.webp'},
			{src: '/images/mdr16.webp'},
			{src: '/images/mdr17.webp'},
			{src: '/images/mdr18.webp'},
			{src: '/images/mdr19.webp'},
			{src: '/images/mdr20.webp'},
			{src: '/images/mdr21.webp'},
			{src: '/images/mdr22.webp'},
			{src: '/images/mdr23.webp'},
		],
		prototype: 'https://embed.figma.com/proto/1DCepfwiBkdBuw6riiw67b/Maadhaar?node-id=34-8079&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A19677&embed-host=share' // your embed link here
	},
	{
		slug: 'Project 4',
		color: '#5e95e3',
		description:
			'This project visualizes the 2022 Hunga Tonga-Hunga Haʻapai eruption - from its underwater build-up to the record-breaking 57 km plume and its global aftermath. Using scientific records and satellite data, I built a timeline-based narrative with layered visuals and annotations to reveal how the volcano formed, evolved, and erupted, and to compare it with other historic eruptions.',
		shortDescription:
			'This project visualizes the 2022 Hunga Tonga-Hunga Haʻapai eruption - from its underwater build-up to the record-breaking 57 km plume and its global aftermath. Using scientific records and satellite data, I built a timeline-based narrative with layered visuals and annotations to reveal how the volcano formed, evolved, and erupted, and to compare it with other historic eruptions.',
		links: [{ to: '', label: 'GitHub' }],
		banner: Assets.Tonga,
		logo: Assets.Hunga,
		name: 'Hunga Tonga',
		period: {
			from: new Date('2025-06-17'), to: new Date('2025-06-30') 
		},
		skills: getSkills('figma', 'css', 'html','svelte'),
		type: 'Data-Driven Narrative',
		status: 'wip'
	},
	{
		slug: 'Project 5',
		color: '#5e95e3',
		description:
			'A complete redesign of Kerala Fiber Optic Network’s digital platform, focused on improving accessibility, trust, and clarity for users across home, corporate, and institutional broadband services. The project enhances visual hierarchy, streamlines service discovery, and establishes a consistent design language rooted in Kerala’s digital development ethos. The goal was to move away from a purely bureaucratic look and create a user-centered interface that reflects transparency, reliability, and modern connectivity.',
		shortDescription:
			'A complete redesign of Kerala Fiber Optic Network’s digital platform, focused on improving accessibility, trust, and clarity for users across home, corporate, and institutional broadband services. The project enhances visual hierarchy, streamlines service discovery, and establishes a consistent design language rooted in Kerala’s digital development ethos. The goal was to move away from a purely bureaucratic look and create a user-centered interface that reflects transparency, reliability, and modern connectivity.',
		links: [{ to: '', label: 'Figma' }],
		banner: Assets.KFON,
		logo: Assets.Hunga,
		name: 'KFON',
		period: {
			from: new Date('2025-09-21'), to: new Date()
		},
		skills: getSkills('figma'),
		type: 'Service Re-Design',
		status: 'wip'
	}
];

export const title = 'Projects';
