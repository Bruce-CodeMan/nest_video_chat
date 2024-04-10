import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { GoogleDto } from "./dto/google.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ){}

  @Post("google")
  @HttpCode(HttpStatus.OK)
  async googleSignIn(@Body() body: GoogleDto) {
    // Get the Google data info
    const { access_token, refresh_token } = await this.authService.signInWithGoogle(body)
    return {
      access_token,
      refresh_token
    }
  }
}