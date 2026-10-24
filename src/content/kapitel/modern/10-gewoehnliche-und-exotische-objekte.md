---
order: 10
title: "Gewöhnliche und exotische Objekte"
en: "Ordinary and Exotic Objects Behaviours"
since: "es2015"
---

Jedes Objekt hat interne Methoden wie [[Get]], [[Set]] und [[DefineOwnProperty]]. „Gewöhnliche“ Objekte verhalten sich alle gleich; „exotische“ – Arrays, Strings, Proxies, Module-Namespaces – überschreiben einzelne Methoden. Deshalb aktualisiert ein Array seine length, wenn du arr[10] setzt.

#### Abschnitte

1. Gewöhnliche Objekte
2. Eingebaute exotische Objekte
3. Proxy-Objekte

#### Ausprobieren

```js live title="Ein Array ist exotisch" hint
const a = [1, 2, 3];
a[6] = 7;
console.log(a.length, a);

// Proxy: eigene interne Methoden
const laut = new Proxy({}, {
  get: (ziel, key) => `Du wolltest „${String(key)}“`
});
console.log(laut.irgendwas);
```
