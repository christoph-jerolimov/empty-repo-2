---
order: 25
title: "Strukturierte Daten"
en: "Structured Data"
since: "es2015"
---

ArrayBuffer, SharedArrayBuffer, DataView, Atomics und JSON. Ab ES2024 können ArrayBuffer wachsen (resizable), ab ES2026 kann Uint8Array direkt nach Base64 und Hex konvertieren.

#### Abschnitte

1. ArrayBuffer
2. SharedArrayBuffer
3. DataView
4. Atomics
5. JSON

#### Ausprobieren

```js live title="JSON mit Reviver" hint
const roh = '{"titel":"ES2026","datum":"2026-06-25T10:00:00Z"}';
const obj = JSON.parse(roh, (k, v) =>
  k === "datum" ? new Date(v) : v
);
console.log(obj.datum instanceof Date, obj.datum.getFullYear());
console.log(JSON.stringify({ a: 1, b: undefined, c: () => 1 }));
```
