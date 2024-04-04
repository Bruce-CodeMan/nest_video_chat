import { Controller, Get } from "@nestjs/common";

@Controller('user')
export class UserController {

  @Get()
  finaUser(): any{
    return {"code": 0, "message": "welcome"}
  }

}

