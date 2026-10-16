import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const collection = (dir: string) =>
  defineCollection({
    loader: glob({
      pattern: '*/index.md',
      base: `./src/content/${dir}`,
      generateId: ({ entry }) => entry.split('/')[0]
    }),
    schema: z.object({
      title: z.string(),
      publish: z.boolean().default(true),
      date: z.string().optional(),
      excerpt: z.string().optional(),
      lede: z.string().optional(),
      link: z.string().optional(),
      repo: z.string().optional(),
      lang: z.string().optional(),
      venue: z.string().optional()
    }).passthrough()
  });

export const collections = {
  posts: collection('posts'),
  projects: collection('projects'),
  talks: collection('talks')
};
