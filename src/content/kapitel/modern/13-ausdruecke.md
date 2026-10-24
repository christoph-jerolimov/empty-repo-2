---
order: 13
title: "Ausdrücke"
en: "Expressions"
since: "es2015"
---

Das längste Kapitel: primäre Ausdrücke, Member-Zugriff, Optional Chaining, Operatoren mit ihren Präzedenzen, Zuweisungen, der Komma-Operator. Für jeden Operator steht die exakte Auswertungsreihenfolge und Typkonvertierung.

#### Abschnitte

1. Bezeichner
2. Primäre Ausdrücke
3. Linksseitige Ausdrücke
4. Update-Ausdrücke
5. Unäre Operatoren
6. Exponentialoperator
7. Multiplikative Operatoren
8. Additive Operatoren
9. Bitweise Shift-Operatoren
10. Relationale Operatoren
11. Gleichheitsoperatoren
12. Binäre bitweise Operatoren
13. Binäre logische Operatoren
14. Bedingungsoperator
15. Zuweisungsoperatoren
16. Komma-Operator

#### Ausprobieren

```js live title="Optional Chaining & Nullish Coalescing" hint
const nutzer = { name: "Ada", adresse: null };

console.log(nutzer.adresse?.stadt);
console.log(nutzer.adresse?.stadt ?? "unbekannt");
console.log(nutzer.spitzname || "kein Spitzname");

// ?? vs ||: der Unterschied bei 0 und ""
const anzahl = 0;
console.log(anzahl || 10, anzahl ?? 10);
```
