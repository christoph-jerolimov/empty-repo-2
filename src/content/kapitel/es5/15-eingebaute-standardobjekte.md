---
order: 15
title: "Eingebaute Standardobjekte"
en: "Standard Built-in ECMAScript Objects"
since: "es5"
---

Global, Object, Function, Array, String, Boolean, Number, Math, Date, RegExp, Error, JSON.

#### Ausprobieren

```js live title="Neu in ES5: Array-Iterationsmethoden" hint
var zahlen = [1, 2, 3, 4];
console.log(zahlen.filter(function (n) { return n % 2 === 0; }));
console.log(zahlen.reduce(function (a, b) { return a + b; }, 0));
console.log(JSON.stringify({ es: 5 }));
```
