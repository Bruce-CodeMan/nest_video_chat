import { Injectable } from "@nestjs/common";
import { GoogleDto } from "./dto/google.dto";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { JwtEnum } from "@/enum/config.enum";

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ){}

  // 使用google登录
  async signInWithGoogle(googleDto: GoogleDto) {
    const { openId, email, name, avatar } = googleDto;
    let user = await this.userService.findByOpenId(openId)
    if(!user) {
      user = await this.userService.create({
        open_id: openId,
        email,
        name,
        avatar
      })
    }
    const access_token = await this.jwtService.signAsync({
      username: user.name,
      sub: user.id
    }, {
      expiresIn: this.configService.get<string>(JwtEnum.JWT_ACCESS_TOKEN_EXPIRATION)
    })
    const refresh_token = await this.jwtService.signAsync({
      sub: user.id
    }, {
      expiresIn: this.configService.get<string>(JwtEnum.JWT_REFRESH_TOKEN_EXPIRATION)
    })
    return {access_token, refresh_token}
  }
}