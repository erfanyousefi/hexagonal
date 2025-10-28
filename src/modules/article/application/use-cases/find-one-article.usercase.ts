import {Injectable} from "@nestjs/common";
import {ArticleService} from "../../domain/service/article.service";

@Injectable()
export class FindOneArticleUseCase {
    constructor(private service: ArticleService) { }
    async execute(id: number) {
        return this.service.findOne(id);
    }
}
