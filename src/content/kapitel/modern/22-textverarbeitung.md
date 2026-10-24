---
order: 22
title: "Textverarbeitung"
en: "Text Processing"
since: "es2015"
---

String und RegExp. Alle String-Methoden von at bis trimEnd, Unicode-Normalisierung, und die komplette Grammatik regulärer Ausdrücke inklusive Named Groups, Lookbehind, dem v-Flag und seit ES2025 Inline-Modifiern.

#### Abschnitte

1. String
2. RegExp

#### Ausprobieren

```js live title="Named Groups und matchAll" hint
const text = "ES2015, ES2020 und ES2025";
const re = /ES(?<jahr>\d{4})/g;
for (const m of text.matchAll(re)) console.log(m.groups.jahr, "an Position", m.index);

console.log("straße".normalize("NFD").length, "straße".length);
```
