export default async() => {
    return await (await fetch('https://canary.discord.com/assets/version.canary.json')).json();
}