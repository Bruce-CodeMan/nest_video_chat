// Import the core libraries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// Import the libraries from the external
import { config } from "dotenv";

// Import the custom entities
import { UserModule } from "@/modules/user/user.module";

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [`${__dirname}/../modules/**/*.entity.{ts,js}`],
      logging: true,
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
