import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CocktailsController } from './cocktails/cocktails.controller';
import { CocktailsService } from './cocktails/cocktail.service';
import { CocktailsModule } from './cocktails/cocktail.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,}), CocktailsModule, IngredientsModule],
  controllers: [],
  providers: [],

})
export class AppModule {}
