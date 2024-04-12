
// Import the core libraries
import * as path from "path";
import * as fs from "fs";

// Import the library from the external
import * as dotenv from "dotenv";

export function loadConfig(): Record<string, any> {
  const basePath = process.cwd()
  const defaultEnvPath = path.resolve(basePath, ".env")
  const environment = process.env.NODE_ENV || `development`
  const envFilePath = path.resolve(basePath, `.env.${environment}`)

  let config = {}

  if(fs.existsSync(defaultEnvPath)) {
    Object.assign(config, dotenv.parse(fs.readFileSync(defaultEnvPath)))
  }
  if(fs.existsSync(envFilePath)) {
    Object.assign(config, dotenv.parse(fs.readFileSync(envFilePath)))
  }

  return config;
}