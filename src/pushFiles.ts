import simpleGit from 'simple-git';
import { resolve } from 'node:path';

const git = simpleGit({ baseDir: resolve('..') });

export default async(files: string[], message: string) => {
    const result = await git.status();
    if (result.files.length === 0) return;

    await git.pull();
    await git.add(files);
    await git.commit(message);
    await git.push('origin', 'master');
}