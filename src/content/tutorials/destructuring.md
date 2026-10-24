---
order: 1
title: "Destructuring in 10 Minuten"
level: "Einsteiger"
minutes: 10
since: "seit ES2015"
intro: "Werte aus Objekten und Arrays herausholen, ohne dreimal denselben Namen zu tippen."
task: "Schreib eine Funktion, die aus { vorname, nachname, adresse: { stadt } } den String „Vorname Nachname aus Stadt“ baut – mit genau einer Zeile Destructuring im Parameter."
spec: "Kapitel 13.15 – Destructuring Assignment"
specChapter: 13
pathStep: 1
pathText: "Werte aus Objekten und Arrays holen, ohne dich zu wiederholen."
---

### 1. Objekte

Die geschweiften Klammern auf der linken Seite spiegeln die Form des Objekts. Fehlende Werte werden undefined – oder bekommen einen Default.

```js live title="Objekt-Destructuring"
const nutzer = { name: "Ada", sprache: "JS", stadt: "Bonn" };
const { name, sprache, land = "DE" } = nutzer;
console.log(name, sprache, land);

// umbenennen:
const { stadt: wohnort } = nutzer;
console.log(wohnort);
```

### 2. Arrays

Bei Arrays zählt die Position. Was du nicht brauchst, überspringst du mit einem leeren Platz; den Rest sammelst du mit …rest.

```js live title="Array-Destructuring"
const [erste, , dritte, ...rest] = [10, 20, 30, 40, 50];
console.log(erste, dritte, rest);

// Werte tauschen ohne Hilfsvariable
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);
```

### 3. In Parametern

Der eigentliche Gewinn: Funktionen, die ein Optionsobjekt bekommen, dokumentieren sich selbst.

```js live title="Parameter"
function begruesse({ name, foermlich = false } = {}) {
  return foermlich ? `Guten Tag, ${name}.` : `Hi ${name}!`;
}
console.log(begruesse({ name: "Ada" }));
console.log(begruesse({ name: "Frau Lovelace", foermlich: true }));
console.log(begruesse());
```
