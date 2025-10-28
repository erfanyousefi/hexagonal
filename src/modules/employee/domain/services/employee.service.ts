import {Inject} from "@nestjs/common";
import Employee from "../entities/employee.entity";
import EmployeeRepositoryPort, {EMPLOYEE_REPOSITORY} from "../ports/employee.repository.port";

export class EmployeeService {
    constructor(@Inject(EMPLOYEE_REPOSITORY) private readonly repo: EmployeeRepositoryPort) { }

    async createEmployee(dto: Omit<Employee, "id">) {
        const employee = new Employee(null, dto.name, dto.email, dto.position)
        console.log(employee)
        return this.repo.create(employee)
    }
    async updateEmployee(id: number, dto: Partial<Employee>) {
        const existing = await this.repo.findById(id)
        if (!existing) throw new Error("Employee not found")
        return this.repo.update(id, dto)
    }
    async remove(id: number) {
        const existing = await this.repo.findById(id);
        if (!existing) throw new Error("Employee not found");
        return this.repo.remove(id);
    }
    async findById(id: number) {
        const existing = await this.repo.findById(id);
        if (!existing) throw new Error("Employee not found");
        return existing;
    }

}