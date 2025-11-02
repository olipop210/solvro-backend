
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Opis

Rozwiązanie zadania rekrutacyjnego do KN Solvro dla sekcji backend. Oparte na technologii [Nest](https://github.com/nestjs/nest). W formularzu pisałem że jej nie znam, więc uznałem że polecę na żywca i zobaczymy co z tego będzie. Baza danych to mongoDB. Jest proste filtrownanie i sortowanie, brakuje wychwytywania błędów (coś nie mogłem ogarnąć jak to się pisze, jakbym miał chwilę więcej to pewnie bym to dopisał). 

## Project setup

```bash
$ npm install
$ npx prisma generate
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Dokumentacja

Dokumentacja została wygenerowana za pomocną wbudowanego w Nesta generatora openAPI, i jest dostępna pod scieżką /api po uruchomieniu projektu

## Projekt bazy danych 

Baza jest w mongoDB i wygląda tak: 

<img width="1328" height="880" alt="solvro-backend" src="https://github.com/user-attachments/assets/b41fff2b-8d85-4997-b409-a16cbce5894d" />
