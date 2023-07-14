import { join } from "node:path";
import type { Module } from "..";
import { DATA_DIR, octokit } from "../../utils.ts";
import { Blog } from "./Blog.ts";
import { ArticleType, Articles } from "./Articles.ts";
import deepEqual from "fast-deep-equal";

export interface Diff<T> {
  removedPosts: T[];
  updatedPosts: {
    diff?: string | undefined;
  }[] &
    T[];
  addedPosts: T[];
}

export class Posts implements Module {
  get baseDir() {
    return join(DATA_DIR);
  }

  async run() {
    await new Blog().run();

    await new Articles(ArticleType.Normal).run();
    await new Articles(ArticleType.Dev).run();
    await new Articles(ArticleType.Creator).run();
  }

  static async diff<
    T extends { id: number | string },
    K extends T & { diff?: string | undefined }
  >(
    before: string,
    after: string,
    baseDir: string,
    oldPosts: T[],
    newPosts: T[]
  ): Promise<Diff<K>> {
    const diff = await octokit.repos.compareCommits({
      owner: "xHyroM",
      repo: "discord-datamining",
      base: before,
      head: after,
    });

    const removedPosts: K[] = [];
    const updatedPosts: K[] = [];
    const addedPosts: K[] = [];

    for (const oldPost of oldPosts) {
      const newPost = newPosts.find((a) => a.id === oldPost.id);

      if (!newPost) {
        removedPosts.push(oldPost as unknown as K);
        continue;
      }

      if (!deepEqual(oldPost, newPost)) {
        updatedPosts.push({
          ...(newPost as unknown as K),
          diff: diff.data.files?.find((f) =>
            f.filename.includes(`${baseDir}/${newPost.id}/content.md`)
          )?.patch,
        });
      }
    }

    for (const newPost of newPosts) {
      const oldPost = oldPosts.find((a) => a.id === newPost.id);

      if (!oldPost) {
        addedPosts.push(newPost as unknown as K);
      }
    }

    return {
      removedPosts,
      updatedPosts,
      addedPosts,
    };
  }
}
