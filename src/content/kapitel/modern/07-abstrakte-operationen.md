---
order: 7
title: "Abstrakte Operationen"
en: "Abstract Operations"
since: "es2015"
---

Die Werkzeugkiste der Spezifikation: ToNumber, ToString, ToPrimitive, IsCallable, SameValue, … Diese Operationen sind kein JavaScript, das du aufrufen könntest – sie beschreiben, was intern passiert, wenn du zum Beispiel "5" \* 2 schreibst.

#### Abschnitte

1. Typkonvertierung
2. Test- und Vergleichsoperationen
3. Operationen auf Objekten
4. Operationen auf Iteratoren

#### Ausprobieren

```js live title="ToPrimitive in Aktion" hint
const konto = {
  saldo: 120,
  valueOf() { return this.saldo; },
  toString() { return `Konto (${this.saldo} €)`; }
};

console.log(konto + 30);      // Hinweis "default" → valueOf
console.log(`${konto}`);      // Hinweis "string"  → toString
console.log(konto > 100);
```
