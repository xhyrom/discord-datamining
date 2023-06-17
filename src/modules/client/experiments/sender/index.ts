import type { PushResult } from "simple-git";
import type { Diff } from "../.";
import { HyrosCoffeeSender } from "./hyros_coffee";
import { WumpusCentralSender } from "./wumpus_central";

export interface Sender {
  send(diff: Diff, result: PushResult): Promise<void>;
}

export const send = async (diff: Diff, result: PushResult) => {
  new HyrosCoffeeSender().send(diff, result);
  new WumpusCentralSender().send(diff, result);
};
