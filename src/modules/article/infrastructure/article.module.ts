import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CreateArticleUseCase} from "../application/use-cases/create-article.usercase";
import {FindAllArticleUseCase} from "../application/use-cases/find-all-article.usercase";
import {FindOneArticleUseCase} from "../application/use-cases/find-one-article.usercase";
import {RemoveArticleUseCase} from "../application/use-cases/remove-article.usercase";
import {UpdateArticleUseCase} from "../application/use-cases/update-article.usercase";
import {ARTICLE_REPOSITORY} from "../domain/port/article.repository.port";
import {S3_PORT, S3Port} from "../domain/port/s3.port";
import {ArticleService} from "../domain/service/article.service";
import {AwsS3Service} from "../domain/service/aws-s3.service";
import {ArticleDbEntity} from "./presistance/article.db.entity";
import {TypeormArticleRepository} from "./presistance/typeorm-article.repository";

@Module({
    imports: [TypeOrmModule.forFeature([ArticleDbEntity])],
    providers: [
        {provide: ARTICLE_REPOSITORY, useClass: TypeormArticleRepository},
        {provide: S3_PORT, useClass: AwsS3Service},
        {
            provide: ArticleService,
            useFactory: (repo: TypeormArticleRepository, s3Service: S3Port) => new ArticleService(repo, s3Service),
            inject: [ARTICLE_REPOSITORY, S3_PORT]
        },
        {
            provide: CreateArticleUseCase,
            useFactory: (service: ArticleService) => new CreateArticleUseCase(service),
            inject: [ArticleService]
        },
        {
            provide: UpdateArticleUseCase,
            useFactory: (service: ArticleService) => new UpdateArticleUseCase(service),
            inject: [ArticleService]
        },
        {
            provide: FindOneArticleUseCase,
            useFactory: (service: ArticleService) => new FindOneArticleUseCase(service),
            inject: [ArticleService]
        },
        {
            provide: FindAllArticleUseCase,
            useFactory: (service: ArticleService) => new FindAllArticleUseCase(service),
            inject: [ArticleService]
        },
        {
            provide: RemoveArticleUseCase,
            useFactory: (service: ArticleService) => new RemoveArticleUseCase(service),
            inject: [ArticleService]
        },

    ]
})
export class ArticleModule { }