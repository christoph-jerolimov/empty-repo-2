# EcmaScript.de

The German-language, unofficial companion site for the ECMAScript standard (ECMA-262): the spec with commentary, articles, short tutorials and a blog. Every code example runs live in the browser.

Built with [Astro](https://astro.build) and TypeScript as a fully static site.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type-check
```

## Structure

- `src/content/` – all content, as Markdown:
  - `kapitel/modern/*.md` (ES2015+ chapters) and `kapitel/es5/*.md` (ES5.1 chapters). An edition shows every modern chapter whose `since` isn't newer than it.
  - `tutorials/*.md`, `artikel/*.md` and `blog/*.md`
  - `ausgaben.json` (spec editions) and `autoren.json` (authors)
  - Schemas are in `src/content.config.ts`, and queries in `src/lib/content.ts`.
- `src/pages/` – routes: `/`, `/standard/[ausgabe]/[kapitel]/`, `/artikel/[slug]/`, `/tutorials/[slug]/`, `/blog/` and `/ueber/` (MDX)
- `src/components/` – reusable pieces: `PageIntro`, `SplitLayout`, `SideNav`, `Pager`, `Prose`, `LiveEditor`, `Avatar`, `AuthorCard`, `TeamGrid`, `ProgressBar`, `Teaser`, `RelatedCard`, `LegalSection`, plus the `StandardView` and `TutorialView` page views
- `src/scripts/` – client code: theme toggle, list filtering (`filter-list.ts`) and the `<es-live-editor>` custom element
- `src/styles/broadsheet.css` – the Broadsheet design system; `site.css` holds the site's overrides and dark theme, and `live-editor.css` styles the editor

## Writing content

A fenced block marked `live` becomes a runnable editor with a console. Add `hint` to show the "Ändere den Code …" line above it:

````md
```js live title="Set-Methoden (ES2025)" hint
console.log([...new Set([1, 2]).union(new Set([2, 3]))]);
```
````

The transform is a Sätteri mdast plugin (`src/lib/live-code-plugin.ts`) and works in `.md` and `.mdx`. Both it and `LiveEditor.astro` build their markup from `src/lib/live-editor.ts`.

## Design source

`project/` and `chats/` hold the Claude Design handoff bundle this site was built from (HTML prototypes and the design conversation). The home page implements variant **1c "Lernpfad"**.

## Open placeholders

- GitHub, RSS and donation links (`src/data/site.ts`)
- Newsletter form (there's no backend yet, so submitting does nothing)
- Impressum and privacy policy text (`src/pages/ueber.astro`)
- Full article text for every article except "Iterator-Helfer". Add a Markdown body to the article's file in `src/content/artikel/` to publish one.
