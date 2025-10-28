import {User} from "../../domain/entities/user.entity";

export interface UserRepositoryPort {
    create(user: Omit<User, "id">): User
    findById(id: string): User | null
    findByEmail(email: string): User | null
    findAll(): User[]
    delete(id: string): void
}

export const USER_REPOSITORY = Symbol("USER_REPOSITORY")