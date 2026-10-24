---
order: 4
title: "Optional Chaining und ??"
level: "Einsteiger"
minutes: 8
since: "seit ES2020"
intro: "Zwei kleine Operatoren, die ganze if-Kaskaden ersetzen."
task: "Nimm ein verschachteltes Objekt aus deinem Code und schreib den Zugriff einmal mit &&-Kette und einmal mit ?. – zähl die Zeichen."
spec: "Kapitel 13.3.9 – Optional Chains"
specChapter: 13
pathStep: 2
pathText: "Zwei Operatoren, die ganze if-Kaskaden ersetzen."
---

### 1. ?. – vorsichtig zugreifen

Ist der linke Teil null oder undefined, ergibt der ganze Ausdruck undefined – ohne Fehler. Geht auch für Methoden (?.()) und Indizes (?.[]).

```js live title="Optional Chaining"
const antwort = { daten: { nutzer: null } };

console.log(antwort.daten?.nutzer?.name);
console.log(antwort.daten?.liste?.[0]);
console.log(antwort.daten?.laden?.());

try { console.log(antwort.daten.nutzer.name); } catch (e) { console.error(e.message); }
```

### 2. ?? – nur bei „nichts“

Anders als || greift ?? nur bei null und undefined. 0, "" und false bleiben erhalten.

```js live title="Nullish Coalescing"
const einstellungen = { lautstaerke: 0, titel: "", dunkel: false };

console.log(einstellungen.lautstaerke || 50, einstellungen.lautstaerke ?? 50);
console.log(einstellungen.titel || "Ohne Titel", einstellungen.titel ?? "Ohne Titel");

// zuweisen, falls leer:
einstellungen.sprache ??= "de";
console.log(einstellungen.sprache);
```
