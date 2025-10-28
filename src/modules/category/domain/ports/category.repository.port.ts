import {Category} from "../entities/Category.entity";

export interface CategoryRepositoryPort {
    create(dto: Omit<Category, "id">): Promise<Category>
    update(id: number, dto: Partial<Omit<Category, "id">>): Promise<Category>
    findAll(): Promise<Category[]>
    findById(id: number): Promise<Category | null>
    remove(id: number): Promise<void>
}
export const CATEGORY_REPOSITORY = Symbol("CATEGORY_REPOSITORY")