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

import type { PushResult } from "simple-git";

import { HyrosCoffeeSender } from "./hyros_coffee.js";
import { DiscordInsidersSender } from "./discord_insiders.js";
//import { WumpusCentralSender } from "./wumpus_central.ts";

import type { Channel } from "../../Channel.js";
import type { Build } from "../scripts/Build.ts";
import type { Scripts } from "../scripts/index.ts";
import type { Stylesheets } from "../stylesheets/index.ts";

export interface Sender {
  send(
    result: PushResult,
    channel: Channel,
    build: Build,
    scriptFiles: Awaited<ReturnType<Scripts["files"]>>,
    stylesheetFiles: Awaited<ReturnType<Stylesheets["files"]>>,
    date: Date
  ): Promise<void>;
}

export const send = async (
  result: PushResult,
  channel: Channel,
  build: Build,
  scriptFiles: Awaited<ReturnType<Scripts["files"]>>,
  stylesheetFiles: Awaited<ReturnType<Stylesheets["files"]>>,
  date: Date
) => {
  await new HyrosCoffeeSender().send(
    result,
    channel,
    build,
    scriptFiles,
    stylesheetFiles,
    date
  );
  await new DiscordInsidersSender().send(
    result,
    channel,
    build,
    scriptFiles,
    stylesheetFiles,
    date
  );
  /**await new WumpusCentralSender().send(
    result,
    channel,
    build,
    scriptFiles,
    stylesheetFiles,
    date
  );**/
};
