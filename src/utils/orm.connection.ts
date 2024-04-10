import * as fs from "fs";
import * as path from "path"

import * as dotenv from "dotenv"
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DbEnum } from "@/enum/config.enum";

function loadConfig(): Record<string, any> {
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

function parsePort(value: string | undefined, defaultValue: number): number {
  return value ? parseInt(value, 10) : defaultValue;
}

function parseBoolean(value: string | undefined, defaultValue: boolean): boolean {
  return value ? value === "true" : defaultValue;
}

const config = loadConfig()

export const connectionOptions: TypeOrmModuleOptions = {
  type: config[DbEnum.DB_TYPE],
  host: config[DbEnum.DB_HOST],
  port: parsePort(config[DbEnum.DB_PORT], 3306),
  username: config[DbEnum.DB_USERNAME],
  password: config[DbEnum.DB_PASSWORD],
  database: config[DbEnum.DB_DATABASE],
  entities: [`${__dirname}/../modules/**/*.entity.{ts,js}`],
  synchronize: parseBoolean(config[DbEnum.DB_SYNC], false),
  logging: parseBoolean(config[DbEnum.DB_LOGGING], false)
}