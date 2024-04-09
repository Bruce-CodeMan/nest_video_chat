// Import the core libraries
import * as fs from "fs";
import * as path from "path";

// Import the libraries from the external
import * as dotenv from "dotenv"
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DbEnum } from "@/enum/config.enum";
import { DataSource, DataSourceOptions } from "typeorm";

// Import the custom files


// Read the environment path
function getEnv(envFilePath: string): Record<string, any> {
  const envPath = path.resolve(process.cwd(), envFilePath)
  if(fs.existsSync(envPath)) {
    return dotenv.parse(fs.readFileSync(envPath))
  }
  return {}
}

// Parse the boolean value
function getBooleanValue(value: string): boolean {
  return value == "true"
}

// Create the mysql connection
function buildConnectionOptions() {

  const defaultConfig = getEnv(".env")
  const envConfig = getEnv(`.env.${process.env.NODE_ENV || `development`}`)
  const config = {...defaultConfig, ...envConfig}

  const dbPort = config[DbEnum.DB_PORT] ? parseInt(config[DbEnum.DB_PORT], 3306) : undefined;

  return {
    type: config[DbEnum.DB_TYPE],
    host: config[DbEnum.DB_HOST],
    port: dbPort,
    username: config[DbEnum.DB_USERNAME],
    password: config[DbEnum.DB_PASSWORD],
    database: config[DbEnum.DB_DATABASE],
    entities: [`${__dirname}/../modules/**/*.entity.{ts,js}`],
    synchronize: getBooleanValue(config[DbEnum.DB_SYNC]),
    logging: getBooleanValue(config[DbEnum.DB_LOGGING])
  } as TypeOrmModuleOptions;
}

export const connectionOptions = buildConnectionOptions();

export default new DataSource({
  ...connectionOptions,
  migrations: [`${process.cwd()}/src/migrations/*`],
  subscribers: []
} as DataSourceOptions);