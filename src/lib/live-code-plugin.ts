// Sätteri mdast plugin: a fenced block like
//
//   ```js live title="Set-Methoden" hint
//   console.log(1);
//   ```
//
// becomes a runnable <es-live-editor>. `hint` adds the "Ändere den Code …" line above it.
// Blocks without `live` stay ordinary (highlighted) code.
import { defineMdastPlugin } from 'satteri';
import { LIVE_EDITOR_HINT, liveEditorHtml } from './live-editor';

export const liveCode = defineMdastPlugin({
  name: 'esde-live-code',
  code(node, ctx) {
    const meta = node.meta ?? '';
    if (!/(^|\s)live(\s|$)/.test(meta)) return;
    const title = /title="([^"]*)"/.exec(meta)?.[1];
    const editor = { type: 'html' as const, value: liveEditorHtml(node.value, title) };
    const hint = { type: 'html' as const, value: `<p class="text-muted le-hint">${LIVE_EDITOR_HINT}</p>` };
    ctx.replaceNode(node, /(^|\s)hint(\s|$)/.test(meta) ? [hint, editor] : editor);
  },
});
