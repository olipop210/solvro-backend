import { Body, Controller, Get, Param, Post, Delete, Put, Query } from "@nestjs/common";
import { IngredientsService } from "./ingredients.service";
import { Prisma } from "generated/prisma";
import { ApiBody, ApiQuery, ApiResponse } from "@nestjs/swagger";
import { CreateIngredientDto } from "./dto/createIngredient.dto";
import { sortingDictionary, SortingOptions } from "./interfaces/sortingDictionary";
import { IngredientClass } from "./entities/ingredient.entity";

//kontroler składników, razem z opisami do Swaggera

@Controller('ingredients')
export class IngredientsController {
    constructor(private readonly ingredientsService: IngredientsService) {}

    @Get()
    @ApiQuery({ name: 'name', required: false, type: String })
    @ApiQuery({ name: 'isAlcohol', required: false, type: Boolean })
    @ApiQuery({name: 'orderBy', required: false, enum: SortingOptions, description: 'Sorting order. Possible values: name_asc, name_desc, isAlcohol_asc, isAlcohol_desc', example: 'name_asc', default: 'name_asc'})
    @ApiResponse({ status: 200, description: 'List of ingredients', type: [IngredientClass] })
    async getIngredients(
        @Query('name') name?: string,
        @Query('isAlcohol') isAlcohol?: boolean,
        @Query('orderBy') orderBy?: SortingOptions,
    ) {
        return this.ingredientsService.getIngredients({
            where: {
                name: name ? {
                contains: name,
                mode: 'insensitive',
            } : undefined,
            isAlcohol: isAlcohol == undefined ? undefined : Boolean(isAlcohol),
            },
            orderBy: sortingDictionary[orderBy as keyof typeof sortingDictionary] ?? sortingDictionary['name_asc'],
        });
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Ingredient details', type: IngredientClass })
    async getIngredient(@Param('id') id: string) {
        return this.ingredientsService.getIngredient(id);
    }

    @Post()
    @ApiBody({type: CreateIngredientDto})
    @ApiResponse({ status: 200, description: 'Ingredient details', type: IngredientClass })
    async createIngredient(@Body() data: CreateIngredientDto) {
        return this.ingredientsService.createIngredient(data as Prisma.IngredientCreateInput);
    }

    @Put(':id')
    @ApiBody({type: CreateIngredientDto})
    @ApiResponse({ status: 200, description: 'Updated ingredient', type: IngredientClass })
    async updateIngredient(@Param('id') id: string, @Body() data: Prisma.IngredientUpdateInput) {
        return this.ingredientsService.updateIngredient(id, data);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Deleted ingredient', type: IngredientClass })
    async deleteIngredient(@Param('id') id: string) {
        return this.ingredientsService.deleteIngredient(id);
    }
}