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
		slug: 'js',
		color: 'yellow',
		description: 'JavaScript is a versatile programming language used for building dynamic and interactive web applications.',
		logo: Assets.js,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is a powerful, easy-to-learn programming language widely used for web development, data science, and automation.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML (HyperText Markup Language) is the standard language for structuring web pages.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS (Cascading Style Sheets) is used to design and style web pages, enhancing their visual presentation.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description: 'React is a JavaScript library for building fast and scalable user interfaces.',
		logo: Assets.react,
		name: 'react',
		category: 'library'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description: 'Bootstrap is a popular CSS framework for creating responsive and mobile-first web pages.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: 'Django is a high-level Python framework that simplifies backend development with built-in features.',
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description: 'SQL (Structured Query Language) is used for managing and querying relational databases.',
		logo: Assets.SQL,
		name: 'SQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'sqlite',
		color: 'gray',
		description: 'SQLite is a lightweight, self-contained database engine commonly used for local storage.',
		logo: Assets.SQLite,
		name: 'SQLite',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL is a powerful, open-source relational database known for reliability and scalability.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'git',
		color: 'red',
		description: 'Git is a version control system for tracking changes in source code during software development.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
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
