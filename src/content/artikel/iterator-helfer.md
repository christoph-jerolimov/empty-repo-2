---
title: "Iterator-Helfer: Endlich lazy, endlich lesbar"
teaser: "ES2025 gibt jedem Iterator map, filter, take und Co. Warum das mehr ist als Zucker – und wo Arrays trotzdem gewinnen."
tag: "ES2025"
author: "lena-hartmann"
date: "2026-09-12"
minutes: 14
spec: { label: "Kapitel 27 – Kontrollabstraktionen", chapter: 27 }
proposal: { label: "tc39/proposal-iterator-helpers", href: "https://github.com/tc39/proposal-iterator-helpers" }
related: ["artikel/tc39", "tutorials/promises", "artikel/temporal"]
---

ES2025 gibt jedem Iterator `map`, `filter`, `take` und ein paar Freunde mit. Das klingt nach Zucker – ist aber eine ziemlich grundlegende Änderung daran, wie wir über Datenströme in JavaScript denken.

## Das Problem mit Arrays

Seit ES5 haben wir `map`, `filter` und `reduce` auf Arrays. Sie sind großartig – und sie haben einen Haken: Jeder Schritt erzeugt ein neues, vollständiges Array. Bei drei Elementen egal. Bei drei Millionen nicht mehr. Und bei einer unendlichen Quelle geht es gar nicht.

Generatoren konnten das seit ES2015 lösen, aber die Ergonomie war schlecht. Wer einen Generator filtern wollte, musste einen zweiten Generator schreiben. Das hat kaum jemand getan.

```js live title="Vorher: Array-Kette"
const zahlen = Array.from({ length: 1_000_000 }, (_, i) => i);

const t0 = performance.now();
const ergebnis = zahlen
  .map(n => n * n)        // 1 Mio. Elemente
  .filter(n => n % 3 === 0) // ~333k Elemente
  .slice(0, 5);           // 5 Elemente
console.log(ergebnis, `${(performance.now() - t0).toFixed(1)} ms`);
```

## Was ES2025 ändert

Alle eingebauten Iteratoren – aus Arrays, Maps, Sets, Generatoren, `matchAll`, … – erben jetzt von `Iterator.prototype`, und das hat Methoden: `map`, `filter`, `take`, `drop`, `flatMap`, `reduce`, `toArray`, `forEach`, `some`, `every`, `find`.

Der Unterschied: Die Kette ist *lazy*. Nichts passiert, bis jemand den nächsten Wert abfragt. `take(5)` auf einer unendlichen Quelle ist deshalb völlig in Ordnung.

```js live title="Nachher: Iterator-Kette"
function* natuerliche() { let n = 0; while (true) yield n++; }

const t0 = performance.now();
const ergebnis = natuerliche()   // unendlich!
  .map(n => n * n)
  .filter(n => n % 3 === 0)
  .take(5)
  .toArray();
console.log(ergebnis, `${(performance.now() - t0).toFixed(2)} ms`);

// funktioniert auf jedem Iterator:
console.log(new Set(["a", "b", "c"]).values().map(s => s.toUpperCase()).toArray());
```

## Wo Arrays trotzdem gewinnen

Iteratoren sind Einwegware. Einmal durchlaufen, leer. Es gibt kein `length`, kein `at(-1)`, kein zweites `for…of`. Wenn du deine Daten sowieso komplett im Speicher hast und mehrfach brauchst, bleib beim Array. Die Helfer sind für Ströme, nicht für Listen.

Ein zweiter Punkt: Die Fehlersuche. Ein Stacktrace durch fünf verschachtelte lazy Schritte liest sich anders als einer durch fünf Array-Aufrufe. Chrome und Firefox haben nachgezogen, aber gewöhnen musst du dich trotzdem.

```js live title="Einwegware"
const it = [1, 2, 3].values().map(n => n * 10);

console.log([...it]);   // erster Durchlauf
console.log([...it]);   // zweiter Durchlauf: leer

console.log(typeof it.length, typeof it.at);
```

## Fazit

Iterator-Helfer sind kein Ersatz für Array-Methoden, sondern ihre Ergänzung für alles, was fließt: Zeilen aus einer Datei, Events, Seiten aus einer API, Generatoren. Wenn du bisher aus Bequemlichkeit `[...gen]` geschrieben hast, um dann `.filter` aufzurufen – das kannst du dir jetzt sparen.
