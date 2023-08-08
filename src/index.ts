import "dotenv/config";

import { Github } from "./modules/Github.ts";
import { Domains } from "./modules/Domains.ts";
import { Client } from "./modules/client/index.ts";
import { Posts } from "./modules/posts/index.ts";

console.log("discord-datamining  Copyright (C) 2023 Jozef Steinhübl");

const client = new Client();

// Scrape client data - scripts, styles, assets,
if (process.env.SCRAPE_CLIENT === "true") await client.run();

if (process.env.SCRAPE_DOMAINS === "true")
  await new Domains(process.env.SECURITYTRAILS_API_KEY!).run();

// Scrape all github data - organisation and repositories
if (process.env.SCRAPE_GITHUB === "true") await new Github().run();

if (process.env.SCRAPE_POSTS === "true") await new Posts().run();

if (process.env.SCRAPE_CLIENT === "true") await client.runLast();

export {};
