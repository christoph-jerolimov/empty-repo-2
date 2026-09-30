// Content ported from the Claude Design prototype (project/*.dc.html).

export interface TutorialStep { title: string; text: string; label: string; code: string }
export interface Tutorial {
  slug: string;
  title: string;
  level: string;
  min: number;
  since: string;
  intro: string;
  spec: string;
  /** Chapter number in the ES2026 edition that `spec` refers to. */
  specChapter: number;
  task: string;
  steps: TutorialStep[];
}

export const TUTORIALS: Tutorial[] = [
  {
    "slug": "destructuring",
    "title": "Destructuring in 10 Minuten",
    "level": "Einsteiger",
    "min": 10,
    "since": "seit ES2015",
    "intro": "Werte aus Objekten und Arrays herausholen, ohne dreimal denselben Namen zu tippen.",
    "spec": "Kapitel 13.15 – Destructuring Assignment",
    "task": "Schreib eine Funktion, die aus { vorname, nachname, adresse: { stadt } } den String „Vorname Nachname aus Stadt“ baut – mit genau einer Zeile Destructuring im Parameter.",
    "steps": [
      {
        "title": "Objekte",
        "text": "Die geschweiften Klammern auf der linken Seite spiegeln die Form des Objekts. Fehlende Werte werden undefined – oder bekommen einen Default.",
        "label": "Objekt-Destructuring",
        "code": "const nutzer = { name: \"Ada\", sprache: \"JS\", stadt: \"Bonn\" };\nconst { name, sprache, land = \"DE\" } = nutzer;\nconsole.log(name, sprache, land);\n\n// umbenennen:\nconst { stadt: wohnort } = nutzer;\nconsole.log(wohnort);"
      },
      {
        "title": "Arrays",
        "text": "Bei Arrays zählt die Position. Was du nicht brauchst, überspringst du mit einem leeren Platz; den Rest sammelst du mit …rest.",
        "label": "Array-Destructuring",
        "code": "const [erste, , dritte, ...rest] = [10, 20, 30, 40, 50];\nconsole.log(erste, dritte, rest);\n\n// Werte tauschen ohne Hilfsvariable\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b);"
      },
      {
        "title": "In Parametern",
        "text": "Der eigentliche Gewinn: Funktionen, die ein Optionsobjekt bekommen, dokumentieren sich selbst.",
        "label": "Parameter",
        "code": "function begruesse({ name, foermlich = false } = {}) {\n  return foermlich ? `Guten Tag, ${name}.` : `Hi ${name}!`;\n}\nconsole.log(begruesse({ name: \"Ada\" }));\nconsole.log(begruesse({ name: \"Frau Lovelace\", foermlich: true }));\nconsole.log(begruesse());"
      }
    ],
    "specChapter": 13
  },
  {
    "slug": "promises",
    "title": "Promises verstehen",
    "level": "Einsteiger",
    "min": 15,
    "since": "seit ES2015",
    "intro": "Ein Promise ist ein Versprechen auf einen Wert, der noch nicht da ist. Sobald du das Zustandsmodell im Kopf hast, ist async/await nur noch Schreibweise.",
    "spec": "Kapitel 27.2 – Promise Objects",
    "task": "Schreib eine Funktion warte(ms), die ein Promise zurückgibt, das nach ms Millisekunden erfüllt wird – und benutze sie mit await in einer Schleife, die 1, 2, 3 im Sekundentakt loggt.",
    "steps": [
      {
        "title": "Drei Zustände",
        "text": "pending, fulfilled, rejected. Ein Promise wechselt genau einmal – danach ist es „settled“ und ändert sich nie wieder.",
        "label": "Zustände",
        "code": "const p = new Promise((resolve, reject) => {\n  resolve(\"erster Wert\");\n  resolve(\"wird ignoriert\");\n  reject(new Error(\"wird auch ignoriert\"));\n});\np.then(v => console.log(\"fulfilled:\", v));\nconsole.log(\"dieser Log kommt zuerst – .then ist immer asynchron\");"
      },
      {
        "title": "Ketten",
        "text": "Jedes .then gibt ein neues Promise zurück. Gibst du im Callback einen Wert zurück, wird er weitergereicht; gibst du ein Promise zurück, wird darauf gewartet.",
        "label": "then-Kette",
        "code": "Promise.resolve(2)\n  .then(n => n * 2)\n  .then(n => new Promise(r => setTimeout(() => r(n + 1), 10)))\n  .then(n => { console.log(\"Ergebnis:\", n); throw new Error(\"Absicht\"); })\n  .catch(e => console.error(\"gefangen:\", e.message))\n  .finally(() => console.log(\"finally läuft immer\"));"
      },
      {
        "title": "async/await",
        "text": "Dasselbe, nur lesbarer. await pausiert die Funktion, nicht das Programm.",
        "label": "async/await",
        "code": "const warte = ms => new Promise(r => setTimeout(r, ms));\n\nasync function lade() {\n  console.log(\"Start\");\n  await warte(20);\n  console.log(\"20 ms später\");\n  return \"fertig\";\n}\nconsole.log(await lade());\n\n// parallel statt nacheinander:\nconst [a, b] = await Promise.all([warte(10).then(() => \"A\"), warte(10).then(() => \"B\")]);\nconsole.log(a, b);"
      }
    ],
    "specChapter": 27
  },
  {
    "slug": "module",
    "title": "Module: import und export",
    "level": "Fortgeschritten",
    "min": 12,
    "since": "seit ES2015",
    "intro": "Module sind die einzige Art, Code in JavaScript sauber zu trennen. Sie sind immer strict, haben einen eigenen Scope und werden genau einmal ausgewertet.",
    "spec": "Kapitel 16.2 – Modules",
    "task": "Überleg dir, welche der Exporte in deinem letzten Projekt Default-Exporte waren – und ob benannte Exporte nicht die bessere Wahl gewesen wären (Tipp: fast immer).",
    "steps": [
      {
        "title": "Benannt oder Default",
        "text": "Benannte Exporte sind explizit und lassen sich umbenennen; Default-Exporte sind bequem, aber jeder Importeur erfindet einen eigenen Namen. Hier simulieren wir ein Modul als Objekt – echte Module brauchen mehrere Dateien.",
        "label": "Exporte (simuliert)",
        "code": "// mathe.js\nconst mathe = {\n  PI: 3.14159,\n  quadrat: n => n * n,\n  default: function flaeche(r) { return mathe.PI * mathe.quadrat(r); }\n};\n\n// main.js  —  import flaeche, { PI, quadrat as q } from \"./mathe.js\";\nconst { default: flaeche, PI, quadrat: q } = mathe;\nconsole.log(PI, q(3), flaeche(2).toFixed(2));"
      },
      {
        "title": "Live-Bindungen",
        "text": "Ein Import ist keine Kopie, sondern ein Verweis. Ändert das Modul seine exportierte Variable, sieht der Importeur den neuen Wert.",
        "label": "Live-Bindung",
        "code": "// Module exportieren Bindungen, keine Werte. Nachgestellt mit einem Getter:\nconst modul = (() => {\n  let zaehler = 0;\n  return { get zaehler() { return zaehler; }, erhoehe() { zaehler++; } };\n})();\n\nconsole.log(modul.zaehler);\nmodul.erhoehe();\nconsole.log(modul.zaehler, \"– der Import sieht den neuen Wert\");"
      },
      {
        "title": "Dynamisch laden",
        "text": "import() gibt ein Promise auf den Modul-Namespace zurück – perfekt für Code, den du nur manchmal brauchst.",
        "label": "import()",
        "code": "try {\n  const ns = await import(\"data:text/javascript,export const gruss = 'Hallo aus einem Data-URL-Modul'\");\n  console.log(ns.gruss);\n} catch (e) {\n  console.error(\"Diese Umgebung erlaubt kein dynamisches import():\", e.message);\n}"
      }
    ],
    "specChapter": 16
  },
  {
    "slug": "optional-chaining",
    "title": "Optional Chaining und ??",
    "level": "Einsteiger",
    "min": 8,
    "since": "seit ES2020",
    "intro": "Zwei kleine Operatoren, die ganze if-Kaskaden ersetzen.",
    "spec": "Kapitel 13.3.9 – Optional Chains",
    "task": "Nimm ein verschachteltes Objekt aus deinem Code und schreib den Zugriff einmal mit &&-Kette und einmal mit ?. – zähl die Zeichen.",
    "steps": [
      {
        "title": "?. – vorsichtig zugreifen",
        "text": "Ist der linke Teil null oder undefined, ergibt der ganze Ausdruck undefined – ohne Fehler. Geht auch für Methoden (?.()) und Indizes (?.[]).",
        "label": "Optional Chaining",
        "code": "const antwort = { daten: { nutzer: null } };\n\nconsole.log(antwort.daten?.nutzer?.name);\nconsole.log(antwort.daten?.liste?.[0]);\nconsole.log(antwort.daten?.laden?.());\n\ntry { console.log(antwort.daten.nutzer.name); } catch (e) { console.error(e.message); }"
      },
      {
        "title": "?? – nur bei „nichts“",
        "text": "Anders als || greift ?? nur bei null und undefined. 0, \"\" und false bleiben erhalten.",
        "label": "Nullish Coalescing",
        "code": "const einstellungen = { lautstaerke: 0, titel: \"\", dunkel: false };\n\nconsole.log(einstellungen.lautstaerke || 50, einstellungen.lautstaerke ?? 50);\nconsole.log(einstellungen.titel || \"Ohne Titel\", einstellungen.titel ?? \"Ohne Titel\");\n\n// zuweisen, falls leer:\neinstellungen.sprache ??= \"de\";\nconsole.log(einstellungen.sprache);"
      }
    ],
    "specChapter": 13
  }
];
