import {Injectable} from "@nestjs/common";
import {ArticleService} from "../../domain/service/article.service";
import {UpdateArticleDto} from "../dto/update-article.dto";

@Injectable()
export class UpdateArticleUseCase {
    constructor(private service: ArticleService) { }
    async execute(id: number, dto: UpdateArticleDto, file?: Express.Multer.File) {
        return this.service.update(id, dto, file);
    }
}
