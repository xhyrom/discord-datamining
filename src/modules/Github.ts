import { join } from "node:path";
import { DATA_DIR, omit, omitEndsWith, writeFile, rm } from "../utils.ts";
import { Octokit } from "@octokit/rest";
import type { Module } from ".";

export class Github implements Module {
  private octokit: Octokit;

  constructor(token?: string) {
    this.octokit = new Octokit({
      auth: token,
    });
  }

  get baseDir() {
    return join(DATA_DIR, "github");
  }

  async run() {
    const organisation = await this.organisation();
    const repositories = await this.repositories();

    if (!organisation) {
      console.log("Potentional outage, no organisation found!");
      return;
    }

    if (!repositories) {
      console.log("Potentional outage, no repositories found!");
      return;
    }

    await writeFile(
      join(this.baseDir, "organisation.json"),
      JSON.stringify(
        omitEndsWith(omit(organisation, "followers"), "_url"),
        null,
        2
      )
    );

    await rm(join(this.baseDir, "repositories"));

    for (const repository of repositories) {
      await writeFile(
        join(
          this.baseDir,
          "repositories",
          repository.id.toString(),
          "meta.json"
        ),
        JSON.stringify(
          omitEndsWith(
            omit(
              repository,
              "open_issues",
              "watchers",
              "forks",
              "updated_at",
              "pushed_at"
            ),
            "_count",
            "_url"
          ),
          null,
          2
        )
      );
    }
  }

  async organisation() {
    try {
      const { data: organisation } = await this.octokit.rest.orgs.get({
        org: "discord",
      });

      return organisation;
    } catch (e) {
      return null;
    }
  }

  async repositories() {
    try {
      const repositories = await this.octokit.paginate(
        this.octokit.rest.repos.listForOrg,
        {
          org: "discord",
        }
      );

      return repositories;
    } catch {
      return null;
    }
  }
}
