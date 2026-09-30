---
order: 27
title: "Kontrollabstraktionen"
en: "Control Abstraction Objects"
since: "es2015"
---

Iteration, Generatoren, Promises, async-Funktionen. Seit ES2025 auch die Iterator-Helfer: map, filter, take, drop, flatMap, reduce, toArray, forEach, some, every, find – lazy, direkt auf jedem Iterator.

#### Abschnitte

1. Iteration
2. Promise
3. GeneratorFunction
4. AsyncGeneratorFunction
5. Generator
6. AsyncGenerator
7. AsyncFunction

#### Ausprobieren

```js live title="Iterator-Helfer (ES2025)" hint
function* natuerliche() { let n = 1; while (true) yield n++; }

const ergebnis = natuerliche()
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .take(5)
  .toArray();
console.log(ergebnis);

const ergebnisse = await Promise.allSettled([
  Promise.resolve("ok"), Promise.reject(new Error("nope"))
]);
console.log(ergebnisse.map(r => r.status));
```
