// Import the core libraries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

// Import the libraries from the external
import { config } from "dotenv";

// Import the custom entities
import { UserModule } from "@/modules/user/user.module";
import { connectionOptions } from '@/utils/orm.connection';

const envFilePath = `.env.${process.env.NODE_ENV || `development`}`

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [() => config({path: ".env"})]
    }),
    TypeOrmModule.forRoot(connectionOptions),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
