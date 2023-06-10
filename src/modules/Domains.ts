import { join } from "node:path";
import { DATA_DIR, omit, writeFile } from "../utils.ts";
import type { Module } from ".";

interface Response {
  endpoint: string;
  meta: {
    limit_reached: boolean;
  };
  subdomain_count: number;
  subdomains: string[];
}

export class Domains implements Module {
  #apiKey: string;
  domains = ["discord.com"];

  constructor(apiKey: string) {
    this.#apiKey = apiKey;
  }

  get baseDir() {
    return join(DATA_DIR, "domains");
  }

  async run() {
    const domainsResponse = await Promise.all(
      this.domains.map((domain) => this.get(domain))
    );

    for (let i = 0; i < domainsResponse.length; i++) {
      const domain = domainsResponse[i];

      if (!domain) {
        console.log(`Domain ${this.domains[i]} is null!`);
        continue;
      }

      await writeFile(
        join(this.baseDir, `${this.domains[i]}.json`),
        JSON.stringify(omit(domain, "meta", "endpoint"), null, 2)
      );
    }
  }

  async get(domain: string): Promise<Response | null> {
    const res = await fetch(
      `https://api.securitytrails.com/v1/domain/${domain}/subdomains?include_inactive=false`,
      {
        headers: {
          APIKEY: this.#apiKey,
        },
      }
    );

    if (!res.ok) return null;

    const json: Response = await res.json();

    return json;
  }
}
