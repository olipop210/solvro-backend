import { Prisma } from "generated/prisma";

const sortingDictionary = {
    name_asc:  {name: 'asc' }  as Prisma.CocktailOrderByWithRelationInput,
    isAlcohol_asc: { isAlcohol: 'asc' } as Prisma.CocktailOrderByWithRelationInput,
    name_desc: { name: 'desc' } as Prisma.CocktailOrderByWithRelationInput,
    isAlcohol_desc: { isAlcohol: 'desc' } as Prisma.CocktailOrderByWithRelationInput,
};

enum SortingOptions {
    name_asc = 'name_asc',
    isAlcohol_asc = 'isAlcohol_asc',
    name_desc = 'name_desc',
    isAlcohol_desc = 'isAlcohol_desc',
}

export { sortingDictionary, SortingOptions };
