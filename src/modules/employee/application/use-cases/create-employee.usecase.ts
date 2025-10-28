import Employee from "../../domain/entities/employee.entity";
import {EmployeeService} from "../../domain/services/employee.service";

export class CreateEmployeeUseCase {
    constructor(private employeeService: EmployeeService) { }
    async execute(dto: Omit<Employee, "id">) {
        return this.employeeService.createEmployee(dto)
    }
}