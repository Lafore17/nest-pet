import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserDto } from "./dto";

@Controller("users")
export class UsersController {
  @Get()
  getAllUsers(): UserDto[] {
    return [];
  }

  @Post()
  createUser(@Body() userToCreate: UserDto) {}
}
