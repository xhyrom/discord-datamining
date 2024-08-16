import { File } from "../../../../File.ts";

export async function getChunks(code: string) {
  const chunks: File[] = [];
  const checksums: Set<string> = new Set();

  async function recursiveChunks(code: string) {
    const matches = Array.from(
      code.matchAll(/\s*(\d+):\s*"([a-f0-9]{20})"\s*,?/g),
    );
    const promises = matches.map(async (item) => {
      if (checksums.has(item[2]!)) return;

      console.log(`Scraping chunk ${item[2]}`);
      const file = new File(item[2]! + ".js");
      const content = await file.content();
      if (!content) return;

      console.log(`Chunk ${item[2]} has been scraped and contains body`);

      chunks.push(file);
      checksums.add(item[2]!);

      await recursiveChunks(content);
    });

    await Promise.all(promises);
    console.log(`Processed ${chunks.length} chunks so far.`);
  }

  await recursiveChunks(code);

  console.log(`Total chunks processed: ${chunks.length}`);
  return chunks;
}
