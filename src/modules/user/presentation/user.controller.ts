import {Body, Controller, Post} from "@nestjs/common";
import {CreateUserDto, CreateUserUseCase} from "../application/use-cases/create-user.usecase";

@Controller("/user")
export class UserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }
    @Post("/")
    create(@Body() dto: CreateUserDto) {
        return this.createUserUseCase.execute(dto)
    }
}