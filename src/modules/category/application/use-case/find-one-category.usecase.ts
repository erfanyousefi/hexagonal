import {CategoryService} from "../../domain/services/category.service";

export class FindOneCategoryUseCase {
    constructor(private categoryService: CategoryService) { }

    execute(id: number) {
        return this.categoryService.findOne(id)
    }
}