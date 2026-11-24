// One Word From Your Ex — make.fun bounty entry.
//
// The word my ex would use to describe me: "Unavailable".
// It stings because it is true: I was in the room and nowhere else.
// One word, no explanation needed — and no trailing newline, so the
// file holds exactly the word and nothing else.
//
// Writes exactly that word to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), as the kit requires.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Unavailable";

function main(): void {
  const word = WORD.trim();
  // Gate, mirrored from the kit: exactly one word, 1-24 characters.
  if (!/^\S+$/.test(word) || word.length < 1 || word.length > 24) {
    throw new Error("entry must be exactly one word of 1-24 characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), word, "utf8");
}

main();
