import { Command } from "commander";

import packageJson from "../package.json";
import { init } from "@/src/commands/init.js";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("manishcn")
    .description(
      "add components and dependencies to you project, like shadcn 😝"
    )
    .version(
      packageJson.version || "1.0.0",
      "-v, --version",
      "display the version number"
    );

  program.addCommand(init);

  program.parse();
}

main();
