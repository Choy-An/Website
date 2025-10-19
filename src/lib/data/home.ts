import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Aswanth';

export const lastName = 'Choyan';

export const description =
	'Hi, I’m a designer and creative thinker passionate about blending culture, design, and technology to craft meaningful experiences.I love turning ideas into visuals that communicate clearly and inspire the viewer.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, 
		link: 'https://github.com/Choy-An' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/'
	},
    {
        platform: Platform.Email,
        link: 'mailto:aswanthchoyan@gmail.com',
    },
	{
		//platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	
	{
		//platform: Platform.,
		link: 'https://www.youtube.com'
	},
	{
		//platform: Platform.Facebook,
		//link: 'https://www.facebook.com'
	},
	{
		//platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	}
];

export const skills = getSkills('figma', 'illustrator', 'photoshop', 'excel', 'html', 'css', 'js');
