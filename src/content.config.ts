import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const journal = defineCollection({
  // Load Markdown and MDX files in the `src/content/journal/` directory.
  loader: glob({ base: "./src/content/journal", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      date: z.coerce.date(),
      summary: z.string(),
      tags: z.string().array(),
      contributor: z.string().optional(),
    }),
});

export const collections = { journal };
