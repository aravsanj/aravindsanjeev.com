import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    url: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    publishedAt: z.string().optional(), // For sorting if needed
    priority: z.number().optional(), // For custom ordering
  }),
});

export const collections = {
  blog,
  projects,
};
