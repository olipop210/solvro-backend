import { Prisma } from "generated/prisma";

export const sortingDictionary = {
    'name_asc':  { name: 'asc' } as Prisma.CocktailOrderByWithRelationInput,
    'name_desc': { name: 'desc' } as Prisma.CocktailOrderByWithRelationInput,
    'createdAt_asc': { createdAt: 'asc' } as Prisma.CocktailOrderByWithRelationInput,
    'createdAt_desc': { createdAt: 'desc' } as Prisma.CocktailOrderByWithRelationInput,
    'category_asc': { category: 'asc' } as Prisma.CocktailOrderByWithRelationInput,
    'category_desc': { category: 'desc' } as Prisma.CocktailOrderByWithRelationInput,
    'ingredientsCount_asc': { Ingredients: { _count: 'asc' } } as Prisma.CocktailOrderByWithRelationInput,
    'ingredientsCount_desc': { Ingredients: { _count: 'desc' } } as Prisma.CocktailOrderByWithRelationInput,
}

export enum SortingOptions {
    NAME_ASC = 'name_asc',
    NAME_DESC = 'name_desc',
    CREATEDAT_ASC = 'createdAt_asc',
    CREATEDAT_DESC = 'createdAt_desc',
    CATEGORY_ASC = 'category_asc',
    CATEGORY_DESC = 'category_desc',
    INGREDIENTSCOUNT_ASC = 'ingredientsCount_asc',
    INGREDIENTSCOUNT_DESC = 'ingredientsCount_desc',
}