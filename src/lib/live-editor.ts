// Single source of truth for the <es-live-editor> markup. Used by LiveEditor.astro and by the
// Markdown plugin that turns ```js live``` fences into editors. Behaviour: src/scripts/live-editor.ts.
import type { Element } from 'hast';
import { toHtml } from 'hast-util-to-html';

const el = (tagName: string, properties: Element['properties'], children: Element['children'] = []): Element => ({
  type: 'element',
  tagName,
  properties,
  children,
});
const text = (value: string) => ({ type: 'text' as const, value });

export function liveEditorHast(code: string, title = 'Beispiel'): Element {
  const rows = Math.max(code.split('\n').length, 5);
  return el('es-live-editor', { className: ['le'] }, [
    el('div', { className: ['le-pane'] }, [
      el('div', { className: ['le-bar'] }, [
        el('span', {}, [text(title)]),
        el('button', { type: 'button', className: ['btn', 'btn-primary', 'le-run'], dataRun: '' }, [text('Ausführen ▸')]),
      ]),
      el(
        'textarea',
        {
          className: ['es-code', 'le-code'],
          dataCode: '',
          rows,
          spellCheck: 'false',
          autoCapitalize: 'off',
          autoComplete: ['off'],
          ariaLabel: `Code: ${title}`,
        },
        [text(code)],
      ),
    ]),
    el('div', { className: ['le-pane', 'le-out-pane'] }, [
      el('div', { className: ['le-bar', 'le-bar-out'] }, [text('Konsole')]),
      el('div', {
        className: ['es-code', 'le-out'],
        dataOutput: '',
        role: 'log',
        ariaLive: 'polite',
        ariaLabel: `Ausgabe: ${title}`,
      }),
    ]),
  ]);
}

export function liveEditorHtml(code: string, title?: string): string {
  return toHtml(liveEditorHast(code, title));
}

export const LIVE_EDITOR_HINT = 'Ändere den Code und drück „Ausführen“ (oder ⌘/Strg + Enter).';
