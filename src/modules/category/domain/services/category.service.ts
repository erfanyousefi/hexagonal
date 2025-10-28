import {Inject} from "@nestjs/common";
import {Category} from "../entities/Category.entity";
import {CATEGORY_REPOSITORY, CategoryRepositoryPort} from "../ports/category.repository.port";

export class CategoryService {
    constructor(@Inject(CATEGORY_REPOSITORY) private repo: CategoryRepositoryPort) { }

    create(dto: Omit<Category, "id">) {
        const category = new Category(null, dto.title, dto.slug, dto.parentId)
        return this.repo.create(category)
    }
    findAll() {
        return this.repo.findAll()
    }
    async findOne(id: number) {
        const category = await this.repo.findById(id)
        if (!category) throw new Error("Category not found")
        return category
    }
    async update(id: number, dto: Partial<Omit<Category, "id">>) {
        await this.findOne(id)
        return this.repo.update(id, dto)
    }
    async remove(id: number) {
        await this.findOne(id)
        return this.repo.remove(id)
    }
}