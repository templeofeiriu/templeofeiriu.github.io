import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({image}) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image(), //  z.string().optional(),
	}),
});

const eventinfo = defineCollection({
	loader: glob({ base: './src/content/eventinfo', pattern: '**/*.{md,mdx}' }),
	schema: ({image}) => z.object({
		title: z.string().optional(),
		url: z.string().optional(),
		description: z.string().optional(),
		hosts: z.array(z.string()).optional(),
		startDate: z.coerce.date().optional(),
		endDate: z.coerce.date().optional(),
		location: z.string().optional(),
		heroImage: image(),
	}),
});
const profiles = defineCollection({
	loader: glob({ base: './src/content/profiles', pattern: '**/*.{md,mdx}' }),
	schema: ({image}) => z.object({
		name: z.string().optional(),
		role: z.string().optional(),
		avatar: z.string().optional(),
		title: z.string().optional(),
		description: z.string().optional(),
		heroImage: image().optional(),
	}),
});

export const collections = { blog, eventinfo, profiles };
