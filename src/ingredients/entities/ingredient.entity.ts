import { ApiProperty } from "@nestjs/swagger";

export class IngredientClass {

    @ApiProperty({description: 'Unique identifier', example: '644a1f...' })
    id: string;

    @ApiProperty({description: 'Name of the ingredient', example: 'Tomato' })
    name: string;

    @ApiProperty({description: 'Indicates if the ingredient is alcoholic', example: false })
    isAlcohol: boolean;

    @ApiProperty({description: 'Description of the ingredient', example: 'Fresh tomato' })
    description: string;

    @ApiProperty({description: 'URL of the ingredient photo', example: 'http://example.com/tomato.jpg' })
    photoURL: string;
}