import { ApiProperty } from "@nestjs/swagger";
import { Cocktail } from "generated/prisma";

// Entity reprezentująca koktajl w bazie danych

export class CocktailClass implements Cocktail {
    @ApiProperty({description: 'Unique identifier', example: '644a1f...' })
    id: string;
    @ApiProperty({description: 'Cocktail name', example: 'Mojito' })
    name: string;
    @ApiProperty({description: 'Cocktail category', example: 'Cocktail' })
    category: string;
    @ApiProperty({description: 'Is the cocktail alcoholic?', example: true })
    alcoholic: boolean;
    @ApiProperty({description: 'Cocktail instructions', example: 'Mix ingredients' })
    instruction: string;
    @ApiProperty({description: 'Cocktail description', example: 'A refreshing mint cocktail' })
    description: string;
    @ApiProperty({description: 'Cocktail photo URL', example: 'https://example.com/photo.jpg' })
    photoURL: string;

    @ApiProperty({description: 'Creation date', example: '2023-04-25T12:34:56.789Z' })
    createdAt: Date;

    @ApiProperty({description: 'Ingredient amounts', example: ['50ml', '100ml'] })
    IngredientAmounts: string[];
    @ApiProperty({description: 'Ingredient IDs', example: ['644a1f...', '644a1f...'] })
    IngredientsIDs: string[];
    @ApiProperty({description: 'Ingredients', example: [{ id: '644a1f...', name: 'Mint' }] })
    Ingredients?: any[];
}