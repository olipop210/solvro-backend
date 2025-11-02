import { ApiProperty } from '@nestjs/swagger';

//Dto do tworzenia składnika.

export class CreateIngredientDto {

    @ApiProperty({ example: 'Lime' })
    name: string;

    @ApiProperty({ example: 'Fresh lime juice' })
    description: string;

    @ApiProperty({ example: false })
    isAlcohol: boolean;

    @ApiProperty({ example: 'https://...' })
    photoURL: string;
}