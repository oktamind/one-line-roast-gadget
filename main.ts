// One-Line Roast: The Gadget You Use Every Day
// Target: AirPods — the gadget I actually use every day.
// Angle: not the dead-battery cliche, but the one-ear-first death,
// mid-sentence, framed as ghosting. Specific, fresh, tight.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My AirPods die in one ear first, mid-sentence, like they're taking turns ghosting me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
