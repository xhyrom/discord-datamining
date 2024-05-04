/**
  *  discord-dataming - powerful discord datamining, datamines discord
  *  Copyright (C) 2023 Jozef Steinhübl

  *  This program is free software: you can redistribute it and/or modify
  *  it under the terms of the GNU General Public License as published by
  *  the Free Software Foundation, either version 3 of the License, or
  *  (at your option) any later version.

  *  This program is distributed in the hope that it will be useful,
  *  but WITHOUT ANY WARRANTY; without even the implied warranty of
  *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  *  GNU General Public License for more details.
 
  *  You should have received a copy of the GNU General Public License
  *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  * **/

import "dotenv/config";

import { Github } from "./modules/Github.ts";
import { Domains } from "./modules/Domains.ts";
import { Client } from "./modules/client/index.ts";
import { Posts } from "./modules/posts/index.ts";
import { Applications } from "./modules/client/applications/index.ts";
import { Routes } from "./modules/client/routes/index.ts";

console.log("discord-datamining  Copyright (C) 2023 Jozef Steinhübl");

const client = new Client();

// Scrape client data - scripts, styles, assets,
if (process.env.SCRAPE_CLIENT === "true") await client.run();

// Scrape applications (inside client)
if (process.env.SCRAPE_CLIENT_APPLICATIONS === "true")
  await new Applications().run();

if (process.env.SCRAPE_DOMAINS === "true")
  await new Domains(process.env.SECURITYTRAILS_API_KEY!).run();

// Scrape all github data - organisation and repositories
if (process.env.SCRAPE_GITHUB === "true") await new Github().run();

if (process.env.SCRAPE_POSTS === "true") await new Posts().run();

if (process.env.SCRAPE_CLIENT_ROUTES === "true") await new Routes().run();

export {};
