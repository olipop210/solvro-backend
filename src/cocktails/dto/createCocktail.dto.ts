//Dto do tworzenia koktajlu. Można podać istniejące składniki przez ID lub zagnieżdżone tworzenie składników.

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateIngredientNestedDto {

    @ApiProperty({ example: 'Lime' })
    name: string;

    @ApiProperty({ example: 'Fresh lime juice' })
    description: string;

    @ApiProperty({ example: false })
    isAlcohol: boolean;

    @ApiProperty({ example: 'https://...' })
    photoURL: string;
}

export class CreateCocktailDto {

    @ApiProperty({ example: 'Mojito' })
    name: string;

    @ApiProperty({ example: 'Muddle mint and lime, add rum...' })
    instruction: string;

    @ApiProperty({ example: 'A refreshing cocktail with mint and lime' })
    description: string;

    @ApiProperty({ example: 'Cocktail' })
    category: string;

    @ApiProperty({ example: true })
    alcoholic: boolean;

    @ApiProperty({ example: 'https://...' })
    photoURL: string;

    @ApiPropertyOptional({ type: [String], description: 'Connect existing ingredients by id' })
    IngredientsIDs?: string[];

    @ApiPropertyOptional({type: [String], description: 'Array of ingredient amounts. Required when Ingredients are provided' })
    IngredientAmounts?: string[];

    @ApiPropertyOptional({ type: [CreateIngredientNestedDto], description: 'Nested create ingredients' })
    Ingredients?: CreateIngredientNestedDto[];
}

export default CreateCocktailDto;