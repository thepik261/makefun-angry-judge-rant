// Angry Judge: The Short Rant Contest — entry program (Node stdlib only).
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// The rant is fixed and deterministic: 260 characters, well under the 400 cap.
import { mkdir, writeFile } from "node:fs/promises";

const RANT =
  "My office printer has warned me it is \"low on toner\" since March. " +
  "It has printed four hundred pages since. It is not low on toner. " +
  "It is a liar. And it only ever jams when the deadline is five minutes away, " +
  "like it read my calendar, waited, then chose violence.";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", RANT, "utf8");
console.log(`wrote /output/entry.txt (${RANT.length} characters)`);
