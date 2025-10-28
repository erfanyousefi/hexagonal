import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateEmployeeUseCase} from "../application/use-cases/create-employee.usecase";
import {EMPLOYEE_REPOSITORY} from "../domain/ports/employee.repository.port";
import {EmployeeService} from "../domain/services/employee.service";
import {EmployeeController} from "../interface/employee.controller";
import EmployeeDbEntity from "./persistence/employee.db.entity";
import {TypeormEmployeeRepository} from "./persistence/typeorm-employee.repository";

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeDbEntity])],
    providers: [
        {
            provide: EMPLOYEE_REPOSITORY,
            useClass: TypeormEmployeeRepository,
        },
        {
            provide: EmployeeService,
            useFactory: (repo: TypeormEmployeeRepository) => new EmployeeService(repo),
            inject: [EMPLOYEE_REPOSITORY]
        },
        {
            provide: CreateEmployeeUseCase,
            useFactory: (service: EmployeeService) => new CreateEmployeeUseCase(service),
            inject: [EmployeeService]
        },
    ],
    controllers: [EmployeeController]
})
export class EmployeeModule { } 