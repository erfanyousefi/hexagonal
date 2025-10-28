import {Inject, Injectable} from "@nestjs/common";
import {User} from "../../domain/entities/user.entity";
import {USER_REPOSITORY, UserRepositoryPort} from "../ports/user.repository.port";
export interface CreateUserDto {
    name: string
    email: string
}
@Injectable()
export class CreateUserUseCase {
    constructor(@Inject(USER_REPOSITORY) private userRepository: UserRepositoryPort) { }
    execute(dto: CreateUserDto) {
        const existingUser = this.userRepository.findByEmail(dto.email)
        if (existingUser) {
            throw new Error("User with this email already exists.")
        }
        const user = User.create(dto.name, dto.email)
        return this.userRepository.create(user)
    }
}