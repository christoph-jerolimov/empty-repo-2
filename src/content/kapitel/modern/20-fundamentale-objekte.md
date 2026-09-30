---
order: 20
title: "Fundamentale Objekte"
en: "Fundamental Objects"
since: "es2015"
---

Object, Function, Boolean, Symbol und die Error-Hierarchie. Hier stehen Object.keys, Object.groupBy, structuredClone gehört übrigens nicht hierher – das ist HTML.

#### Abschnitte

1. Object
2. Function
3. Boolean
4. Symbol
5. Error-Objekte

#### Ausprobieren

```js live title="Object.groupBy (ES2024)" hint
const buecher = [
  { titel: "Eloquent JS", jahr: 2018 },
  { titel: "You Don't Know JS", jahr: 2020 },
  { titel: "JS: The Good Parts", jahr: 2008 }
];
const nachJahrzehnt = Object.groupBy(buecher, b => `${Math.floor(b.jahr / 10) * 10}er`);
console.log(nachJahrzehnt);
```
