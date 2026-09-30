---
order: 2
title: "Promises verstehen"
level: "Einsteiger"
minutes: 15
since: "seit ES2015"
intro: "Ein Promise ist ein Versprechen auf einen Wert, der noch nicht da ist. Sobald du das Zustandsmodell im Kopf hast, ist async/await nur noch Schreibweise."
task: "Schreib eine Funktion warte(ms), die ein Promise zurückgibt, das nach ms Millisekunden erfüllt wird – und benutze sie mit await in einer Schleife, die 1, 2, 3 im Sekundentakt loggt."
spec: "Kapitel 27.2 – Promise Objects"
specChapter: 27
pathStep: 3
pathText: "Drei Zustände, eine Kette, ein await."
---

### 1. Drei Zustände

pending, fulfilled, rejected. Ein Promise wechselt genau einmal – danach ist es „settled“ und ändert sich nie wieder.

```js live title="Zustände"
const p = new Promise((resolve, reject) => {
  resolve("erster Wert");
  resolve("wird ignoriert");
  reject(new Error("wird auch ignoriert"));
});
p.then(v => console.log("fulfilled:", v));
console.log("dieser Log kommt zuerst – .then ist immer asynchron");
```

### 2. Ketten

Jedes .then gibt ein neues Promise zurück. Gibst du im Callback einen Wert zurück, wird er weitergereicht; gibst du ein Promise zurück, wird darauf gewartet.

```js live title="then-Kette"
Promise.resolve(2)
  .then(n => n * 2)
  .then(n => new Promise(r => setTimeout(() => r(n + 1), 10)))
  .then(n => { console.log("Ergebnis:", n); throw new Error("Absicht"); })
  .catch(e => console.error("gefangen:", e.message))
  .finally(() => console.log("finally läuft immer"));
```

### 3. async/await

Dasselbe, nur lesbarer. await pausiert die Funktion, nicht das Programm.

```js live title="async/await"
const warte = ms => new Promise(r => setTimeout(r, ms));

async function lade() {
  console.log("Start");
  await warte(20);
  console.log("20 ms später");
  return "fertig";
}
console.log(await lade());

// parallel statt nacheinander:
const [a, b] = await Promise.all([warte(10).then(() => "A"), warte(10).then(() => "B")]);
console.log(a, b);
```
