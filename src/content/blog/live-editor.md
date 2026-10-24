---
title: "Der Live-Editor ist da – überall"
date: "2026-09-24"
author: "jonas-weber"
---

Bisher konntest du Code auf EcmaScript.de nur lesen. Ab heute läuft jedes Beispiel direkt im Browser: im Standard, in Artikeln, in Tutorials, hier im Blog. Links der Code, rechts die Konsole. Ändere, was du willst – nichts davon verlässt deinen Browser.

Async-Code funktioniert auch, Top-Level await inklusive. Wer Bugs findet: GitHub-Issue, bitte.

```js live title="Probier’s aus"
console.log("Hallo aus dem Blog!");
console.log([1, 2, 3].map(n => n ** 2));
await new Promise(r => setTimeout(r, 30));
console.info("… und 30 ms später");
```
