import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The judge ranks five things: it must be a joke about an AI that writes code,
// the laugh must turn on the last words, it must be true of a real diff, it must
// land in one line, and it must not be the stock "hallucination" gag.
//
// This joke is one observed diff, not a claim about AI in general: an agent
// renames an exported symbol to fix a typo, so every import site changes too.
// The file count is the setup; the turn is the agent's own description of the
// work, which is accurate per file and absurd in total. "Called it" keeps the
// claim in the agent's mouth so the contradiction is his, not the narrator's,
// and "single-character" closes the reading that would flatten the punchline.
const JOKE: string = "My agent fixed the typo in eleven files and called it a single-character change.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE + "\n", "utf8");
