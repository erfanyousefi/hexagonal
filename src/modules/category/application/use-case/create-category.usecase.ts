import {CategoryService} from "../../domain/services/category.service";
import {CreateCategoryDto} from "../dto/create-category.dto";

export class CreateCategoryUseCase {
    constructor(private categoryService: CategoryService) {
    }
    execute(dto: CreateCategoryDto) {
        return this.categoryService.create(dto)
    }
}