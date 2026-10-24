---
order: 14
title: "Anweisungen und Deklarationen"
en: "Statements and Declarations"
since: "es2015"
---

Blöcke, let/const/var, if, Schleifen inklusive for-of und for-await-of, switch, try/catch/finally, labels. Auch die Semantik der Temporal Dead Zone von let und const ist hier festgelegt.

#### Abschnitte

1. Block
2. Deklarationen
3. Leere Anweisung
4. Ausdrucksanweisung
5. if
6. Iterationsanweisungen
7. continue / break / return
8. with
9. switch
10. Markierte Anweisungen
11. throw
12. try
13. debugger

#### Ausprobieren

```js live title="Temporal Dead Zone" hint
try {
  console.log(spaeter);
  let spaeter = 1;
} catch (e) {
  console.error(e.message);
}

console.log(typeof hoisted, "– var wird gehoistet");
var hoisted = 2;
```
