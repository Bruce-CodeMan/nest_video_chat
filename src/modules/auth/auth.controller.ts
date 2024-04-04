import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto/auth_input.type";

@Controller('/auth')
export class AuthController {
  constructor(){}

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    
  }
}