// Import the core libraries
import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";

// Import the custom files
import { JwtGuard } from "@/guards/jwt.guard";
import { UserService } from "@/modules/user/user.service";

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  @UseGuards(JwtGuard)
  async getAllUsers(@Req() req: Request) {
    const id = req.user?.userId
    const users = await this.userService.findAllUsersExcept(id)
    return {
      code: 200,
      
      data: users
    }
  }

}

