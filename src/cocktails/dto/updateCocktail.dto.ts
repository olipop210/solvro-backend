//Dto do aktualizacji koktajlu. Tutaj składniki można modyfikować tylko przez ID.

import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCocktailDto {

    @ApiPropertyOptional({ example: 'Mojito' })
    name: string;

    @ApiPropertyOptional({ example: 'Muddle mint and lime, add rum...' })
    instruction: string;

    @ApiPropertyOptional({ example: 'A refreshing cocktail with mint and lime' })
    description: string;

    @ApiPropertyOptional({ example: 'Cocktail' })
    category: string;

    @ApiPropertyOptional({ example: true })
    alcoholic: boolean;

    @ApiPropertyOptional({ example: 'https://...' })
    photoURL: string;

    @ApiPropertyOptional({ type: [String], description: 'Connect existing ingredients by id' })
    IngredientsIDs?: string[];

    @ApiPropertyOptional({type: [String], description: 'Array of ingredient amounts. Required when Ingredients are provided' })
    IngredientAmounts?: string[];
}

export default UpdateCocktailDto;