import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
  slug: 'data-portrait',
  company: 'NID Project',
  description:
    'A visual homage to the datasets that shape our understanding of the world. This project explored the idea of **data as an emotional and cultural artifact**, visualized through symbolic forms and layered compositions inspired by tributary systems and flow networks.',
  shortDescription:
    'A poetic visualization exploring data as emotional and cultural flow — inspired by tributary systems.',
  type: 'Data Visualization / Poster Design',
  location: 'National Institute of Design',
  period: { from: new Date('2024-04-01'), to: new Date('2024-04-08') },
  skills: getSkills('illustrator', 'photoshop', 'figma'),
  name: 'Data Portrait',
  color: '#3B82F6', // Tailwind blue-500
  links: [
    {
      label: ''
    }
  ],
  logo: Assets.Figma,
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
  ]
},
{
  slug: 'data-tribute',
  company: 'NID Project',
  description:
    'A visual homage to the datasets that shape our understanding of the world. This project explored the idea of **data as an emotional and cultural artifact**, visualized through symbolic forms and layered compositions inspired by tributary systems and flow networks.',
  shortDescription:
    'A poetic visualization exploring data as emotional and cultural flow — inspired by tributary systems.',
  type: 'Data Visualization / Poster Design',
  location: 'National Institute of Design',
  period: { from: new Date('2024-04-01'), to: new Date('2024-04-08') },
  skills: getSkills('illustrator', 'photoshop', 'figma'),
  name: 'Data Tribute',
  color: '#3B82F6', // Tailwind blue-500
  links: [
    {
      label: ''
    }
  ],
  logo: Assets.Figma,
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
  ]
},
	
];

export const title = 'Welcome';
