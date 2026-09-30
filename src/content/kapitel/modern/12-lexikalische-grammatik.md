---
order: 12
title: "Lexikalische Grammatik"
en: "Lexical Grammar"
since: "es2015"
---

Wie aus Zeichen Tokens werden: Bezeichner, Schlüsselwörter, Literale, Punctuatoren. Auch die berühmte automatische Semikolon-Einfügung (ASI) ist hier definiert – mit ihren drei Regeln und den Fällen, in denen sie dich überrascht.

#### Abschnitte

1. Unicode-Formatzeichen
2. Whitespace
3. Zeilenumbrüche
4. Kommentare
5. Tokens
6. Namen und Schlüsselwörter
7. Literale
8. Automatische Semikolon-Einfügung

#### Ausprobieren

```js live title="ASI-Überraschung" hint
function ohne() {
  return
    "kommt nie an"
}
console.log(ohne());

function mit() {
  return (
    "kommt an"
  );
}
console.log(mit());
```
