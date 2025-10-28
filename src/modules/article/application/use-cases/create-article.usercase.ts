import {Injectable} from "@nestjs/common";
import {ArticleService} from "../../domain/service/article.service";
import {CreateArticleDto} from "../dto/create-article.dto";

@Injectable()
export class CreateArticleUseCase {
    constructor(private service: ArticleService) { }
    async execute(dto: CreateArticleDto, file?: Express.Multer.File) {
        return this.service.create(dto, file);
    }
}
