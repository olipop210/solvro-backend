import { Injectable } from "@nestjs/common";
import { Prisma } from "generated/prisma";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class IngredientsService {
    constructor(private prisma: PrismaService) {}

    async getIngredients( params: {
        where?: Prisma.IngredientWhereInput
        orderBy?: Prisma.IngredientOrderByWithRelationInput
    }
        
    ) {
        return this.prisma.ingredient.findMany({
            where: params.where,
            orderBy: params.orderBy,
        });
    }

    async getIngredient(id: string) {
        return this.prisma.ingredient.findUnique({ where: { id } });
    }

    async createIngredient(data: Prisma.IngredientCreateInput) {
        return this.prisma.ingredient.create({ data });
    }

    async updateIngredient(id: string, data: Prisma.IngredientUpdateInput) {
        return this.prisma.ingredient.update({ where: { id }, data });
    }

    async deleteIngredient(id: string) {
        return this.prisma.ingredient.delete({ where: { id } });
    }
}