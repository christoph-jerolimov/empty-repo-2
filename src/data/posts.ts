// Content ported from the Claude Design prototype (project/*.dc.html).

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  paras: string[];
  code?: string;
  codeTitle?: string;
}

export const POSTS: Post[] = [
  {
    "slug": "live-editor",
    "title": "Der Live-Editor ist da – überall",
    "date": "24. September 2026",
    "author": "Jonas",
    "paras": [
      "Bisher konntest du Code auf EcmaScript.de nur lesen. Ab heute läuft jedes Beispiel direkt im Browser: im Standard, in Artikeln, in Tutorials, hier im Blog. Links der Code, rechts die Konsole. Ändere, was du willst – nichts davon verlässt deinen Browser.",
      "Async-Code funktioniert auch, Top-Level await inklusive. Wer Bugs findet: GitHub-Issue, bitte."
    ],
    "code": "console.log(\"Hallo aus dem Blog!\");\nconsole.log([1, 2, 3].map(n => n ** 2));\nawait new Promise(r => setTimeout(r, 30));\nconsole.info(\"… und 30 ms später\");",
    "codeTitle": "Probier’s aus"
  },
  {
    "slug": "tc39-juli",
    "title": "Rückblick: TC39 im Juli",
    "date": "2. August 2026",
    "author": "Lena",
    "paras": [
      "Das 109. Treffen hat zwei Vorschläge auf Stage 4 gehoben, drei auf Stage 3. Am interessantesten für den Alltag: die Decorators-Diskussion ist nach langem Stillstand wieder in Bewegung, und Temporal ist in allen großen Engines hinter Flags oder bereits standardmäßig verfügbar.",
      "Wir haben die Kapitelübersicht für die ES2026-Ausgabe entsprechend aktualisiert."
    ]
  },
  {
    "slug": "es2025",
    "title": "ES2025 ist da – was drin ist",
    "date": "27. Juni 2026",
    "author": "Mira",
    "paras": [
      "Die Ecma-Generalversammlung hat die 16. Ausgabe verabschiedet. Die für uns wichtigsten Neuerungen: Iterator-Helfer, Set-Methoden, Import-Attribute mit JSON-Modulen, RegExp-Modifier und Promise.try. Kapitel 24 und 27 sind bereits übersetzt."
    ],
    "code": "console.log(await Promise.try(() => \"läuft synchron oder asynchron – egal\"));\nconsole.log(/(?i:hallo) Welt/.test(\"HALLO Welt\"));",
    "codeTitle": "Zwei ES2025-Neuheiten"
  },
  {
    "slug": "willkommen",
    "title": "Willkommen auf EcmaScript.de",
    "date": "15. Mai 2026",
    "author": "Jonas",
    "paras": [
      "Wir sind drei Leute, die den ECMAScript-Standard auf Deutsch lesbar machen wollen. Nicht als Wort-für-Wort-Übersetzung – die wäre genauso trocken wie das Original –, sondern kommentiert, mit Beispielen und in einer Sprache, die man auch nach Feierabend versteht.",
      "Wir sind nicht offiziell. Wir haben nichts mit Ecma International oder TC39 zu tun, außer dass wir ihre Arbeit sehr schätzen. Wenn du Fehler findest oder mitübersetzen willst: Alles liegt auf GitHub."
    ]
  }
];
