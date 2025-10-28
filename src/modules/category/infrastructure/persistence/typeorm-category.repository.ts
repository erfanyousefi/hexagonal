import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Category} from "../../domain/entities/Category.entity";
import {CategoryRepositoryPort} from "../../domain/ports/category.repository.port";
import {CategoryDbEntity} from "./category.db.entity";

@Injectable()
export class TypeormCategoryRepository implements CategoryRepositoryPort {
    constructor(@InjectRepository(CategoryDbEntity) private ormRepo: Repository<CategoryDbEntity>) { }
    async create(dto: Omit<Category, "id">): Promise<Category> {
        const saved = await this.ormRepo.save(dto)
        return new Category(saved.id, saved.title, saved.slug, saved.parentId)
    }
    async update(id: number, dto: Partial<Omit<Category, "id">>): Promise<Category> {
        await this.ormRepo.update(id, dto)
        const updated = await this.ormRepo.findOneBy({id})
        return new Category(updated.id, updated.title, updated.slug, updated.parentId);
    }
    async findAll(): Promise<Category[]> {
        return this.ormRepo.find({
            where: {}, select: {
                id: true,
                title: true,
                slug: true,
                parentId: true
            }
        })
    }
    async findById(id: number): Promise<Category | null> {
        const exists = await this.ormRepo.findOneBy({id})
        return exists ? new Category(exists.id, exists.title, exists.slug, exists.parentId) : null
    }
    async remove(id: number): Promise<void> {
        await this.ormRepo.delete(id)
    }

}