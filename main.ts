// Last Text at One Percent — make.fun bounty u-azazex-last-text-at-one-percent-ba9fc876
//
// Writes the phone's final text message, in its own voice, to /output/entry.txt.
// Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "1% left. confession: it was never autocorrect. i meant every weird word i sent. tell my charger i loved her. goodb—";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
