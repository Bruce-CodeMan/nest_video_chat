/*
 * @Date: 2024-03-29 16:43:21
 * @Author: Bruce Hsu
 * @Description: 
 */
import { IsEmail, IsNotEmpty, IsUrl } from "class-validator";

export class LoginDto{
  
  @IsUrl()
  avatar: string;

  @IsNotEmpty()
  name: string;

  type: number;

  openId: number;

  @IsEmail()
  email: string;
  
}