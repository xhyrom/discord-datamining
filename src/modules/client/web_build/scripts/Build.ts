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

export class Build {
  #buildNumber?: string;
  #versionHash?: string;
  #builtAt?: number;

  get buildNumber() {
    return this.#buildNumber ?? "???";
  }

  get versionHash() {
    return this.#versionHash ?? "???";
  }

  get builtAt() {
    return this.#builtAt ?? Date.now();
  }

  set buildNumber(buildNumber: string) {
    this.#buildNumber = buildNumber;
  }

  set versionHash(versionHash: string) {
    this.#versionHash = versionHash;
  }

  set builtAt(builtAt: number) {
    this.#builtAt = builtAt;
  }

  filled() {
    return !!(this.#buildNumber && this.#versionHash && this.#builtAt);
  }
}
