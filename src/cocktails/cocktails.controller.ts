import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { Cocktail, Prisma } from "generated/prisma";
import { CocktailsService } from "./cocktail.service";
import { ApiBody, ApiQuery, ApiResponse } from "@nestjs/swagger";
import CreateCocktailDto from './dto/createCocktail.dto';
import { CocktailClass } from "./entities/cocktail.entity";
import UpdateCocktailDto from "./dto/updateCocktail.dto";
import { sortingDictionary, SortingOptions } from "./interfaces/sortingDictionary";

//kontroler koktajli, razem z opisami do Swaggera

@Controller('cocktails')
export class CocktailsController {

    constructor(private readonly cocktailsService: CocktailsService) {}

    @Get()
    @ApiQuery({ name: 'perPage', required: false, type: Number })
    @ApiQuery({ name: 'page', required: false, type: Number })
    @ApiQuery({ name: 'name', required: false, type: String })
    @ApiQuery({ name: 'category', required: false, type: String })
    @ApiQuery({ name: 'alcoholic', required: false, type: Boolean })
    @ApiQuery({name: 'withIngredients', required: false, type: Boolean, description: 'Whether to include ingredients in the response', example: false, default: false})
    @ApiQuery({ name: 'orderBy', required: false, enum: SortingOptions, description: 'Sorting order. Possible values: name_asc, name_desc, createdAt_asc, createdAt_desc', example: 'name_asc', default: 'name_asc' })
    @ApiResponse({ status: 200, description: 'List of cocktails', type: [CocktailClass] })
    async getCocktails(
        @Query('perPage') perPage?: number, 
        @Query('page') page?: number,
        @Query('name') name?: string,
        @Query('category') category?: string,
        @Query('alcoholic') alcoholic?: boolean,
        @Query('withIngredients') withIngredients?: boolean,
        @Query('orderBy') orderBy?: SortingOptions,
    ): Promise<Cocktail[]> {
        console.log('withIngredients:', withIngredients);
        const key = orderBy ?? 'name_asc';
        const newOrderby = sortingDictionary[key as keyof typeof sortingDictionary] ?? sortingDictionary['name_asc'];
        console.log('orderBy key:', key, 'resolved:', newOrderby);
        return this.cocktailsService.cocktails({
            take: perPage ? Number(perPage) : 30,
            skip: (page ? page : 1 - 1) * (perPage ? perPage : 30),
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
                category: {
                    contains: category,
                    mode: 'insensitive',
                },
                alcoholic: alcoholic == undefined ? undefined : Boolean(alcoholic),
            },
            includeIngredients: Boolean(withIngredients),
            orderBy: newOrderby,
        });
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Cocktail details', type: CocktailClass })
    async getCocktail(@Param('id') id: string): Promise<Cocktail | null> {
        try {
            return this.cocktailsService.cocktail({ id: id });
        }
        catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'This is a custom message',
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }
    }

    @Post()
    @ApiBody({ type: CreateCocktailDto })
    @ApiResponse({ status: 200, description: 'Created cocktail', type: CocktailClass })
    async createCocktail(@Body() data: CreateCocktailDto): Promise<Cocktail> {
        return this.cocktailsService.createCocktail(data as unknown as Prisma.CocktailCreateInput);
    }

    @Put(':id')
    @ApiBody({ type: UpdateCocktailDto })
    @ApiResponse({ status: 200, description: 'Updated cocktail', type: CocktailClass })
    async updateCocktail(@Param('id') id: string, @Body() data: UpdateCocktailDto): Promise<Cocktail> {
        return this.cocktailsService.updateCocktail({ where: { id }, data: data as unknown as Prisma.CocktailUpdateInput });
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Deleted cocktail', type: CocktailClass })
    async deleteCocktail(@Param('id') id: string): Promise<Cocktail> {
        return this.cocktailsService.deleteCocktail({ id });
    }
}