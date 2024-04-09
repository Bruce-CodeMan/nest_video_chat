import { Module, ConsoleLogger } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "@/modules/user/models/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [ConsoleLogger, UserService],
  exports: [UserService]
})
export class UserModule{}