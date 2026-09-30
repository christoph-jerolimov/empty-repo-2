// Client-side list filtering, shared by the Standard, Tutorials and Artikel pages.
//
//   <div data-filter>
//     <input data-filter-input>                        text search; ?q=… pre-fills it
//     <button data-filter-tag="Alle" aria-pressed>…   optional tag buttons ("Alle" = no filter)
//     <a data-filter-item data-search="…" data-tag="…">
//     <p data-filter-empty hidden>… <span data-filter-query></span></p>
//   </div>

const ALL = 'Alle';

for (const root of document.querySelectorAll<HTMLElement>('[data-filter]')) {
  const input = root.querySelector<HTMLInputElement>('[data-filter-input]');
  const tags = [...root.querySelectorAll<HTMLButtonElement>('[data-filter-tag]')];
  const items = [...root.querySelectorAll<HTMLElement>('[data-filter-item]')];
  const empty = root.querySelector<HTMLElement>('[data-filter-empty]');
  const queryEl = root.querySelector<HTMLElement>('[data-filter-query]');
  let tag = ALL;

  const apply = () => {
    const q = (input?.value ?? '').trim().toLowerCase();
    let shown = 0;
    for (const item of items) {
      const hit = (tag === ALL || item.dataset.tag === tag) && (!q || (item.dataset.search ?? '').includes(q));
      item.hidden = !hit;
      if (hit) shown++;
    }
    if (empty) empty.hidden = shown > 0;
    if (queryEl) queryEl.textContent = input?.value ?? '';
    for (const t of tags) t.setAttribute('aria-pressed', String(t.dataset.filterTag === tag));
  };

  const q = new URLSearchParams(location.search).get('q');
  if (input && q && input.hasAttribute('data-filter-from-url')) input.value = q;
  input?.addEventListener('input', apply);
  for (const t of tags) {
    t.addEventListener('click', () => {
      tag = t.dataset.filterTag ?? ALL;
      apply();
    });
  }
  apply();
}
