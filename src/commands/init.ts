import { Command } from "commander";

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .argument("[components]", "the components to add or a url to the component")
  .action(() => {
    console.log("HEY initializing");
  });
