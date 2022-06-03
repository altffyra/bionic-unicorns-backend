// /api/menu	GET	Returnerar en kaffemeny (se bifogad json nedanför)
// /api/order	POST	Sparar en kaffebeställning för en användare och returnerar en ETA-tid och ordernummer (båda dessa kan slumpas) till frontend. Om ett användarnamn skickas med i beställningen ska ordern kopplas till detta användarnamn i databasen. Ifall inget användarnamn skickas med så ska beställningen sparas som gäst.
// /api/order/:id	GET	Returnerar orderhistorik för en specifik användare
// /api/account/signup	POST	Skapar ett användarkonto
// /api/account/login	POST	Logga in

const express = require('express');
const app = express();

