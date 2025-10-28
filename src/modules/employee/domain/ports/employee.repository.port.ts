import Employee from "../entities/employee.entity";

export default interface EmployeeRepositoryPort {
    create(employee: Employee): Promise<Employee>
    findById(id: number): Promise<Employee | null>
    update(id: number, employee: Partial<Employee>): Promise<Employee>
    remove(id: number): Promise<void>
}

export const EMPLOYEE_REPOSITORY = Symbol("EMPLOYEE_REPOSITORY")