// import the core library
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// Import the custom files
import { DbEnum } from "@/common/enum/config.enum";
import { loadConfig } from "@/utils/config.loader";


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