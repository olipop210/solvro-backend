import { Module } from "@nestjs/common";
import { CocktailsController } from "./cocktails.controller";
import { CocktailsService } from "./cocktail.service";
import { PrismaService } from "src/prisma.service";

// Moduł koktajli, zawiera kontroler i serwis koktajli

@Module({
    imports: [],
    controllers: [CocktailsController],
    providers: [CocktailsService, PrismaService],
})
export class CocktailsModule {}