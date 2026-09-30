---
order: 15
title: "Funktionen und Klassen"
en: "Functions and Classes"
since: "es2015"
---

Funktionsdeklarationen, Arrow Functions, Methoden, Generatoren, async-Funktionen und Klassen mit Feldern, privaten Namen (#name) und statischen Blöcken. Dazu: Parameterlisten mit Defaults, Rest und Destructuring.

#### Abschnitte

1. Parameterlisten
2. Funktionsdefinitionen
3. Arrow Functions
4. Methodendefinitionen
5. Generatorfunktionen
6. Async-Generatorfunktionen
7. Klassendefinitionen
8. Async-Funktionen
9. Async-Arrow-Functions
10. Tail-Position-Aufrufe

#### Ausprobieren

```js live title="Klassen mit privaten Feldern" hint
class Konto {
  #saldo = 0;
  static #anzahl = 0;
  static { console.log("Klasse wird initialisiert"); }
  constructor(name) { this.name = name; Konto.#anzahl++; }
  einzahlen(betrag) { this.#saldo += betrag; return this; }
  get saldo() { return this.#saldo; }
  static get anzahl() { return Konto.#anzahl; }
}
const k = new Konto("Ada").einzahlen(50).einzahlen(25);
console.log(k.saldo, Konto.anzahl);
console.log(Object.keys(k));   // #saldo ist unsichtbar
```
