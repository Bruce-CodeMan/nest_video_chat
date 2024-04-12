// Import the core library
import { ConfigModuleOptions } from "@nestjs/config";

// Import the custom files
import { loadConfig } from "./config.loader";

const config = loadConfig()

export const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [() => config]
}

