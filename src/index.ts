import 'dotenv/config';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';
import beautify from 'js-beautify';
import getVersion from './getVersion';
import getScript from './getScript';
import writeFile from './writeFile';
import numberPad from './numberPad';
import pushFiles from "./pushFiles";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const directory = join(__dirname, '..');

const main = async() => {
    const latestTxt = (await readFile(join(directory, 'latest.txt'))).toString();
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

    await writeFile(`data/${formattedDate}/${fileName}`, formatted);
    await writeFile(`data/current.js`, formatted);
    await writeFile('latest.txt', latestHash);

    await pushFiles(['data/.'], `${formattedDate} | Build ${latestHash}`)

    console.log(`Saved ${fileName}`);
};

while(true) {
    await main();
    await sleep(10_000) // Also sleep 10s
}