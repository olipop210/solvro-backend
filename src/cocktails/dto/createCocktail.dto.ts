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

export class CreateIngredientNestedDto {

    @ApiPropertyOptional({ example: '644a1f...' })
    id?: string;

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