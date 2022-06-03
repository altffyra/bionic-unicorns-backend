const express = require('express');
const app = express();
const {menuresult} = require('./modules/nedb')
app.use(express.json())

function authenticate(){
    // GÖR EN AUTH FUNKTION
}


// /api/menu	GET	Returnerar en kaffemeny
app.get('/api/menu', async (request, response)=> {
const menuresults = await menuresult();
const resObj = {menu: menuresults}
response.json(resObj)
})

// /api/order	POST	Sparar en kaffebeställning för en användare och returnerar en ETA-tid och ordernummer 
// (båda dessa kan slumpas) till frontend. Om ett användarnamn skickas med i beställningen ska ordern kopplas till 
// detta användarnamn i databasen. Ifall inget användarnamn skickas med så ska beställningen sparas som gäst.
app.post('/api/order', async (request, response)=> {

    // new Date().toLocaleTimeString())
})

// /api/order/:id	GET	Returnerar orderhistorik för en specifik användare
app.get('/api/order/:id', async (request, response)=> {

})


// /api/account/signup	POST	Skapar ett användarkonto
app.post('/api/account/signup', async (request, response)=> {

})


// /api/account/login	POST	Logga in
app.post('/api/account/login', async (request, response)=> {

})


app.listen(7777, ()=>{
console.log("Listening to orders")
})
