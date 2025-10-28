import {Module} from "@nestjs/common";
import {USER_REPOSITORY} from "./application/ports/user.repository.port";
import {CreateUserUseCase} from "./application/use-cases/create-user.usecase";
import {InMemoryUserRepository} from "./infrastructure/adapters/in-memory-user.repository";
import {UserController} from "./presentation/user.controller";

@Module({
    providers: [
        CreateUserUseCase,
        {
            provide: USER_REPOSITORY,
            useClass: InMemoryUserRepository
        }
    ],
    controllers: [UserController]
})
export class UserModule { }