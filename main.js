import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const content = {};

for (const path of ['env', '.env', '.env.local']) {
  try {
    content[path] = (await readFile(resolve(path), 'utf-8')).trim();
  } catch (e) {
    console.error(`Unable to read path "${path}"`, e);
  }
}

console.log(content);
