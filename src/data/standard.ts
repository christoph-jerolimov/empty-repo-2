// Content ported from the Claude Design prototype (project/*.dc.html).

export interface Edition { id: string; label: string; meta: string; highlights: string }
export interface Example { title: string; code: string }
export interface Chapter {
  de: string;
  en: string;
  /** Index into EDITIONS of the first edition that has this chapter. */
  since?: number;
  paras: string[];
  subs?: string[];
  example?: Example;
  draft?: boolean;
}

export const EDITIONS: Edition[] = [
  {
    "id": "es5",
    "label": "ES5",
    "meta": "5.1. Ausgabe · Juni 2011",
    "highlights": "Strict Mode, JSON, Array-Methoden wie map und forEach, Getter und Setter, Object.defineProperty."
  },
  {
    "id": "es2015",
    "label": "ES2015",
    "meta": "6. Ausgabe · Juni 2015",
    "highlights": "let und const, Klassen, Module, Promises, Arrow Functions, Template Literals, Destructuring, Map und Set, Symbole, Generatoren."
  },
  {
    "id": "es2020",
    "label": "ES2020",
    "meta": "11. Ausgabe · Juni 2020",
    "highlights": "Optional Chaining ?., Nullish Coalescing ??, BigInt, dynamisches import(), Promise.allSettled, globalThis, String.prototype.matchAll."
  },
  {
    "id": "es2023",
    "label": "ES2023",
    "meta": "14. Ausgabe · Juni 2023",
    "highlights": "findLast und findLastIndex, toSorted, toReversed, toSpliced und with, Hashbang-Grammatik, Symbole als WeakMap-Schlüssel."
  },
  {
    "id": "es2025",
    "label": "ES2025",
    "meta": "16. Ausgabe · Juni 2025",
    "highlights": "Iterator-Helfer, neue Set-Methoden, Import-Attribute und JSON-Module, RegExp-Modifier und Duplicate Named Groups, Promise.try, Float16Array."
  },
  {
    "id": "es2026",
    "label": "ES2026 (Entwurf)",
    "meta": "17. Ausgabe · Entwurf",
    "highlights": "Array.fromAsync, Error.isError, Math.sumPrecise, Base64- und Hex-Methoden auf Uint8Array, Explicit Resource Management (using)."
  }
];

