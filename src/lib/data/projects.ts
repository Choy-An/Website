import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Project 1',
		color: '#5e95e3',
		description:
			'A system-focused UX case study exploring how a call-based support operation can be transformed into a structured, SLA-driven internal support system. The project focuses on agent and supervisor workflows, emphasizing visibility, accountability, and scalable decision-making in high-pressure service environments.',
		shortDescription:
			'A system-focused UX case study exploring how a call-based support operation can be transformed into a structured, SLA-driven internal support system. The project focuses on agent and supervisor workflows, emphasizing visibility, accountability, and scalable decision-making in high-pressure service environments.',
		links: [{ to: '', label: 'Figma' }],
		banner: Assets.KFON,
		logo: Assets.Hunga,
		name: 'KFON',
		period: {
			from: new Date('2025-09-21'), to: new Date()
		},
		skills: getSkills('figma'),
		type: 'Service Design',
		screenshots: [
			{src: '/images/KFON1.webp'},
	{src: '/images/KFON2.webp'},
	{src: '/images/KFON3.webp'},
	{src: '/images/KFON4.webp'},
	{src: '/images/KFON5.webp'},
	{src: '/images/KFON6.webp'},
	{src: '/images/KFON7.webp'},
	{src: '/images/KFON8.webp'},
	{src: '/images/KFON9.webp'},
	{src: '/images/KFON10.webp'},
	{src: '/images/KFON11.webp'},
	{src: '/images/KFON12.webp'},
	{src: '/images/KFON13.webp'},
	{src: '/images/KFON14.webp'},
	{src: '/images/KFON15.webp'},
	{src: '/images/KFON16.webp'},
	{src: '/images/KFON17.webp'},
	{src: '/images/KFON18.webp'},
	{src: '/images/KFON19.webp'},
	{src: '/images/KFON20.webp'},
	{src: '/images/KFON21.webp'},
	{src: '/images/KFON22.webp'},
	{src: '/images/KFON23.webp'},
	{src: '/images/KFON24.webp'},
	{src: '/images/KFON25.webp'},
	{src: '/images/KFON26.webp'},
	{src: '/images/KFON27.webp'},
		],
	},
	{
		slug: 'Project 2',
		color: 'red',
		description:
			'An exploration of how Sacred Groves (Kaavus) in Kannur have transformed into built structures. The project studies their architecture and iconography, presented through research, case studies, and visual documentation.',
		shortDescription:
			'An exploration of how Sacred Groves (Kaavus) in Kannur have transformed into built structures. The project studies their architecture and iconography, presented through research, case studies, and visual documentation.',
		links: [{ to: 'https://www.figma.com/proto/00XBqRMcsbuV0xD8Ef61CA/Design-Project-1?node-id=653-3833&t=ZAEg6yrKUbS6j3P1-0&scaling=scale-down&content-scaling=fixed&page-id=653%3A3832', label: 'Figma Prototype' }],
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
			{src: '/images/DP23.webp'},
			{src: '/images/DP24.webp'}
		],
        prototype: 'https://embed.figma.com/proto/00XBqRMcsbuV0xD8Ef61CA/Design-Project-1?node-id=653-3833&scaling=scale-down&content-scaling=fixed&page-id=653%3A3832&embed-host=share" ', // your embed link here
	},
	{
		slug: 'Project 3',
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
		slug: 'Project 4',
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
			{src: '/images/mdr24.webp'},
			{src: '/images/mdr25.webp'}
		],
		prototype: 'https://embed.figma.com/proto/1DCepfwiBkdBuw6riiw67b/Maadhaar?node-id=34-8079&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A19677&embed-host=share' // your embed link here
	},
		{
		slug: 'Project 5',
		color: '#6CADDF',
		description:
			'A data-driven visual narrative exploring how Manchester City’s rise after its oil-backed takeover blurs the line between money, merit, and modern football.',
		shortDescription:
			'A data-driven visual narrative exploring how Manchester City’s rise after its oil-backed takeover blurs the line between money, merit, and modern football.',
		links: [{ to: 'https://www.figma.com/proto/grWIb4302eVaONUGJPd6fN/Project?node-id=144-2&t=Lgw80jeBNdE8IcQ9-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', label: 'Preview' }],
		banner: Assets.Manc,
		logo: Assets.Tangible,
		name: 'Oil and Football',
		period: {
			from: new Date('2024-02-17'), to: new Date('2024-02-28') 
		},
		skills: getSkills('figma', 'illustrator','photoshop'),
		type: 'Data Narrative',
		screenshots: [
			 {src: '/images/SCR 1.webp'},
	{src: '/images/SCR 2.webp'},
	{src: '/images/SCR 3.webp'},
	{src: '/images/SCR 4.webp'},
	{src: '/images/SCR 5.webp'},
	{src: '/images/SCR 6.webp'},
	{src: '/images/SCR 7.webp'},
	{src: '/images/SCR 8.webp'},
	{src: '/images/SCR 9.webp'},
	{src: '/images/SCR 10.webp'},
	{src: '/images/SCR 11.webp'},
	{src: '/images/SCR 12.webp'},
	{src: '/images/SCR 13.webp'},
	{src: '/images/SCR 14.webp'},
		],
	},
		{
		slug: 'Project 6',
		color: '#008000',
		description:
			'A Mahjong-inspired data visualization that transforms personal interests and traits into a layered spatial portrait — part game, part identity system.',
		shortDescription:
			'A Mahjong-inspired data visualization that transforms personal interests and traits into a layered spatial portrait — part game, part identity system.',
		links: [{ to: 'https://drive.google.com/file/d/1xb7szNGbRnfpfBtnN88_86AKYkxlrAuv/view?pli=1', label: 'Poster' }],
		banner: Assets.Port,
		logo: Assets.Tangible,
		name: 'Data Portrait',
		period: {
			from: new Date('2024-02-09'), to: new Date('2024-02-16')
		},
		skills: getSkills('figma', 'illustrator','photoshop'),
		type: 'Data Visualization / Poster Design',
		screenshots: [
			 {src: '/images/DPR1.webp'},
	{src: '/images/DPR2.webp'},
	{src: '/images/DPR3.webp'},
	{src: '/images/DPR4.webp'},
	{src: '/images/DPR5.webp'},
	{src: '/images/DPR6.webp'},
	{src: '/images/DPR7.webp'},
	{src: '/images/DPR8.webp'},
	{src: '/images/DPR9.webp'},
	{src: '/images/DPR10.webp'},
	{src: '/images/DPR11.webp'},
	{src: '/images/DPR12.webp'},
	{src: '/images/DPR13.webp'},
	{src: '/images/DPR14.webp'},
	{src: '/images/DPR15.webp'},
	{src: '/images/DPR16.webp'},
		],
		
	},
		{
		slug: 'Project 7',
		color: '#FFA500',
		description:
			'A data-driven homage translating Ladislav Sutnar’s design principles into a living visual system that celebrates structure, clarity, and modernist rhythm.',
		shortDescription:
			'A data-driven homage translating Ladislav Sutnar’s design principles into a living visual system that celebrates structure, clarity, and modernist rhythm.',
		links: [{ to: 'https://drive.google.com/file/d/1rMXQvdzoZz49m5JpH3ioTcjRPgSpPvrm/view?usp=drive_link', label: 'Poster' }],
		banner: Assets.Sutnar,
		logo: Assets.Tangible,
		name: 'Sutnar: Data Tribute',
		period: {
			from: new Date('2024-02-01'), to: new Date('2024-02-08')
		},
		skills: getSkills('figma', 'illustrator','photoshop'),
		type: 'Data Visualization/Poster',
		screenshots: [
			{src: '/images/TP1.webp'},
	{src: '/images/TP2.webp'},
	{src: '/images/TP3.webp'},
	{src: '/images/TP4.webp'},
	{src: '/images/TP5.webp'},
	{src: '/images/TP6.webp'},
	{src: '/images/TP7.webp'},
	{src: '/images/TP8.webp'},
	{src: '/images/TP9.webp'},
	{src: '/images/TP10.webp'},
	{src: '/images/TP11.webp'},
	{src: '/images/TP12.webp'},
	{src: '/images/TP13.webp'},
	{src: '/images/TP14.webp'},
	{src: '/images/TP15.webp'},
	{src: '/images/TP16.webp'},
	{src: '/images/TP17.webp'},
	{src: '/images/TP18.webp'},
		],
	},
	{
		slug: 'Project 8',
		color: '#5e95e3',
		description:
			'This project visualizes the 2022 Hunga Tonga-Hunga Haʻapai eruption - from its underwater build-up to the record-breaking 57 km plume and its global aftermath. Using scientific records and satellite data, I built a timeline-based narrative with layered visuals and annotations to reveal how the volcano formed, evolved, and erupted, and to compare it with other historic eruptions.',
		shortDescription:
			'This project visualizes the 2022 Hunga Tonga-Hunga Haʻapai eruption - from its underwater build-up to the record-breaking 57 km plume and its global aftermath. Using scientific records and satellite data, I built a timeline-based narrative with layered visuals and annotations to reveal how the volcano formed, evolved, and erupted, and to compare it with other historic eruptions.',
		links: [{ to: 'https://meek-lokum-c52335.netlify.app/', label: 'Narrative' }],
		banner: Assets.Tonga,
		logo: Assets.Hunga,
		name: 'Hunga Tonga',
		period: {
			from: new Date('2025-06-17'), to: new Date('2025-06-30') 
		},
		skills: getSkills('figma', 'css', 'html','svelte'),
		type: 'Data-Driven Narrative',
	},
	
];

export const title = 'Projects';
