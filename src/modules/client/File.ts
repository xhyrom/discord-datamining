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

export class File {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  get name() {
    return this.path.split(".").slice(0, -1).join(".");
  }

  get extension() {
    return this.path.split(".").pop()!;
  }

  async content() {
    return await (
      await fetch(`https://canary.discord.com/assets/${this.path}`)
    ).text();
  }
}
