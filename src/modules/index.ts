export interface Module {
  baseDir: string;
  run(): Promise<void>;
}
