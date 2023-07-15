import type { PushResult } from "simple-git";
import { HyrosCoffeeSender } from "./hyros_coffee.ts";
import { WumpusCentralSender } from "./wumpus_central.ts";
import type { Channel } from "../Channel.ts";
import type { Build } from "../scripts/Build.ts";
import type { Scripts } from "../scripts/index.ts";
import type { Stylesheets } from "../stylesheets/index.ts";

export interface Sender {
  send(
    result: PushResult,
    channel: Channel,
    build: Build,
    scriptFiles: Awaited<ReturnType<Scripts["files"]>>,
    stylesheetFiles: Awaited<ReturnType<Stylesheets["files"]>>,
    date: Date
  ): Promise<void>;
}

export const send = async (
  result: PushResult,
  channel: Channel,
  build: Build,
  scriptFiles: Awaited<ReturnType<Scripts["files"]>>,
  stylesheetFiles: Awaited<ReturnType<Stylesheets["files"]>>,
  date: Date
) => {
  await new HyrosCoffeeSender().send(
    result,
    channel,
    build,
    scriptFiles,
    stylesheetFiles,
    date
  );
  await new WumpusCentralSender().send(
    result,
    channel,
    build,
    scriptFiles,
    stylesheetFiles,
    date
  );
};
