import {Body, Controller, Post} from "@nestjs/common";
import {CreateEmployeeDto} from "../application/dto/create-employee.dto";
import {CreateEmployeeUseCase} from "../application/use-cases/create-employee.usecase";

@Controller("employee")
export class EmployeeController {
    constructor(private createUseCase: CreateEmployeeUseCase) { }

    @Post()
    async create(@Body() dto: CreateEmployeeDto) {
        return this.createUseCase.execute(dto)
    }
}