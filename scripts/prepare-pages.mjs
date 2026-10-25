import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const out = new URL('../out/', import.meta.url);

async function* files(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* files(path);
    else yield path;
  }
}

for await (const path of files(out.pathname)) {
  if (!path.endsWith('.css')) continue;
  const css = await readFile(path, 'utf8');
  await writeFile(path, css.replace(/url\((['"]?)\/fonts\//g, `url($1${basePath}/fonts/`));
}
await writeFile(new URL('.nojekyll', out), '');

let checked = 0;
for await (const path of files(out.pathname)) {
  if (!path.endsWith('.html')) continue;
  const html = await readFile(path, 'utf8');
  if (/(?:href|src|poster)=["']\/(?:media|fonts|work|archive|about|contact|services|brands|en)(?:\/|["'])/.test(html)) {
    throw new Error(`Unprefixed asset or page link in ${path}`);
  }
  checked++;
}
console.log(`GitHub Pages ready: ${checked} static HTML pages; base path ${basePath || '/'}.`);
