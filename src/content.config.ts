import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
    loader: glob({ pattern: '**/*.md', 
        base: './src/content/books' 
    }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(), // ← quitamos el .url()
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            colombia: z.string().url(),
            argentina: z.string().url(),
        }),
    })
});

export const collections = { books };