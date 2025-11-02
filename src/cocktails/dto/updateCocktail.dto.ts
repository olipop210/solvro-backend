/**
 * Manual lightweight implementation of the Cocktail create input shape.
 *
 * This mirrors the relevant parts of Prisma's generated `CocktailCreateInput` type
 * but is defined here as plain TypeScript interfaces so it can be used at runtime
 * (for DTOs, request typings, small helpers) without importing Prisma runtime values.
 *
 * Adjust fields as needed for your API shape. For nested ingredient creation we
 * allow either `IngredientsIDs` (connect existing ingredients by id) or
 * `Ingredients` (nested create objects).
 */

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateCocktailDto } from './createCocktail.dto';

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