import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {CreateCategoryDto} from "../application/dto/create-category.dto";
import {UpdateCategoryDto} from "../application/dto/update-category.dto";
import {CreateCategoryUseCase} from "../application/use-case/create-category.usecase";
import {FindAllCategoriesUseCase} from "../application/use-case/find-all-categories.usecase";
import {FindOneCategoryUseCase} from "../application/use-case/find-one-category.usecase";
import {RemoveCategoryUseCase} from "../application/use-case/remove-category.usecase";
import {UpdateCategoryUseCase} from "../application/use-case/update-category.usecase";

@Controller("/category")
export class CategoryController {
    constructor(
        private createCategory: CreateCategoryUseCase,
        private updateCategory: UpdateCategoryUseCase,
        private removeCategory: RemoveCategoryUseCase,
        private findAllCategory: FindAllCategoriesUseCase,
        private findOneCategory: FindOneCategoryUseCase,
    ) { }

    @Post()
    create(@Body() dto: CreateCategoryDto) {
        return this.createCategory.execute(dto)
    }
    @Get()
    findAllCategories() {
        return this.findAllCategory.execute()
    }
    @Get("/:id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.findOneCategory.execute(id)
    }
    @Put("/:id")
    update(@Param("id", ParseIntPipe) id: number, @Body() dto: UpdateCategoryDto) {
        return this.updateCategory.execute(id, dto)
    }
    @Delete("/:id")
    remove(@Param("id", ParseIntPipe) id: number) {
        return this.removeCategory.execute(id)
    }
}