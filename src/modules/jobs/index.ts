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
import { DATA_DIR, rm, writeFile } from "../../utils.ts";
import { JSDOM } from "jsdom";
import type { Module } from "..";

interface GreenHouseJob {
  absolute_url: string;
  data_compliance: {
    type: string;
    requires_consent: boolean;
    requires_processing_consent: boolean;
    requires_retention_consent: boolean;
    retention_period: null;
  }[];
  education?: string;
  internal_job_id: number;
  location: {
    name: string;
  };
  metadata: {
    id: number;
    name: string;
    value: [] | null;
    value_type: string;
  }[];
  id: number;
  updated_at: string;
  requisition_id: string;
  title: string;
  content: string;
  departments: {
    id: number;
    name: string;
    child_ids: [];
    parent_id: number | null;
  }[];
  offices: {
    id: number;
    name: string;
    location: string | null;
    child_ids: [];
    parent_id: number | null;
  }[];
}

interface GreenHouseResponse {
  jobs: GreenHouseJob[];
  meta: {
    total: number;
  };
}

export class Jobs implements Module {
  get baseDir() {
    return join(DATA_DIR, "jobs");
  }

  public async run() {
    const discord = await this.getJobs("discord");
    const discordNetherlands = await this.getJobs("discordnetherlands");

    await writeFile(
      join(this.baseDir, "discord.json"),
      JSON.stringify(discord, null, 2),
    );

    await writeFile(
      join(this.baseDir, "discord_netherlands.json"),
      JSON.stringify(discordNetherlands, null, 2),
    );

    await this.writeJobs("discord", discord.jobs);
    await this.writeJobs("discord_netherlands", discordNetherlands.jobs);
  }

  async writeJobs(board: string, jobs: GreenHouseJob[]) {
    await rm(join(this.baseDir, board));

    for (const job of jobs) {
      await writeFile(
        join(this.baseDir, board, job.id.toString(), "data.json"),
        JSON.stringify(job, null, 2),
      );

      const data = `# Job Listing

## ${job.title}

**Location:** ${job.location.name}

**Id**: ${job.id} <br/>
**Internal Job Id:**: ${job.internal_job_id} <br/>
**Requisition Id:** ${job.requisition_id} <br/>

**Discord Jobs:** [https://discord.com/jobs/${job.id}](https://discord.com/jobs/${job.id})

**Updated At:** ${new Date(job.updated_at).toUTCString()}

**Job Description:**
${new JSDOM(`<!DOCTYPE html><body>${job.content}</body>`).window.document.body.innerHTML.replace(/&lt;.*?&gt;/g, "")}
${job.education ? `\n**Education:**\n${job.education}\n` : ""}
** Data Compliance:**
${job.data_compliance
  .map(
    (item) =>
      `- ${item.type.toUpperCase()}: ${
        !item.requires_consent &&
        !item.requires_retention_consent &&
        !item.requires_processing_consent
          ? "No consent required for processing or retention."
          : `consent ${item.requires_consent}, retention consent ${item.requires_retention_consent}, processing consent ${item.requires_processing_consent}`
      }`,
  )
  .join("\n")}

** Departments:**
${job.departments.map((item) => `- ${item.name}`).join("\n")}

** Offices:**
${job.offices.map((item) => `- ${item.name}${item.location ? ` in ${item.location}` : ""}`).join("\n")}
    `;

      await writeFile(
        join(this.baseDir, board, job.id.toString(), "data.md"),
        data,
      );
    }
  }

  async getJobs(board: string): Promise<GreenHouseResponse> {
    const res = await fetch(
      `https://api.greenhouse.io/v1/boards/${board}/jobs?content=true`,
    );

    return await res.json();
  }
}
