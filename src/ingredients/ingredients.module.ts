import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { IngredientsController } from "./ingredients.controller";
import { IngredientsService } from "./ingredients.service";

@Module({
    imports: [],
    controllers: [IngredientsController],
    providers: [PrismaService, IngredientsService],
})
export class IngredientsModule {}