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

import { join } from "node:path";
import type { Module } from "..";
import { DATA_DIR } from "../../utils.ts";
import { Experiments } from "./experiments/index.ts";
import { Channel, ChannelType } from "./Channel.ts";
import { Strings } from "./strings/index.ts";

export class Client implements Module {
  get baseDir() {
    return Client.baseDir;
  }

  static get baseDir() {
    return join(DATA_DIR, "client");
  }

  async run() {
    await new Experiments().run();

    await new Channel(ChannelType.Stable).run();
    await new Channel(ChannelType.PublicTestingBeta).run();
    await new Channel(ChannelType.Canary).run();

    await new Strings().run();
  }
}
