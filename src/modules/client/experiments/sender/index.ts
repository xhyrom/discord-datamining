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
import type { Diff } from "../.";
import { HyrosCoffeeSender } from "./hyros_coffee.ts";
import { WumpusCentralSender } from "./wumpus_central.ts";
import { DiscordInsidersSender } from "./discord_insiders.ts";

export interface Sender {
  send(diff: Diff, result: PushResult): Promise<void>;
}

export const send = async (diff: Diff, result: PushResult) => {
  await new HyrosCoffeeSender().send(diff, result);
  await new DiscordInsidersSender().send(diff, result);
  await new WumpusCentralSender().send(diff, result);
};
