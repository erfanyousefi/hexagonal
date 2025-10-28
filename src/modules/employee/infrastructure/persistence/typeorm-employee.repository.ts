import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import Employee from "../../domain/entities/employee.entity";
import EmployeeRepositoryPort from "../../domain/ports/employee.repository.port";
import EmployeeDbEntity from "./employee.db.entity";

@Injectable()
export class TypeormEmployeeRepository implements EmployeeRepositoryPort {
    constructor(@InjectRepository(EmployeeDbEntity) private ormRepo: Repository<EmployeeDbEntity>) { }

    async create(employee: Employee): Promise<Employee> {
        const res = await this.ormRepo.save(employee)
        return new Employee(res.id, res.name, res.email, res.position);
    }
    async update(id: number, employee: Partial<Employee>): Promise<Employee> {
        await this.ormRepo.update(id, employee)
        const res = await this.ormRepo.findOneBy({id})
        return res ? new Employee(res.id, res.name, res.email, res.position) : null
    }
    async findById(id: number): Promise<Employee | null> {
        const res = await this.ormRepo.findOneBy({id});
        return res ? new Employee(res.id, res.name, res.email, res.position) : null
    }
    async remove(id: number): Promise<void> {
        await this.ormRepo.delete(id);
    }
}