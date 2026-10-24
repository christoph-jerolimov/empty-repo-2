---
order: 9
title: "Ausführbarer Code und Ausführungskontexte"
en: "Executable Code and Execution Contexts"
since: "es2015"
---

Hier steckt das Modell hinter Scopes, Closures und dem Event Loop: Environment Records speichern Bindungen, Realms kapseln globale Objekte, Execution Contexts liegen auf einem Stack, und Jobs (die Grundlage für Promises) werden nacheinander abgearbeitet.

Wenn du je wissen wolltest, warum eine Closure ihre Variablen behält oder warum ein await den Rest der Funktion „später“ ausführt – hier steht es.

#### Abschnitte

1. Environment Records
2. PrivateEnvironment Records
3. Realms
4. Ausführungskontexte
5. Jobs und Host-Operationen
6. Agents

#### Ausprobieren

```js live title="Closures und Jobs" hint
function zaehler() {
  let n = 0;                 // lebt im Environment Record der Funktion
  return () => ++n;
}
const tick = zaehler();
console.log(tick(), tick(), tick());

console.log("1 – synchron");
Promise.resolve().then(() => console.log("3 – Promise-Job"));
console.log("2 – noch synchron");
```
