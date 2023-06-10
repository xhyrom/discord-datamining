import "dotenv/config";

import { ArticleType, Articles } from "./modules/Articles.ts";
import { Blog } from "./modules/Blog.ts";
import { Github } from "./modules/Github.ts";
import { Domains } from "./modules/Domains.ts";
import { Client } from "./modules/client/index.ts";

// Scrape client data - scripts, styles, assets,
await new Client().run();

await new Domains(process.env.SECURITYTRAILS_API_KEY!).run();

// Scrape all github data - organisation and repositories
await new Github().run();

// Scrape https://discord.com/blog
await new Blog().run();

// Scrape https://support.discord.com
await new Articles(ArticleType.Normal).run();

// Scrape https://support-dev.discord.com
await new Articles(ArticleType.Dev).run();

// Scrape https://creator-support.discord.com
await new Articles(ArticleType.Creator).run();

export {};
