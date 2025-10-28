import {CategoryService} from "../../domain/services/category.service";
import {UpdateCategoryDto} from "../dto/update-category.dto";

export class UpdateCategoryUseCase {
    constructor(private categoryService: CategoryService) { }

    execute(id: number, dto: UpdateCategoryDto) {
        return this.categoryService.update(id, dto)
    }
}