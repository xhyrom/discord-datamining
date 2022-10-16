import 'dotenv/config';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';
import beautify from 'js-beautify';
import { Octokit } from 'octokit';
import getVersion from '../common/getVersion';
import getScript from '../common/getScript';
import writeFile from '../common/writeFile';
import numberPad from '../common/numberPad';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const directory = join(__dirname, '..');

const octokit = new Octokit({ auth: process.env.TOKEN });
(await import('octokit-commit-multiple-files')).default(octokit);

const main = async() => {
    const latestTxt = (await readFile(join(directory, '..', 'latest.txt'))).toString();
    const latestHash = (await getVersion()).hash;

    if (latestTxt === latestHash) {
        console.log('skip');
        return;
    }

    const script = await getScript();
    const formatted = beautify.js(script, { indent_size: 2, space_in_empty_paren: true });
    const fileName = formatted.split('\n')[0].split('see')[1].split('.LICENSE')[0].replace(/\s/g, '');

    const date = new Date();
    const formattedDate = `${numberPad(date.getFullYear())}/${numberPad(date.getMonth() + 1)}/${numberPad(date.getDate())}`;

    const files = {};
    files[`data/${formattedDate}/${fileName}`] = { contents: "a" };
    files['data/current.js'] = { contents: "b" };
    files['latest.txt'] = { contents: latestHash };

    try {
        // @ts-expect-error
        await octokit.rest.repos.createOrUpdateFiles({
            owner: "xHyroM",
            repo: "discord-datamining",
            branch: "master",
            createBranch: false,
            changes: [
                {
                    message: `${formattedDate} | Build ${latestHash}`,
                    files: files,
                }
            ],
        }).catch(e => console.log(e));
    } catch(e) {
        console.log(e);
    }

    await writeFile('latest.txt', latestHash);

    console.log(`Saved ${fileName}`);
};

while(true) {
    await main();
    await sleep(10_000) // Also sleep 10s
}