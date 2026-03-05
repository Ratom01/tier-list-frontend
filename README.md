# Tier List Frontend

Ez a projekt egy Tier List alkalmazás frontend része, amely Angular keretrendszerrel készült, és egy Spring Boot backend API-val kommunikál.

Az egész projekt kinézete egy oldal alapján készült, ami a következő:

https://www.prydwen.gg/nikke/tier-list/ 

## Az alkalmazás célja, hogy a felhasználók:
- Megtekinthessék az összes karaktert
- Szűrhessék a karaktereket különböző tulajdonságok alapján
- Megjeleníthessék a karakterek rangsorolását (Story / Boss / PvP)
- Színkódolt tier rendszerben lássák az értékeléseket

## Használt technológiák
- Angular
- TypeScript
- RxJS
- HTML / CSS
- REST API kommunikáció (HttpClient)

## Fő funkciók

### Karakterlista
- Az összes karakter betöltése backendről
- Kép és név megjelenítése
- Rang vizuális megjelenítése színkódolással
  
### Szűrési rendszer
- A karakterek az alábbi tulajdonságok alapján szűrhetők:
- Ritkaság (Rarity)
- Elem típus (Element)
- Fegyvertípus (Rifle Type)
- Támadás típus (Attack Type)
- Burst típus
- Gyártó (Manufacturer)

A szűrőfeltételek query paraméterként vagy request body-ként kerülnek elküldésre a backend felé.

## Backend kapcsolat

Az alkalmazás a következő backend címmel kommunikál:

*http://localhost:8080*

A frontend indítása előtt a Spring Boot backend futtatása szükséges.

## Futatás

### Függőségek telepítése
*npm install*

### Fejlesztői szerver indítása
*ng serve*

Az alkalmazás elérhető lesz:

http://localhost:4200

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.


For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
