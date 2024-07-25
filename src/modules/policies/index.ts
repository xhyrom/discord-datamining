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
import { DATA_DIR } from "../../utils.ts";
import type { Module } from "..";
import { Acknowledgements } from "./acknowledgements.ts";
import { CompanyInformation } from "./company_information.ts";
import { Guidelines } from "./guidelines.ts";
import { Licenses } from "./licenses.ts";
import { Privacy } from "./privacy.ts";
import { Terms } from "./terms.ts";

export class Policies implements Module {
  get baseDir() {
    return join(DATA_DIR, "policies");
  }

  public async run() {
    await new Acknowledgements(this.baseDir).run();
    await new CompanyInformation(this.baseDir).run();
    await new Guidelines(this.baseDir).run();
    await new Licenses(this.baseDir).run();
    await new Privacy(this.baseDir).run();
    await new Terms(this.baseDir).run();
  }
}
