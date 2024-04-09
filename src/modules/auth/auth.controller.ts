import { Body, Controller, Post } from "@nestjs/common";

@Controller('/auth')
export class AuthController {
  constructor(){}

  @Post("signIn")
  async signIn(@Body() loginDto: any) {
    
  }
}