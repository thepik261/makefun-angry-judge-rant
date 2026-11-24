// Angry Judge: The Short Rant Contest — entry program (Node stdlib only).
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// The rant is fixed and deterministic, well under the 400-character cap.
import { mkdir, writeFile } from "node:fs/promises";

const RANT =
  "Our office printer has warned it is 'low on toner' since March. " +
  "Since then it has printed hundreds of pages and my entire will to live, " +
  "yet the warning never leaves. It is a liar. " +
  "And it only ever jams when the deadline is five minutes away, " +
  "as if it can smell fear through the paper tray.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", RANT, "utf8");
console.log(`wrote /output/entry.txt (${RANT.length} characters)`);
