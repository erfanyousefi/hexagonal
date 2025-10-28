import {Inject, Injectable} from "@nestjs/common";
import {Article} from "../entities/article.entity";
import {
    ARTICLE_REPOSITORY,
    ArticleRepositoryPort,
} from "../port/article.repository.port";
import {S3_PORT, S3Port} from "../port/s3.port";

@Injectable()
export class ArticleService {
    constructor(
        @Inject(ARTICLE_REPOSITORY) private repo: ArticleRepositoryPort,
        @Inject(S3_PORT) private s3Service: S3Port
    ) { }

    async create(dto: Omit<Article, "id">, file?: Express.Multer.File) {
        if (file) {
            const imageUrl = await this.s3Service.uploadFile(file, "article");
            dto.image = imageUrl;
        }
        return this.repo.create(dto);
    }
    async update(id: number, dto: Partial<Omit<Article, "id">>, file?: Express.Multer.File) {
        if (file) {
            const imageUrl = await this.s3Service.uploadFile(file, "article");
            dto.image = imageUrl;
        }
        await this.repo.update(id, dto);
        const updated = await this.findOne(id);
        return updated;
    }
    async findOne(id: number) {
        const existing = await this.repo.findById(id);
        if (!existing) throw new Error("Article not found");
        return existing;
    }
    async remove(id: number) {
        await this.repo.remove(id);
    }
    async findAll() {
        return this.repo.findAll();
    }
}
