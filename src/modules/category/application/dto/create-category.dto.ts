import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty()
    title: string
    @ApiProperty()
    slug: string
    @ApiPropertyOptional()
    parentId: number
}