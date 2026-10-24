---
order: 23
title: "Indizierte Sammlungen"
en: "Indexed Collections"
since: "es2015"
---

Array und die TypedArrays. Hier sind alle Array-Methoden definiert – auch die nicht-mutierenden aus ES2023 (toSorted, toReversed, toSpliced, with) und Array.fromAsync aus ES2026.

#### Abschnitte

1. Array-Objekte
2. TypedArray-Objekte

#### Ausprobieren

```js live title="Nicht-mutierende Array-Methoden" hint
const original = [3, 1, 2];
const sortiert = original.toSorted();
const getauscht = original.with(0, 99);

console.log(original, sortiert, getauscht);
console.log(original.at(-1), original.findLast(n => n < 3));
```
