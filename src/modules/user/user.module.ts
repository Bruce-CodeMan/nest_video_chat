import { Module, ConsoleLogger } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "@/modules/user/models/user.entity";
import { UserController } from "./user.controller";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [ConsoleLogger]
})
export class UserModule{}