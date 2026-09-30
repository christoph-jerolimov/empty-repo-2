// Content ported from the Claude Design prototype (project/*.dc.html).

export const CODE_BEFORE = "const zahlen = Array.from({ length: 1_000_000 }, (_, i) => i);\n\nconst t0 = performance.now();\nconst ergebnis = zahlen\n  .map(n => n * n)        // 1 Mio. Elemente\n  .filter(n => n % 3 === 0) // ~333k Elemente\n  .slice(0, 5);           // 5 Elemente\nconsole.log(ergebnis, `${(performance.now() - t0).toFixed(1)} ms`);";

export const CODE_AFTER = "function* natuerliche() { let n = 0; while (true) yield n++; }\n\nconst t0 = performance.now();\nconst ergebnis = natuerliche()   // unendlich!\n  .map(n => n * n)\n  .filter(n => n % 3 === 0)\n  .take(5)\n  .toArray();\nconsole.log(ergebnis, `${(performance.now() - t0).toFixed(2)} ms`);\n\n// funktioniert auf jedem Iterator:\nconsole.log(new Set([\"a\", \"b\", \"c\"]).values().map(s => s.toUpperCase()).toArray());";

export const CODE_ONE_SHOT = "const it = [1, 2, 3].values().map(n => n * 10);\n\nconsole.log([...it]);   // erster Durchlauf\nconsole.log([...it]);   // zweiter Durchlauf: leer\n\nconsole.log(typeof it.length, typeof it.at);";
