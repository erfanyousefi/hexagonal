import {ApiProperty} from "@nestjs/swagger";

export class CreateArticleDto {
    @ApiProperty()
    title: string
    @ApiProperty()
    slug: string
    @ApiProperty()
    content: string
    @ApiProperty()
    author: string
    @ApiProperty({format: "binary"})
    image: string
    createdAt: Date
}