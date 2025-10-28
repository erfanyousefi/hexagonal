import {CategoryService} from "../../domain/services/category.service";

export class FindAllCategoriesUseCase {
    constructor(private categoryService: CategoryService) { }

    execute() {
        return this.categoryService.findAll()
    }
}