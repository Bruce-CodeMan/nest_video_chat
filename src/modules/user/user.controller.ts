import { Controller, Get, Query, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getAllUsers(
    @Req() req: Request
  ) {
    const id = req.user?.userId
    const users = await this.userService.findAllUsersExcept(id)
    return {
      code: 200,
      
      data: users
    }
  }

}

