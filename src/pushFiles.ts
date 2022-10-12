import simpleGit from 'simple-git';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const directory = join(__dirname, '..');
const git = simpleGit({ baseDir: directory });

export default async(files: string[], message: string) => {
    const result = await git.status();
    if (result.files.length === 0) return;

    await git.pull();
    await git.add(files);
    await git.commit(message);
    await git.push('origin', 'master');
}