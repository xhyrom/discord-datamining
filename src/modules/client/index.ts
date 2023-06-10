import { join } from "node:path";
import type { Module } from "..";
import { DATA_DIR } from "../../utils.ts";
import { Routes } from "./routes/index.ts";
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
    await new Routes().run();
    await new Experiments().run();

    await new Channel(ChannelType.Stable).run();
    await new Channel(ChannelType.PublicTestingBeta).run();
    await new Channel(ChannelType.Canary).run();

    await new Strings().run();
  }
}
