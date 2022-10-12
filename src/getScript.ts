import cheerio from 'cheerio';

export default async() => {
    const loginPage = await (await fetch('https://canary.discord.com/login')).text();

    const $ = cheerio.load(loginPage);
    const file = $('script').get().filter(s => s.attribs.src && s.attribs.integrity && s.attribs.integrity.includes('sha512-')).slice(-1)[0].attribs.src;

    return await (await fetch(`https://canary.discord.com${file}`)).text();
}