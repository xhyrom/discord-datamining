import "dotenv/config";

import { ArticleType, Articles } from "./modules/Articles.ts";
import { Blog } from "./modules/Blog.ts";
import { Github } from "./modules/Github.ts";
import { Domains } from "./modules/Domains.ts";
import { Client } from "./modules/client/index.ts";

await new Articles(ArticleType.Creator).run();

// Scrape client data - scripts, styles, assets,
await new Client().run();

if (process.env.SCRAPE_DOMAINS === "true")
  await new Domains(process.env.SECURITYTRAILS_API_KEY!).run();

// Scrape all github data - organisation and repositories
if (process.env.SCRAPE_GITHUB === "true") await new Github().run();

// Scrape https://discord.com/blog
await new Blog().run();

// Scrape https://support.discord.com
await new Articles(ArticleType.Normal).run();

// Scrape https://support-dev.discord.com
await new Articles(ArticleType.Dev).run();

// Scrape https://creator-support.discord.com

export {};
