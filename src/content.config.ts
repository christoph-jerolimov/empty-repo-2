import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const editionId = z.enum(['es5', 'es2015', 'es2020', 'es2023', 'es2025', 'es2026']);

/** Spec editions shown in the version switcher (src/content/ausgaben.json). */
const ausgaben = defineCollection({
  loader: file('src/content/ausgaben.json'),
  schema: z.object({
    label: z.string(),
    meta: z.string(),
    highlights: z.string(),
    order: z.number(),
  }),
});

/**
 * Spec chapters. `modern/` holds the ES2015+ chapter structure (an edition shows every chapter
 * whose `since` is not newer than itself); `es5/` holds the ES5.1 structure.
 */
const kapitel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kapitel' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    en: z.string(),
    since: editionId,
    draft: z.boolean().default(false),
  }),
});

const autoren = defineCollection({
  loader: file('src/content/autoren.json'),
  schema: z.object({
    name: z.string(),
    short: z.string(),
    initials: z.string(),
    tone: z.enum(['accent', 'accent-2', 'neutral']),
    order: z.number(),
    /** Blurb for the team list on the Über page. */
    team: z.string(),
    /** Author box under articles. */
    bio: z.string().optional(),
  }),
});

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string(),
    teaser: z.string(),
    tag: z.string(),
    author: reference('autoren'),
    date: z.coerce.date(),
    minutes: z.number(),
    spec: z.object({ label: z.string(), chapter: z.number() }).optional(),
    proposal: z.object({ label: z.string(), href: z.url() }).optional(),
    /** "artikel/<id>" or "tutorials/<id>"; defaults to the newest other articles. */
    related: z.array(z.string().regex(/^(artikel|tutorials)\//)).optional(),
  }),
});

const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tutorials' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    level: z.enum(['Einsteiger', 'Fortgeschritten']),
    minutes: z.number(),
    since: z.string(),
    intro: z.string(),
    task: z.string(),
    spec: z.string(),
    /** Chapter number in the newest edition that `spec` refers to. */
    specChapter: z.number(),
    /** Position and blurb in the learning path on the home page. */
    pathStep: z.number().optional(),
    pathText: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: reference('autoren'),
  }),
});

export const collections = { ausgaben, kapitel, autoren, artikel, tutorials, blog };
