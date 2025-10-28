import {CategoryService} from "../../domain/services/category.service";

export class RemoveCategoryUseCase {
    constructor(private categoryService: CategoryService) { }

    execute(id: number) {
        return this.categoryService.remove(id)
    }
}