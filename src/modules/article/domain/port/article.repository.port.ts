import {Article} from "../entities/article.entity";

export interface ArticleRepositoryPort {
    findById(id: number): Promise<Article | null>
    findAll(): Promise<Article[]>
    create(article: Omit<Article, "id">): Promise<Article>
    update(id: number, article: Partial<Omit<Article, "id">>): Promise<Article>
    remove(id: number): Promise<void>
}
export const ARTICLE_REPOSITORY = Symbol("ARTICLE_REPOSITORY")