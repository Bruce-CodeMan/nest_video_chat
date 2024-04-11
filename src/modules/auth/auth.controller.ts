// Import the core libraries
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

// Import the custom files
import { GoogleInputDto } from "@/modules/auth/dto/google-input.dto";
import { AuthService } from "@/modules/auth/auth.service";
import { ResultDto } from "@/common/dto/result.dto";
import { GoogleResultDto } from "@/modules/auth/dto/google-result.dto";
import { SUCCESS } from "@/common/constants/code.constant";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ){}

  @Post("google")
  @HttpCode(HttpStatus.OK)
  async googleSignIn(@Body() body: GoogleInputDto): Promise<ResultDto<GoogleResultDto>>{
    // Get the Google data info
    const { access_token, refresh_token } = await this.authService.signInWithGoogle(body)
    // Get the user info
    const user = await this.authService.getUserInfo(body.openId);
    return {
      code: SUCCESS,
      message: "google login success",
      data: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        description: user.description,
        online: user.online,
        type: user.type,
        access_token,
        refresh_token
      }
    }
  }
}