/** Chapters of the modern (ES2015+) spec. Each edition shows those with since <= its index. */
export const CHAPTERS: Chapter[] = [
  {
    "de": "Geltungsbereich",
    "en": "Scope",
    "since": 0,
    "paras": [
      "Dieser Standard definiert die Programmiersprache ECMAScript – das, was du im Alltag JavaScript nennst. Er legt fest, welche Syntax gültig ist, wie Programme ausgewertet werden und welche eingebauten Objekte jede Umgebung mitbringen muss.",
      "Nicht Teil des Standards: das DOM, fetch, Node-APIs oder irgendetwas, das mit einer konkreten Plattform zu tun hat. Diese Dinge kommen aus anderen Spezifikationen."
    ],
    "subs": []
  },
  {
    "de": "Konformität",
    "en": "Conformance",
    "since": 0,
    "paras": [
      "Eine konforme Implementierung muss alles unterstützen, was der Standard beschreibt – darf aber zusätzliche Objekte, Eigenschaften und Syntax anbieten, solange sie dem Standard nicht widersprechen."
    ],
    "subs": []
  },
  {
    "de": "Normative Referenzen",
    "en": "Normative References",
    "since": 0,
    "paras": [
      "Der Standard baut auf anderen Normen auf, vor allem auf IEEE 754 (Gleitkommazahlen) und dem Unicode-Standard. Wo diese Dokumente etwas festlegen, gilt es auch hier."
    ],
    "subs": [],
    "draft": true
  },
  {
    "de": "Überblick",
    "en": "Overview",
    "since": 0,
    "paras": [
      "Das freundlichste Kapitel des Standards: Hier wird erklärt, was ECMAScript überhaupt ist – eine objektbasierte Sprache, in der fast alles ein Objekt mit Eigenschaften ist, mit Prototypen statt Klassen als Vererbungsmechanismus (auch wenn es seit ES2015 die class-Syntax gibt).",
      "Außerdem definiert das Kapitel die Begriffe, die überall sonst benutzt werden: Typ, primitiver Wert, Objekt, Konstruktor, Prototyp, eingebautes Objekt, undefined, null, Boolean, String, Number, BigInt, Symbol und mehr."
    ],
    "subs": [
      "Web-Scripting",
      "Hosts und Implementierungen",
      "ECMAScript-Überblick",
      "Begriffe und Definitionen",
      "Aufbau dieser Spezifikation"
    ]
  },
  {
    "de": "Notationskonventionen",
    "en": "Notational Conventions",
    "since": 0,
    "paras": [
      "Wie liest man diese Spezifikation? Das Kapitel erklärt die Grammatiknotation (kontextfreie Grammatiken mit Produktionen), die Algorithmusschritte und Konventionen wie „Let x be …“ oder ReturnIfAbrupt."
    ],
    "subs": [
      "Syntaktische und lexikalische Grammatiken",
      "Algorithmuskonventionen",
      "Laufzeitsemantik",
      "Statische Semantik"
    ]
  },
  {
    "de": "Datentypen und Werte",
    "en": "ECMAScript Data Types and Values",
    "since": 0,
    "paras": [
      "Sieben primitive Typen und ein Objekttyp: Undefined, Null, Boolean, String, Symbol, Number, BigInt – und Object. Das Kapitel definiert jeden Typ genau: Strings sind Folgen von 16-Bit-Codeeinheiten, Numbers sind IEEE-754-Doubles, BigInts beliebig groß.",
      "Daneben gibt es Spezifikationstypen, die nur im Standard selbst existieren – Records, Completion Records, Property Descriptors, Environment Records. Du siehst sie nie im Code, aber sie erklären, warum sich Code so verhält, wie er es tut."
    ],
    "subs": [
      "Sprachtypen",
      "Spezifikationstypen"
    ],
    "example": {
      "title": "typeof und die sieben Primitive",
      "code": "const werte = [undefined, null, true, \"Text\", Symbol(\"s\"), 42, 42n, {}];\nfor (const w of werte) console.log(typeof w, \"→\", String(w));\n\n// Bekannte Stolperfalle: typeof null\nconsole.log(\"null ist ein\", typeof null, \"– historischer Fehler, bleibt aus Kompatibilität\");"
    }
  },
  {
    "de": "Abstrakte Operationen",
    "en": "Abstract Operations",
    "since": 0,
    "paras": [
      "Die Werkzeugkiste der Spezifikation: ToNumber, ToString, ToPrimitive, IsCallable, SameValue, … Diese Operationen sind kein JavaScript, das du aufrufen könntest – sie beschreiben, was intern passiert, wenn du zum Beispiel \"5\" * 2 schreibst."
    ],
    "subs": [
      "Typkonvertierung",
      "Test- und Vergleichsoperationen",
      "Operationen auf Objekten",
      "Operationen auf Iteratoren"
    ],
    "example": {
      "title": "ToPrimitive in Aktion",
      "code": "const konto = {\n  saldo: 120,\n  valueOf() { return this.saldo; },\n  toString() { return `Konto (${this.saldo} €)`; }\n};\n\nconsole.log(konto + 30);      // Hinweis \"default\" → valueOf\nconsole.log(`${konto}`);      // Hinweis \"string\"  → toString\nconsole.log(konto > 100);"
    }
  },
  {
    "de": "Syntaxgesteuerte Operationen",
    "en": "Syntax-Directed Operations",
    "since": 2,
    "paras": [
      "Operationen, die über den Syntaxbaum definiert sind: BoundNames, Contains, Evaluation. Für jede Produktion der Grammatik steht hier, was sie bedeutet."
    ],
    "subs": [],
    "draft": true
  },
  {
    "de": "Ausführbarer Code und Ausführungskontexte",
    "en": "Executable Code and Execution Contexts",
    "since": 0,
    "paras": [
      "Hier steckt das Modell hinter Scopes, Closures und dem Event Loop: Environment Records speichern Bindungen, Realms kapseln globale Objekte, Execution Contexts liegen auf einem Stack, und Jobs (die Grundlage für Promises) werden nacheinander abgearbeitet.",
      "Wenn du je wissen wolltest, warum eine Closure ihre Variablen behält oder warum ein await den Rest der Funktion „später“ ausführt – hier steht es."
    ],
    "subs": [
      "Environment Records",
      "PrivateEnvironment Records",
      "Realms",
      "Ausführungskontexte",
      "Jobs und Host-Operationen",
      "Agents"
    ],
    "example": {
      "title": "Closures und Jobs",
      "code": "function zaehler() {\n  let n = 0;                 // lebt im Environment Record der Funktion\n  return () => ++n;\n}\nconst tick = zaehler();\nconsole.log(tick(), tick(), tick());\n\nconsole.log(\"1 – synchron\");\nPromise.resolve().then(() => console.log(\"3 – Promise-Job\"));\nconsole.log(\"2 – noch synchron\");"
    }
  },
  {
    "de": "Gewöhnliche und exotische Objekte",
    "en": "Ordinary and Exotic Objects Behaviours",
    "since": 0,
    "paras": [
      "Jedes Objekt hat interne Methoden wie [[Get]], [[Set]] und [[DefineOwnProperty]]. „Gewöhnliche“ Objekte verhalten sich alle gleich; „exotische“ – Arrays, Strings, Proxies, Module-Namespaces – überschreiben einzelne Methoden. Deshalb aktualisiert ein Array seine length, wenn du arr[10] setzt."
    ],
    "subs": [
      "Gewöhnliche Objekte",
      "Eingebaute exotische Objekte",
      "Proxy-Objekte"
    ],
    "example": {
      "title": "Ein Array ist exotisch",
      "code": "const a = [1, 2, 3];\na[6] = 7;\nconsole.log(a.length, a);\n\n// Proxy: eigene interne Methoden\nconst laut = new Proxy({}, {\n  get: (ziel, key) => `Du wolltest „${String(key)}“`\n});\nconsole.log(laut.irgendwas);"
    }
  },
  {
    "de": "Quelltext",
    "en": "ECMAScript Language: Source Text",
    "since": 0,
    "paras": [
      "Quelltext ist eine Folge von Unicode-Codepoints. Das Kapitel definiert, was Whitespace, Zeilenumbrüche, Kommentare und Hashbang-Zeilen sind."
    ],
    "subs": []
  },
  {
    "de": "Lexikalische Grammatik",
    "en": "Lexical Grammar",
    "since": 0,
    "paras": [
      "Wie aus Zeichen Tokens werden: Bezeichner, Schlüsselwörter, Literale, Punctuatoren. Auch die berühmte automatische Semikolon-Einfügung (ASI) ist hier definiert – mit ihren drei Regeln und den Fällen, in denen sie dich überrascht."
    ],
    "subs": [
      "Unicode-Formatzeichen",
      "Whitespace",
      "Zeilenumbrüche",
      "Kommentare",
      "Tokens",
      "Namen und Schlüsselwörter",
      "Literale",
      "Automatische Semikolon-Einfügung"
    ],
    "example": {
      "title": "ASI-Überraschung",
      "code": "function ohne() {\n  return\n    \"kommt nie an\"\n}\nconsole.log(ohne());\n\nfunction mit() {\n  return (\n    \"kommt an\"\n  );\n}\nconsole.log(mit());"
    }
  },
  {
    "de": "Ausdrücke",
    "en": "Expressions",
    "since": 0,
    "paras": [
      "Das längste Kapitel: primäre Ausdrücke, Member-Zugriff, Optional Chaining, Operatoren mit ihren Präzedenzen, Zuweisungen, der Komma-Operator. Für jeden Operator steht die exakte Auswertungsreihenfolge und Typkonvertierung."
    ],
    "subs": [
      "Bezeichner",
      "Primäre Ausdrücke",
      "Linksseitige Ausdrücke",
      "Update-Ausdrücke",
      "Unäre Operatoren",
      "Exponentialoperator",
      "Multiplikative Operatoren",
      "Additive Operatoren",
      "Bitweise Shift-Operatoren",
      "Relationale Operatoren",
      "Gleichheitsoperatoren",
      "Binäre bitweise Operatoren",
      "Binäre logische Operatoren",
      "Bedingungsoperator",
      "Zuweisungsoperatoren",
      "Komma-Operator"
    ],
    "example": {
      "title": "Optional Chaining & Nullish Coalescing",
      "code": "const nutzer = { name: \"Ada\", adresse: null };\n\nconsole.log(nutzer.adresse?.stadt);\nconsole.log(nutzer.adresse?.stadt ?? \"unbekannt\");\nconsole.log(nutzer.spitzname || \"kein Spitzname\");\n\n// ?? vs ||: der Unterschied bei 0 und \"\"\nconst anzahl = 0;\nconsole.log(anzahl || 10, anzahl ?? 10);"
    }
  },
  {
    "de": "Anweisungen und Deklarationen",
    "en": "Statements and Declarations",
    "since": 0,
    "paras": [
      "Blöcke, let/const/var, if, Schleifen inklusive for-of und for-await-of, switch, try/catch/finally, labels. Auch die Semantik der Temporal Dead Zone von let und const ist hier festgelegt."
    ],
    "subs": [
      "Block",
      "Deklarationen",
      "Leere Anweisung",
      "Ausdrucksanweisung",
      "if",
      "Iterationsanweisungen",
      "continue / break / return",
      "with",
      "switch",
      "Markierte Anweisungen",
      "throw",
      "try",
      "debugger"
    ],
    "example": {
      "title": "Temporal Dead Zone",
      "code": "try {\n  console.log(spaeter);\n  let spaeter = 1;\n} catch (e) {\n  console.error(e.message);\n}\n\nconsole.log(typeof hoisted, \"– var wird gehoistet\");\nvar hoisted = 2;"
    }
  },
  {
    "de": "Funktionen und Klassen",
    "en": "Functions and Classes",
    "since": 0,
    "paras": [
      "Funktionsdeklarationen, Arrow Functions, Methoden, Generatoren, async-Funktionen und Klassen mit Feldern, privaten Namen (#name) und statischen Blöcken. Dazu: Parameterlisten mit Defaults, Rest und Destructuring."
    ],
    "subs": [
      "Parameterlisten",
      "Funktionsdefinitionen",
      "Arrow Functions",
      "Methodendefinitionen",
      "Generatorfunktionen",
      "Async-Generatorfunktionen",
      "Klassendefinitionen",
      "Async-Funktionen",
      "Async-Arrow-Functions",
      "Tail-Position-Aufrufe"
    ],
    "example": {
      "title": "Klassen mit privaten Feldern",
      "code": "class Konto {\n  #saldo = 0;\n  static #anzahl = 0;\n  static { console.log(\"Klasse wird initialisiert\"); }\n  constructor(name) { this.name = name; Konto.#anzahl++; }\n  einzahlen(betrag) { this.#saldo += betrag; return this; }\n  get saldo() { return this.#saldo; }\n  static get anzahl() { return Konto.#anzahl; }\n}\nconst k = new Konto(\"Ada\").einzahlen(50).einzahlen(25);\nconsole.log(k.saldo, Konto.anzahl);\nconsole.log(Object.keys(k));   // #saldo ist unsichtbar"
    }
  },
  {
    "de": "Skripte und Module",
    "en": "Scripts and Modules",
    "since": 1,
    "paras": [
      "Zwei Arten von Programmen: Skripte (klassisch) und Module (immer strict, eigener Scope, import/export). Das Kapitel beschreibt Linking, Evaluation, zyklische Abhängigkeiten, Top-Level await und seit ES2025 auch Import-Attribute wie with { type: \"json\" }."
    ],
    "subs": [
      "Skripte",
      "Module"
    ]
  },
  {
    "de": "Fehlerbehandlung",
    "en": "Error Handling and Language Extensions",
    "since": 0,
    "paras": [
      "Wann welcher Fehler geworfen wird – SyntaxError früh beim Parsen, TypeError und RangeError zur Laufzeit – und welche Erweiterungen Implementierungen erlauben dürfen."
    ],
    "subs": []
  },
  {
    "de": "Eingebaute Standardobjekte",
    "en": "ECMAScript Standard Built-in Objects",
    "since": 0,
    "paras": [
      "Die Spielregeln für alle folgenden Kapitel: Eingebaute Funktionen haben eine length und einen name, sind nicht per new aufrufbar, sofern nicht anders gesagt, und ihre Eigenschaften sind standardmäßig writable und configurable, aber nicht enumerable."
    ],
    "subs": []
  },
  {
    "de": "Das globale Objekt",
    "en": "The Global Object",
    "since": 0,
    "paras": [
      "globalThis, Infinity, NaN, undefined, eval, isFinite, isNaN, parseFloat, parseInt, die URI-Funktionen – und die Liste aller Konstruktoren, die global erreichbar sein müssen."
    ],
    "subs": [
      "Wert-Eigenschaften",
      "Funktions-Eigenschaften",
      "Konstruktor-Eigenschaften",
      "Weitere Eigenschaften"
    ]
  },
  {
    "de": "Fundamentale Objekte",
    "en": "Fundamental Objects",
    "since": 0,
    "paras": [
      "Object, Function, Boolean, Symbol und die Error-Hierarchie. Hier stehen Object.keys, Object.groupBy, structuredClone gehört übrigens nicht hierher – das ist HTML."
    ],
    "subs": [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Error-Objekte"
    ],
    "example": {
      "title": "Object.groupBy (ES2024)",
      "code": "const buecher = [\n  { titel: \"Eloquent JS\", jahr: 2018 },\n  { titel: \"You Don't Know JS\", jahr: 2020 },\n  { titel: \"JS: The Good Parts\", jahr: 2008 }\n];\nconst nachJahrzehnt = Object.groupBy(buecher, b => `${Math.floor(b.jahr / 10) * 10}er`);\nconsole.log(nachJahrzehnt);"
    }
  },
  {
    "de": "Zahlen und Datum",
    "en": "Numbers and Dates",
    "since": 0,
    "paras": [
      "Number, BigInt, Math und Date. Das Date-Kapitel ist berüchtigt – Monate ab 0, Zeitzonen-Chaos – und der Grund, warum Temporal so lange in Arbeit war."
    ],
    "subs": [
      "Number",
      "BigInt",
      "Math",
      "Date"
    ],
    "example": {
      "title": "Number vs. BigInt",
      "code": "console.log(0.1 + 0.2);\nconsole.log(Number.MAX_SAFE_INTEGER + 2);\nconsole.log(9007199254740993n + 2n);\nconsole.log(Number.isSafeInteger(2 ** 53));\n\ntry { console.log(1n + 1); } catch (e) { console.error(e.message); }"
    }
  },
  {
    "de": "Textverarbeitung",
    "en": "Text Processing",
    "since": 0,
    "paras": [
      "String und RegExp. Alle String-Methoden von at bis trimEnd, Unicode-Normalisierung, und die komplette Grammatik regulärer Ausdrücke inklusive Named Groups, Lookbehind, dem v-Flag und seit ES2025 Inline-Modifiern."
    ],
    "subs": [
      "String",
      "RegExp"
    ],
    "example": {
      "title": "Named Groups und matchAll",
      "code": "const text = \"ES2015, ES2020 und ES2025\";\nconst re = /ES(?<jahr>\\d{4})/g;\nfor (const m of text.matchAll(re)) console.log(m.groups.jahr, \"an Position\", m.index);\n\nconsole.log(\"straße\".normalize(\"NFD\").length, \"straße\".length);"
    }
  },
  {
    "de": "Indizierte Sammlungen",
    "en": "Indexed Collections",
    "since": 0,
    "paras": [
      "Array und die TypedArrays. Hier sind alle Array-Methoden definiert – auch die nicht-mutierenden aus ES2023 (toSorted, toReversed, toSpliced, with) und Array.fromAsync aus ES2026."
    ],
    "subs": [
      "Array-Objekte",
      "TypedArray-Objekte"
    ],
    "example": {
      "title": "Nicht-mutierende Array-Methoden",
      "code": "const original = [3, 1, 2];\nconst sortiert = original.toSorted();\nconst getauscht = original.with(0, 99);\n\nconsole.log(original, sortiert, getauscht);\nconsole.log(original.at(-1), original.findLast(n => n < 3));"
    }
  },
  {
    "de": "Schlüsselbasierte Sammlungen",
    "en": "Keyed Collections",
    "since": 1,
    "paras": [
      "Map, Set, WeakMap und WeakSet. Seit ES2025 hat Set endlich Mengenoperationen: union, intersection, difference, symmetricDifference, isSubsetOf, isSupersetOf, isDisjointFrom."
    ],
    "subs": [
      "Map",
      "Set",
      "WeakMap",
      "WeakSet"
    ],
    "example": {
      "title": "Set-Methoden (ES2025)",
      "code": "const frontend = new Set([\"JS\", \"CSS\", \"HTML\"]);\nconst backend  = new Set([\"JS\", \"SQL\", \"Go\"]);\n\nconsole.log([...frontend.union(backend)]);\nconsole.log([...frontend.intersection(backend)]);\nconsole.log([...frontend.difference(backend)]);\nconsole.log(new Set([\"JS\"]).isSubsetOf(frontend));"
    }
  },
  {
    "de": "Strukturierte Daten",
    "en": "Structured Data",
    "since": 0,
    "paras": [
      "ArrayBuffer, SharedArrayBuffer, DataView, Atomics und JSON. Ab ES2024 können ArrayBuffer wachsen (resizable), ab ES2026 kann Uint8Array direkt nach Base64 und Hex konvertieren."
    ],
    "subs": [
      "ArrayBuffer",
      "SharedArrayBuffer",
      "DataView",
      "Atomics",
      "JSON"
    ],
    "example": {
      "title": "JSON mit Reviver",
      "code": "const roh = '{\"titel\":\"ES2026\",\"datum\":\"2026-06-25T10:00:00Z\"}';\nconst obj = JSON.parse(roh, (k, v) =>\n  k === \"datum\" ? new Date(v) : v\n);\nconsole.log(obj.datum instanceof Date, obj.datum.getFullYear());\nconsole.log(JSON.stringify({ a: 1, b: undefined, c: () => 1 }));"
    }
  },
  {
    "de": "Speicherverwaltung",
    "en": "Managing Memory",
    "since": 3,
    "paras": [
      "WeakRef und FinalizationRegistry – die einzigen Stellen, an denen JavaScript dir den Garbage Collector zeigt. Der Standard warnt selbst: Benutz das nur, wenn du wirklich musst."
    ],
    "subs": [
      "WeakRef",
      "FinalizationRegistry"
    ]
  },
  {
    "de": "Kontrollabstraktionen",
    "en": "Control Abstraction Objects",
    "since": 1,
    "paras": [
      "Iteration, Generatoren, Promises, async-Funktionen. Seit ES2025 auch die Iterator-Helfer: map, filter, take, drop, flatMap, reduce, toArray, forEach, some, every, find – lazy, direkt auf jedem Iterator."
    ],
    "subs": [
      "Iteration",
      "Promise",
      "GeneratorFunction",
      "AsyncGeneratorFunction",
      "Generator",
      "AsyncGenerator",
      "AsyncFunction"
    ],
    "example": {
      "title": "Iterator-Helfer (ES2025)",
      "code": "function* natuerliche() { let n = 1; while (true) yield n++; }\n\nconst ergebnis = natuerliche()\n  .filter(n => n % 2 === 0)\n  .map(n => n * n)\n  .take(5)\n  .toArray();\nconsole.log(ergebnis);\n\nconst ergebnisse = await Promise.allSettled([\n  Promise.resolve(\"ok\"), Promise.reject(new Error(\"nope\"))\n]);\nconsole.log(ergebnisse.map(r => r.status));"
    }
  },
  {
    "de": "Reflexion",
    "en": "Reflection",
    "since": 1,
    "paras": [
      "Reflect und Proxy: Metaprogrammierung. Reflect spiegelt die internen Methoden aus Kapitel 10 eins zu eins als Funktionen; Proxy lässt dich sie abfangen."
    ],
    "subs": [
      "Reflect",
      "Proxy",
      "Module-Namespace-Objekte"
    ]
  },
  {
    "de": "Speichermodell",
    "en": "Memory Model",
    "since": 2,
    "paras": [
      "Wie sich SharedArrayBuffer und Atomics zwischen Agents verhalten – Reihenfolge, Sichtbarkeit, Race Conditions. Nur relevant, wenn du mit Web Workers und geteiltem Speicher arbeitest."
    ],
    "subs": [],
    "draft": true
  }
];

