// <es-live-editor>: runs the textarea's code in the browser and prints console output
// to the side panel. Nothing leaves the browser.

type Line = { text: string; color: string };

const COLORS = {
  log: 'var(--color-text)',
  info: 'var(--color-accent-700)',
  warn: 'var(--color-accent-2-600)',
  error: 'var(--color-accent-2-600)',
  muted: 'var(--color-neutral-600)',
};

const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor as new (
  ...args: string[]
) => (...args: unknown[]) => Promise<unknown>;

function fmt(v: unknown): string {
  if (typeof v === 'string') return v;
  if (typeof v === 'bigint') return `${v}n`;
  if (typeof v === 'function' || typeof v === 'symbol' || v === undefined) return String(v);
  try {
    const json = JSON.stringify(v, null, 1);
    return json === undefined ? String(v) : json.replace(/\n\s*/g, ' ');
  } catch {
    return String(v);
  }
}

class LiveEditor extends HTMLElement {
  private code!: HTMLTextAreaElement;
  private output!: HTMLElement;
  private runId = 0;

  connectedCallback() {
    this.code = this.querySelector('[data-code]')!;
    this.output = this.querySelector('[data-output]')!;
    this.querySelector('[data-run]')!.addEventListener('click', () => this.run());
    this.code.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        this.run();
      }
    });
    // Run once when the editor scrolls into view, like the prototype's run-on-mount.
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        this.run();
      }
    }, { rootMargin: '200px' });
    io.observe(this);
  }

  async run() {
    const id = ++this.runId;
    const lines: Line[] = [];
    const log = (color: string) => (...args: unknown[]) => {
      lines.push({ text: args.map(fmt).join(' '), color });
    };
    const con = {
      log: log(COLORS.log),
      info: log(COLORS.info),
      warn: log(COLORS.warn),
      error: log(COLORS.error),
      table: log(COLORS.log),
    };
    try {
      const result = await new AsyncFunction('console', this.code.value)(con);
      // Give short timers a moment so their output lands in the same run.
      await new Promise((r) => setTimeout(r, 60));
      if (result !== undefined) lines.push({ text: '← ' + fmt(result), color: COLORS.info });
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      lines.push({ text: `${err.name}: ${err.message}`, color: COLORS.error });
    }
    if (id !== this.runId) return; // a newer run started meanwhile
    if (!lines.length) lines.push({ text: '(keine Ausgabe)', color: COLORS.muted });
    this.output.replaceChildren(
      ...lines.map((l) => {
        const div = document.createElement('div');
        div.textContent = l.text;
        div.style.color = l.color;
        return div;
      }),
    );
  }
}

if (!customElements.get('es-live-editor')) customElements.define('es-live-editor', LiveEditor);
