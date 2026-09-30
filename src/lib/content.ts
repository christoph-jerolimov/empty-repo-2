// Queries and helpers over the content collections (src/content.config.ts).
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Chapter = CollectionEntry<'kapitel'>;
export type Edition = CollectionEntry<'ausgaben'>;

export const DEFAULT_EDITION = 'es2026';
export const DEFAULT_CHAPTER = 13;

export async function getEditions(): Promise<Edition[]> {
  return (await getCollection('ausgaben')).sort((a, b) => a.data.order - b.data.order);
}

/** Chapters of one edition, in order. Chapter numbers are positions in this list. */
export async function getChapters(editionId: string): Promise<Chapter[]> {
  const editions = await getEditions();
  const rank = (id: string) => editions.findIndex((e) => e.id === id);
  const all = await getCollection('kapitel');
  const chapters =
    editionId === 'es5'
      ? all.filter((c) => c.id.startsWith('es5/'))
      : all.filter((c) => c.id.startsWith('modern/') && rank(c.data.since) <= rank(editionId));
  return chapters.sort((a, b) => a.data.order - b.data.order);
}

export const chapterHref = (editionId: string, n: number) => `/standard/${editionId}/${n}/`;

export async function getTutorials() {
  return (await getCollection('tutorials')).sort((a, b) => a.data.order - b.data.order);
}
export const tutorialHref = (id: string) => `/tutorials/${id}/`;

export async function getArticles() {
  return (await getCollection('artikel')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export const articleHref = (id: string) => `/artikel/${id}/`;

export async function getPosts() {
  return (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export const postHref = (id: string) => `/blog/#${id}`;

export async function getAuthor(ref: { id: string }) {
  const author = await getEntry('autoren', ref.id);
  if (!author) throw new Error(`Unknown author "${ref.id}"`);
  return author;
}

/** Card data for an "artikel/<id>" or "tutorials/<id>" reference. */
export async function getRelated(ref: string) {
  const [kind, id] = ref.split('/');
  if (kind === 'tutorials') {
    const t = await getEntry('tutorials', id);
    if (!t) throw new Error(`Unknown tutorial "${id}"`);
    return { href: tutorialHref(id), tag: 'Tutorial', title: t.data.title, minutes: t.data.minutes };
  }
  const a = await getEntry('artikel', id);
  if (!a) throw new Error(`Unknown article "${id}"`);
  return { href: articleHref(id), tag: a.data.tag, title: a.data.title, minutes: a.data.minutes };
}

/** Plain text of a Markdown body without fenced code, for client-side search. */
export function searchText(...parts: (string | undefined)[]): string {
  return parts
    .map((p) => (p ?? '').replace(/```[\s\S]*?```/g, ' '))
    .join(' ')
    .replace(/[#*`_>\\]|^\d+\.\s/gm, '')
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

const fmt = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('de-DE', { timeZone: 'UTC', ...opts });
/** "12. September 2026" */
export const dateLong = (d: Date) => fmt({ day: 'numeric', month: 'long', year: 'numeric' }).format(d);
/** "12. Sept. 2026" */
export const dateShort = (d: Date) => fmt({ day: 'numeric', month: 'short', year: 'numeric' }).format(d);
/** "24. Sept." */
export const dateDayMonth = (d: Date) => fmt({ day: 'numeric', month: 'short' }).format(d);
/** "September 2026" */
export const monthYear = (d: Date) => fmt({ month: 'long', year: 'numeric' }).format(d);
