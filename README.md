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

- `src/pages/` – routes: `/`, `/standard/[ausgabe]/[kapitel]/`, `/artikel/`, `/artikel/[slug]/`, `/tutorials/[slug]/`, `/blog/`, `/ueber/`
- `src/components/` – header, footer, `LiveEditor`, and the shared Standard, Tutorial and Article views
- `src/data/` – all content (editions, chapters, tutorials, articles, posts)
- `src/scripts/` – client code: theme toggle, and the `<es-live-editor>` custom element
- `src/styles/broadsheet.css` – the Broadsheet design system (tokens and components); `site.css` holds the site's overrides and dark theme

## Design source

`project/` and `chats/` hold the Claude Design handoff bundle this site was built from (HTML prototypes and the design conversation). The home page implements variant **1c "Lernpfad"**.

## Open placeholders

- GitHub, RSS and donation links (`src/data/site.ts`)
- Newsletter form (there's no backend yet, so submitting does nothing)
- Impressum and privacy policy text (`src/pages/ueber.astro`)
- Full article text for every article except "Iterator-Helfer"
