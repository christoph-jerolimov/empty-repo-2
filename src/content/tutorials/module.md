---
order: 3
title: "Module: import und export"
level: "Fortgeschritten"
minutes: 12
since: "seit ES2015"
intro: "Module sind die einzige Art, Code in JavaScript sauber zu trennen. Sie sind immer strict, haben einen eigenen Scope und werden genau einmal ausgewertet."
task: "Überleg dir, welche der Exporte in deinem letzten Projekt Default-Exporte waren – und ob benannte Exporte nicht die bessere Wahl gewesen wären (Tipp: fast immer)."
spec: "Kapitel 16.2 – Modules"
specChapter: 16
pathStep: 4
pathText: "Code sauber trennen – live-Bindungen inklusive."
---

### 1. Benannt oder Default

Benannte Exporte sind explizit und lassen sich umbenennen; Default-Exporte sind bequem, aber jeder Importeur erfindet einen eigenen Namen. Hier simulieren wir ein Modul als Objekt – echte Module brauchen mehrere Dateien.

```js live title="Exporte (simuliert)"
// mathe.js
const mathe = {
  PI: 3.14159,
  quadrat: n => n * n,
  default: function flaeche(r) { return mathe.PI * mathe.quadrat(r); }
};

// main.js  —  import flaeche, { PI, quadrat as q } from "./mathe.js";
const { default: flaeche, PI, quadrat: q } = mathe;
console.log(PI, q(3), flaeche(2).toFixed(2));
```

### 2. Live-Bindungen

Ein Import ist keine Kopie, sondern ein Verweis. Ändert das Modul seine exportierte Variable, sieht der Importeur den neuen Wert.

```js live title="Live-Bindung"
// Module exportieren Bindungen, keine Werte. Nachgestellt mit einem Getter:
const modul = (() => {
  let zaehler = 0;
  return { get zaehler() { return zaehler; }, erhoehe() { zaehler++; } };
})();

console.log(modul.zaehler);
modul.erhoehe();
console.log(modul.zaehler, "– der Import sieht den neuen Wert");
```

### 3. Dynamisch laden

import() gibt ein Promise auf den Modul-Namespace zurück – perfekt für Code, den du nur manchmal brauchst.

```js live title="import()"
try {
  const ns = await import("data:text/javascript,export const gruss = 'Hallo aus einem Data-URL-Modul'");
  console.log(ns.gruss);
} catch (e) {
  console.error("Diese Umgebung erlaubt kein dynamisches import():", e.message);
}
```
