---
order: 24
title: "Schlüsselbasierte Sammlungen"
en: "Keyed Collections"
since: "es2015"
---

Map, Set, WeakMap und WeakSet. Seit ES2025 hat Set endlich Mengenoperationen: union, intersection, difference, symmetricDifference, isSubsetOf, isSupersetOf, isDisjointFrom.

#### Abschnitte

1. Map
2. Set
3. WeakMap
4. WeakSet

#### Ausprobieren

```js live title="Set-Methoden (ES2025)" hint
const frontend = new Set(["JS", "CSS", "HTML"]);
const backend  = new Set(["JS", "SQL", "Go"]);

console.log([...frontend.union(backend)]);
console.log([...frontend.intersection(backend)]);
console.log([...frontend.difference(backend)]);
console.log(new Set(["JS"]).isSubsetOf(frontend));
```
