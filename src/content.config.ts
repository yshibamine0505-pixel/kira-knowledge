import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["仕事術", "ビジネスマインド", "人間力", "思考法"]),
    publishedAt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
