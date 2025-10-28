import {Body, Controller, Param, ParseIntPipe, Post, Put, UploadedFile} from "@nestjs/common";
import {ApiConsumes} from "@nestjs/swagger";
import {CreateArticleDto} from "../application/dto/create-article.dto";
import {UpdateArticleDto} from "../application/dto/update-article.dto";
import {CreateArticleUseCase} from "../application/use-cases/create-article.usercase";
import {FindAllArticleUseCase} from "../application/use-cases/find-all-article.usercase";
import {FindOneArticleUseCase} from "../application/use-cases/find-one-article.usercase";
import {RemoveArticleUseCase} from "../application/use-cases/remove-article.usercase";
import {UpdateArticleUseCase} from "../application/use-cases/update-article.usercase";

@Controller("article")
export class ArticleController {
    constructor(
        private createArticleUseCase: CreateArticleUseCase,
        private updateArticleUseCase: UpdateArticleUseCase,
        private removeArticleUseCase: RemoveArticleUseCase,
        private findOneArticleUseCase: FindOneArticleUseCase,
        private findAllArticleUseCase: FindAllArticleUseCase
    ) { }

    @Post()
    @ApiConsumes("multipart/form-data")
    create(@Body() dto: CreateArticleDto, @UploadedFile() file: Express.Multer.File) {
        return this.createArticleUseCase.execute(dto, file)
    }
    @Put("/:id")
    @ApiConsumes("multipart/form-data")
    update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateArticleDto, @UploadedFile() file: Express.Multer.File) {
        return this.updateArticleUseCase.execute(id, dto, file)
    }
}
