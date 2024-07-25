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

import { Policy } from "./policy.ts";
import { pushToGit } from "../../utils.ts";

export class Privacy extends Policy {
  async run() {
    const content = await this.getHtmlContent("https://discord.com/privacy");
    if (!content) {
      console.log("Failed to get privacy content.");
      return;
    }

    await this.writeFile(`privacy.md`, content);

    await pushToGit(`👮 Privacy has been updated`);
  }
}
