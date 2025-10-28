import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Article} from "../../domain/entities/article.entity";
import {ArticleRepositoryPort} from "../../domain/port/article.repository.port";
import {ArticleDbEntity} from "./article.db.entity";

@Injectable()
export class TypeormArticleRepository implements ArticleRepositoryPort {
    constructor(@InjectRepository(ArticleDbEntity) private ormRepo: Repository<ArticleDbEntity>) { }
    async findById(id: number): Promise<Article | null> {
        const article = await this.ormRepo.findOneBy({id})
        if (!article) throw new Error("Article not found")
        return article
    }
    async findAll(): Promise<Article[]> {
        return this.ormRepo.find({where: {}})
    }
    async create(article: Omit<Article, "id">): Promise<Article> {
        return this.ormRepo.save(article)
    }
    async update(id: number, article: Partial<Omit<Article, "id">>): Promise<Article> {
        await this.ormRepo.update(id, article)
        return this.findById(id)
    }
    async remove(id: number): Promise<void> {
        await this.ormRepo.delete(id)
    }
}