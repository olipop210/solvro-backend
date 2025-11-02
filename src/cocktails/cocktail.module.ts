import { Module } from "@nestjs/common";
import { CocktailsController } from "./cocktails.controller";
import { CocktailsService } from "./cocktail.service";
import { PrismaService } from "src/prisma.service";

@Module({
    imports: [],
    controllers: [CocktailsController],
    providers: [CocktailsService, PrismaService],
})
export class CocktailsModule {}