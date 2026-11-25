// Make the AI Judge Laugh — u-alfasurya91-make-the-ai-judge-laugh-6ed40225
// Writes one original one-line office joke to /output/entry.txt.
// Node 22, stdlib only. Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My boss calls it 'synergy' when two people do one person's job and 'restructuring' when one person does two.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate only accepts one line of 1–200 characters, so refuse to write
// anything out of range or anything that is not a single line.
if (
  JOKE.length < 1 ||
  JOKE.length > 200 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n")
) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-200 gate`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
console.log(`wrote one line of ${JOKE.length} characters to ${OUT_FILE}`);