/** ES5.1 had a different chapter structure. */
export const ES5_CHAPTERS: Chapter[] = [
  {
    "de": "Geltungsbereich",
    "en": "Scope",
    "paras": [
      "ECMAScript 5.1 – die Ausgabe, die das „moderne“ JavaScript vorbereitet hat: Strict Mode, JSON, Property-Descriptors."
    ]
  },
  {
    "de": "Konformität",
    "en": "Conformance",
    "paras": [
      "Anforderungen an konforme Implementierungen."
    ]
  },
  {
    "de": "Normative Referenzen",
    "en": "Normative References",
    "paras": [
      "IEEE 754, Unicode 3.0, ISO/IEC 10646."
    ]
  },
  {
    "de": "Überblick",
    "en": "Overview",
    "paras": [
      "Objektbasierte Sprache, Prototypen, Begriffe."
    ]
  },
  {
    "de": "Notationskonventionen",
    "en": "Notational Conventions",
    "paras": [
      "Grammatiknotation und Algorithmusschritte."
    ]
  },
  {
    "de": "Quelltext",
    "en": "Source Text",
    "paras": [
      "Quelltext als Folge von UTF-16-Codeeinheiten."
    ]
  },
  {
    "de": "Lexikalische Konventionen",
    "en": "Lexical Conventions",
    "paras": [
      "Tokens, Literale, reservierte Wörter, ASI."
    ]
  },
  {
    "de": "Typen",
    "en": "Types",
    "paras": [
      "Undefined, Null, Boolean, String, Number, Object – fünf Primitive, noch ohne Symbol und BigInt."
    ],
    "example": {
      "title": "Fünf Primitive in ES5",
      "code": "var werte = [undefined, null, true, \"Text\", 42];\nfor (var i = 0; i < werte.length; i++) console.log(typeof werte[i]);"
    }
  },
  {
    "de": "Typkonvertierung und Tests",
    "en": "Type Conversion and Testing",
    "paras": [
      "ToPrimitive, ToBoolean, ToNumber, ToString, ToObject."
    ]
  },
  {
    "de": "Ausführbarer Code und Ausführungskontexte",
    "en": "Executable Code and Execution Contexts",
    "paras": [
      "Lexical Environments, Variable Instantiation, Strict Mode Code."
    ]
  },
  {
    "de": "Ausdrücke",
    "en": "Expressions",
    "paras": [
      "Operatoren und ihre Semantik."
    ]
  },
  {
    "de": "Anweisungen",
    "en": "Statements",
    "paras": [
      "var, if, Schleifen, switch, try."
    ]
  },
  {
    "de": "Funktionsdefinition",
    "en": "Function Definition",
    "paras": [
      "Funktionsdeklaration, -ausdruck und Function-Konstruktor."
    ]
  },
  {
    "de": "Programm",
    "en": "Program",
    "paras": [
      "Das Programm als Folge von Source Elements."
    ]
  },
  {
    "de": "Eingebaute Standardobjekte",
    "en": "Standard Built-in ECMAScript Objects",
    "paras": [
      "Global, Object, Function, Array, String, Boolean, Number, Math, Date, RegExp, Error, JSON."
    ],
    "example": {
      "title": "Neu in ES5: Array-Iterationsmethoden",
      "code": "var zahlen = [1, 2, 3, 4];\nconsole.log(zahlen.filter(function (n) { return n % 2 === 0; }));\nconsole.log(zahlen.reduce(function (a, b) { return a + b; }, 0));\nconsole.log(JSON.stringify({ es: 5 }));"
    }
  },
  {
    "de": "Fehler",
    "en": "Errors",
    "paras": [
      "Wann SyntaxError, TypeError, RangeError etc. geworfen werden."
    ]
  }
];

export const DEFAULT_EDITION = 'es2026';
export const DEFAULT_CHAPTER = 13;

export function chaptersFor(editionId: string): Chapter[] {
  const idx = EDITIONS.findIndex((e) => e.id === editionId);
  if (idx <= 0) return ES5_CHAPTERS;
  return CHAPTERS.filter((c) => (c.since ?? 0) <= idx);
}

export function chapterHref(editionId: string, n: number): string {
  return `/standard/${editionId}/${n}/`;
}
