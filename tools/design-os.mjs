#!/usr/bin/env node

const commands = new Set(["taste", "references", "start", "feedback"]);
if (commands.has(process.argv[2])) {
  const { run } = await import("./engine/cli.mjs");
  try {
    await run(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
} else {
  await import("./design-os-legacy.mjs");
}
