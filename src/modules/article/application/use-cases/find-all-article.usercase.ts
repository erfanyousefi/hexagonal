import {Injectable} from "@nestjs/common";
import {ArticleService} from "../../domain/service/article.service";

@Injectable()
export class FindAllArticleUseCase {
    constructor(private service: ArticleService) { }
    async execute() {
        return this.service.findAll();
    }
}
