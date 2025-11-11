import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	  defineSkill({
    slug: 'figma',
    color: 'purple',
    description: 'Figma is my primary tool for UI/UX and interface design.',
    logo: Assets.Figma,
    name: 'Figma',
    category: 'design'
  }),
  defineSkill({
    slug: 'illustrator',
    color: 'orange',
    description: 'Adobe Illustrator is my go-to tool for vector graphics and illustrations.',
    logo: Assets.Illustrator,
    name: 'Illustrator',
    category: 'design'
  }),
  defineSkill({
    slug: 'photoshop',
    color: 'blue',
    description: 'Adobe Photoshop is used for photo editing and digital artwork.',
    logo: Assets.Photoshop,
    name: 'Photoshop',
    category: 'design'
  }),
  defineSkill({
    slug: 'excel',
    color: 'green',
    description: 'Microsoft Excel is used for data management, charts, and calculations.',
    logo: Assets.Excel,
    name: 'Excel',
    category: 'productivity'
  }),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'I dont have much experience  so most of the usage was done with the assistance of AI, it started as an experiment for a project but later found it interesting which translated to other tools such as svelte.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Started alongside CSS its a must, i didnt much about it, but understood actually a website is online.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'First heard under the interactive data narrative model, but from their it piqued my interest that along with the assistance of AI i tried my portfolio also in code using svelete.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'sketchup',
		color: 'blue',
		description: 'My primary 3D software, which i picked up from my bachelors alongside many other, but the simple UI and features definitely helped in many ways, in design also i have used it, not as excessive but defineitely yes for small models and such.',
		logo: Assets.Sketchup,
		name: 'SketchUp',
		category: 'library'
	}),
	defineSkill({
		slug: 'procreate',
		color: 'black',
		description: 'Another tool that i started after coming to NID, used for skething primarily, but have used it for ideating icons and such also.',
		logo: Assets.Procreate,
		name: 'Procreate',
		category: 'library'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
