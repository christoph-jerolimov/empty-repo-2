// Content ported from the Claude Design prototype (project/*.dc.html).

export interface Article {
  slug: string;
  title: string;
  teaser: string;
  tag: string;
  author: string;
  date: string;
  min: number;
}

export const ARTICLES: Article[] = [
  {
    "slug": "iterator-helfer",
    "title": "Iterator-Helfer: Endlich lazy, endlich lesbar",
    "teaser": "ES2025 gibt jedem Iterator map, filter, take und Co. Warum das mehr ist als Zucker – und wo Arrays trotzdem gewinnen.",
    "tag": "ES2025",
    "author": "Lena Hartmann",
    "date": "12. Sept. 2026",
    "min": 14
  },
  {
    "slug": "tc39",
    "title": "Was macht TC39 eigentlich – und wer sitzt da?",
    "teaser": "Das Komitee, das JavaScript weiterentwickelt, trifft sich sechsmal im Jahr. Wie ein Vorschlag von Stage 0 bis in den Standard kommt.",
    "tag": "Hintergrund",
    "author": "Jonas Weber",
    "date": "28. Aug. 2026",
    "min": 11
  },
  {
    "slug": "temporal",
    "title": "Temporal: Datum und Zeit ohne Tränen",
    "teaser": "Nach acht Jahren Arbeit ersetzt Temporal das alte Date. Ein Rundgang durch PlainDate, ZonedDateTime und Duration.",
    "tag": "Vorschlag",
    "author": "Lena Hartmann",
    "date": "3. Juli 2026",
    "min": 18
  },
  {
    "slug": "gleichheit",
    "title": "Warum == nicht dein Feind ist",
    "teaser": "Die abstrakte Gleichheit hat einen schlechten Ruf. Wer ihre Regeln aus Kapitel 7 kennt, versteht die Sprache besser – auch wenn er trotzdem === schreibt.",
    "tag": "Grundlagen",
    "author": "Mira Sattler",
    "date": "9. Mai 2026",
    "min": 9
  }
];

export const ARTICLE_TAGS = ['Alle', 'ES2025', 'Hintergrund', 'Vorschlag', 'Grundlagen'];
