---
order: 6
title: "Datentypen und Werte"
en: "ECMAScript Data Types and Values"
since: "es2015"
---

Sieben primitive Typen und ein Objekttyp: Undefined, Null, Boolean, String, Symbol, Number, BigInt – und Object. Das Kapitel definiert jeden Typ genau: Strings sind Folgen von 16-Bit-Codeeinheiten, Numbers sind IEEE-754-Doubles, BigInts beliebig groß.

Daneben gibt es Spezifikationstypen, die nur im Standard selbst existieren – Records, Completion Records, Property Descriptors, Environment Records. Du siehst sie nie im Code, aber sie erklären, warum sich Code so verhält, wie er es tut.

#### Abschnitte

1. Sprachtypen
2. Spezifikationstypen

#### Ausprobieren

```js live title="typeof und die sieben Primitive" hint
const werte = [undefined, null, true, "Text", Symbol("s"), 42, 42n, {}];
for (const w of werte) console.log(typeof w, "→", String(w));

// Bekannte Stolperfalle: typeof null
console.log("null ist ein", typeof null, "– historischer Fehler, bleibt aus Kompatibilität");
```
