// One-Line Roast: The Gadget You Use Every Day
// Target: AirPods — the gadget I actually use every day.
// Angle: not the dead-battery cliche, but the one-ear-first death,
// mid-sentence, framed as ghosting. Specific, fresh, tight.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My AirPods die in one ear first, mid-sentence, like they're taking turns ghosting me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast must be 1-200 chars, got ${ROAST.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
