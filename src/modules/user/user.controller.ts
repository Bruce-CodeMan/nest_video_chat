import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  async getAllUsers(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    console.log("id: ", id)
    const users = await this.userService.findAllUsersExcept(id)
    console.log("users: ", users)
    return {
      code: 200,
      data: users
    }
  }

}

