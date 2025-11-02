import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cocktail, Prisma } from 'generated/prisma';

// Serwis do koktajli 

@Injectable()
export class CocktailsService {
  constructor(private prisma: PrismaService) {}

  async cocktail(
    cocktailWhereUniqueInput: Prisma.CocktailWhereUniqueInput,
  ): Promise<Cocktail | null> {
    const result = this.prisma.cocktail.findUnique({
      where: cocktailWhereUniqueInput,
      include: { Ingredients: true },
    });
    return result;
  }

  async cocktails(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CocktailWhereUniqueInput;
    where?: Prisma.CocktailWhereInput;
    orderBy?: Prisma.CocktailOrderByWithRelationInput;
    includeIngredients?: boolean;
  }): Promise<Cocktail[]> {
    const { skip, take, where, orderBy, includeIngredients } = params;
    console.log('includeIngredients:', includeIngredients);
    console.log('filters:', where);
    return this.prisma.cocktail.findMany({
      skip,
      take,
      where,
      orderBy,
      include: {
        Ingredients: Boolean(includeIngredients),
      },
    });
  }

  async createCocktail(data: Prisma.CocktailCreateInput): Promise<Cocktail> {
    return this.prisma.cocktail.create({
      data,
    });
  }

  async updateCocktail(params: {
    where: Prisma.CocktailWhereUniqueInput;
    data: Prisma.CocktailUpdateInput;
  }): Promise<Cocktail> {
    const { where, data } = params;
    return this.prisma.cocktail.update({
      data,
      where,
    });
  }

  async deleteCocktail(
    where: Prisma.CocktailWhereUniqueInput,
  ): Promise<Cocktail> {
    return this.prisma.cocktail.delete({
      where,
    });
  }
}
