import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

export default async (path: string, content: string) => {
    await mkdir(dirname(path), { recursive: true})
    await writeFile(path, content);
}