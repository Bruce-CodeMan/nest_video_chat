// Import the core libraries
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

// Import the custom modules
import { UserModule, AuthModule } from "@/modules";
// Import the custom configurations
import { connectionOptions, configOptions } from '@/utils';

@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    TypeOrmModule.forRoot(connectionOptions),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
