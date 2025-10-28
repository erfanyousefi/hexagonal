import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateCategoryUseCase} from "../application/use-case/create-category.usecase";
import {FindAllCategoriesUseCase} from "../application/use-case/find-all-categories.usecase";
import {FindOneCategoryUseCase} from "../application/use-case/find-one-category.usecase";
import {RemoveCategoryUseCase} from "../application/use-case/remove-category.usecase";
import {UpdateCategoryUseCase} from "../application/use-case/update-category.usecase";
import {CATEGORY_REPOSITORY} from "../domain/ports/category.repository.port";
import {CategoryService} from "../domain/services/category.service";
import {CategoryController} from "../interface/category.controller";
import {CategoryDbEntity} from "./persistence/category.db.entity";
import {TypeormCategoryRepository} from "./persistence/typeorm-category.repository";

@Module({
    imports: [TypeOrmModule.forFeature([CategoryDbEntity])],
    providers: [
        {
            provide: CATEGORY_REPOSITORY, useClass: TypeormCategoryRepository
        },
        {
            provide: CategoryService,
            useFactory: (repo: TypeormCategoryRepository) => new CategoryService(repo),
            inject: [CATEGORY_REPOSITORY]
        },
        {
            provide: CreateCategoryUseCase,
            useFactory: (service: CategoryService) => new CreateCategoryUseCase(service),
            inject: [CategoryService]
        },
        {
            provide: UpdateCategoryUseCase,
            useFactory: (service: CategoryService) => new UpdateCategoryUseCase(service),
            inject: [CategoryService]
        },
        {
            provide: RemoveCategoryUseCase,
            useFactory: (service: CategoryService) => new RemoveCategoryUseCase(service),
            inject: [CategoryService]
        },
        {
            provide: FindAllCategoriesUseCase,
            useFactory: (service: CategoryService) => new FindAllCategoriesUseCase(service),
            inject: [CategoryService]
        },
        {
            provide: FindOneCategoryUseCase,
            useFactory: (service: CategoryService) => new FindOneCategoryUseCase(service),
            inject: [CategoryService]
        },
    ],
    controllers: [CategoryController]
})
export class CategoryModule { }