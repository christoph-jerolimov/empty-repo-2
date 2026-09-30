---
order: 21
title: "Zahlen und Datum"
en: "Numbers and Dates"
since: "es2015"
---

Number, BigInt, Math und Date. Das Date-Kapitel ist berüchtigt – Monate ab 0, Zeitzonen-Chaos – und der Grund, warum Temporal so lange in Arbeit war.

#### Abschnitte

1. Number
2. BigInt
3. Math
4. Date

#### Ausprobieren

```js live title="Number vs. BigInt" hint
console.log(0.1 + 0.2);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(9007199254740993n + 2n);
console.log(Number.isSafeInteger(2 ** 53));

try { console.log(1n + 1); } catch (e) { console.error(e.message); }
```
