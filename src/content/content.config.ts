import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  //The mandate here is that the the left side name should match the folder name
};
