import { IsString, IsNotEmpty, IsEmail } from "class-validator";


export class GoogleInputDto {

  @IsString()
  openId: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  avatar: string;
  
}