// Content ported from the Claude Design prototype (project/*.dc.html).

export const LEARN_CODE = "// Ändere etwas und drück „Ausführen“\nconst sprachen = [\"JavaScript\", \"ECMAScript\", \"JScript\"];\n\nfor (const s of sprachen) {\n  console.log(`${s} hat ${s.length} Zeichen`);\n}\n\nconsole.log(typeof null, \"– ein Fehler aus 1995, der bleibt\");";

export const LEARNING_PATH: { n: number; slug: string; title: string; text: string; meta: string }[] = [
  {
    "n": 1,
    "title": "Destructuring in 10 Minuten",
    "text": "Werte aus Objekten und Arrays holen, ohne dich zu wiederholen.",
    "meta": "Einsteiger · 10 Min.",
    "slug": "destructuring"
  },
  {
    "n": 2,
    "title": "Optional Chaining und ??",
    "text": "Zwei Operatoren, die ganze if-Kaskaden ersetzen.",
    "meta": "Einsteiger · 8 Min.",
    "slug": "optional-chaining"
  },
  {
    "n": 3,
    "title": "Promises verstehen",
    "text": "Drei Zustände, eine Kette, ein await.",
    "meta": "Einsteiger · 15 Min.",
    "slug": "promises"
  },
  {
    "n": 4,
    "title": "Module: import und export",
    "text": "Code sauber trennen – live-Bindungen inklusive.",
    "meta": "Fortgeschritten · 12 Min.",
    "slug": "module"
  }
];
