import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishedAt: z.string(),
      lastUpdated: z.string().optional(),
      summary: z.string(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      imageUrl: image(),
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
