// Content policy gate (PLAN.md section 2.5). Runs before every build; any blocked term fails the build.
// Usage: node scripts/check-content.ts [dir ...]

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { blocklist, type BlockTerm } from './blocklist.ts';

const root = process.cwd();
const defaultDirs = ['content', 'messages', 'app', 'components', 'lib', 'i18n', 'public'];
const textExtensions = new Set(['.ts', '.tsx', '.js', '.mjs', '.json', '.md', '.mdx', '.txt', '.svg', '.html', '.css']);
// Place names are allowed in the city list, which feeds the map.
const placeExempt = new Set([join('content', 'cities.ts')]);

const cp = (...codes: number[]) => String.fromCodePoint(...codes);
const DIACRITICS = new RegExp(`[${cp(0x064b)}-${cp(0x065f)}${cp(0x0670, 0x0640)}]`, 'g');
const INVISIBLES = new RegExp(`[${cp(0x200b)}-${cp(0x200f)}${cp(0x202a)}-${cp(0x202e)}${cp(0x2066)}-${cp(0x2069)}]`, 'g');

// Unify Arabic/Persian letter variants, drop diacritics and tatweel, and treat
// half-spaces and direction marks as spaces.
function normalize(s: string) {
  return s
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/ۀ/g, 'ه')
    .replace(DIACRITICS, '')
    .replace(INVISIBLES, ' ');
}

function toRegExp({ term, caseSensitive, partial }: BlockTerm) {
  const body = normalize(term)
    .trim()
    .split(/\s+/)
    .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('[\\s-]*');
  const pattern = partial ? body : `(?<![\\p{L}\\p{N}])${body}(?![\\p{L}\\p{N}])`;
  return new RegExp(pattern, caseSensitive ? 'gu' : 'giu');
}

function* walk(dir: string): Generator<string> {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (textExtensions.has(extname(name).toLowerCase())) yield path;
  }
}

const rules = blocklist.map((b) => ({ ...b, re: toRegExp(b) }));
const dirs = process.argv.slice(2);
const findings: string[] = [];
let scanned = 0;

for (const dir of dirs.length ? dirs : defaultDirs) {
  for (const file of walk(join(root, dir))) {
    const rel = relative(root, file);
    const exemptPlaces = placeExempt.has(rel);
    const lines = readFileSync(file, 'utf8').split(/\r?\n/);
    scanned++;
    lines.forEach((raw, i) => {
      const line = normalize(raw);
      for (const rule of rules) {
        if (exemptPlaces && rule.category === 'place') continue;
        rule.re.lastIndex = 0;
        const m = rule.re.exec(line);
        if (m) findings.push(`${rel}:${i + 1}  [${rule.category}] "${rule.term}"  →  ${raw.trim().slice(0, 120)}`);
      }
    });
  }
}

if (findings.length) {
  console.error(`\n✗ check-content: ${findings.length} blocked term(s) found (see PLAN.md section 2):\n`);
  for (const f of findings) console.error('  ' + f);
  console.error('');
  process.exit(1);
}

console.log(`✓ check-content: ${scanned} files clean (${rules.length} blocked terms).`);
