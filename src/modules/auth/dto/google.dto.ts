import { IsString, IsNumber, IsNotEmpty, IsEmail } from "class-validator";
import { Type } from "class-transformer";


export class GoogleDto {

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  openId: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  avatar: string;
  
}