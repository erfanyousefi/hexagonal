import {Injectable} from "@nestjs/common";
import {UserRepositoryPort} from "../../application/ports/user.repository.port";
import {User} from "../../domain/entities/user.entity";
import {Email} from "../../domain/value-objects/email.vo";

@Injectable()
export class InMemoryUserRepository implements UserRepositoryPort {
    private users: Map<string, User> = new Map()
    constructor() { }
    create(user: User): User {
        this.users.set(user.getId().getValue(), user)
        return user
    }
    findById(id: string): User | null {
        return this.users.get(id)

    }
    findByEmail(email: string): User | null {
        const users = Array.from(this.users.values())
        return users.find(user => user.getEmail().equals(new Email(email)))
    }
    findAll(): User[] {
        return Array.from(this.users.values())
    }
    delete(id: string): void {
        this.users.delete(id)
    }


}