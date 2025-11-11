import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'M.Des in Information Design',
		description: '',
		location: 'Bangalore, Karnataka',
		logo: Assets.NID,
		name: '',
		organization: 'National Institute of Design, Bangalore',
		period: { from: new Date(2024, 6, 1), to: new Date() },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: [
			'Data Visualization',
			'Information Visualization',
			'UI/UX',
			'Information Architecture',
			'Wireframing',
			'Prototyping',
			'Service Design',
			'Human Centric Design'
		]
	},
	{
		degree: 'Bachelor of Planning',
		description: '',
		location: 'Bhopal, Madhya Pradesh',
		logo: Assets.SPA,
		name: '',
		organization: 'School of Planning and Architecture, Bhopal',
		period: { from: new Date(2019, 6, 1), to: new Date(2023, 5, 30) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: [
			'Data Collection and Analysis',
			'Urban Planning',
			'Cartography',
			'Urban Visualisations',
			'Sustainable Design',
			'3D Modeling'
		]
	},
	{
		degree: 'High School',
		description: '',
		location: 'Mahe, Kerala',
		logo: Assets.JNV,
		name: '',
		organization: 'Jawahar Navodaya Vidyalaya, Mahe',
		period: { from: new Date(2011, 11, 1), to: new Date(2018, 4, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-4',
		subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
	}
];

