const express = require('express');
const app = express();
const {menuresult, checkAccount, createAccount, loginAccount, createOrder, findOrders, compareOrder} = require('./modules/nedb')
const PORT = 7777
app.use(express.json())


// /api/order	POST	Sparar en kaffebeställning för en användare och returnerar en ETA-tid och ordernummer 
// (båda dessa kan slumpas) till frontend. Om ett användarnamn skickas med i beställningen ska ordern kopplas till 
// detta användarnamn i databasen. Ifall inget användarnamn skickas med så ska beställningen sparas som gäst.


// order: {andvändarnamn:  timestamp: ETA:(minuter)} , tidjustnu
// if tidjustnu > eta then done:true


const ETA = `${Math.floor(Math.random() * 20)} minutes`
console.log(ETA)

app.post('/api/order', async (request, response)=> {

    const credentials = request.body

    //IF GUEST
   
    //ändra


    const orderTime = new Date().toLocaleTimeString();
    const orderResults = await createOrder(credentials);
    const resObj = {order: orderResults, orderTime: orderTime}
    response.json(resObj)
    
 
    // 
})


// KLAR
// /api/order/:id	GET	Returnerar orderhistorik för en specifik användare

// skicka med en jämförelse i returneringen om en är klar
app.get('/api/order/:id', async (request, response)=> {
        const id = request.params.id;
        const findOrder = await findOrders(id)
        console.log(findOrder)
        for (let i = 0; i < findOrder.length; i++) {
            const singleOrder = findOrder[i];
            console.log(singleOrder)
            // skitkompliceradjämförlsefunktion(singleorder)

        }
        response.json(findOrder);
})

function skitkompliceradjämförlsefunktion(compareID) {
    const rightnow = new Date().toLocaleTimeString()
    if (compareID.ETA > rightnow ) {
     compareID.done = "done"
     return compareID
    }

// new Date().toLocaleTimeString()
//    if(!getOrder.hasOwnProperty("done")){
//        felxesupdatefunktion(getOrder)


}
































// /api/menu	GET	Returnerar en kaffemeny
app.get('/api/menu', async (request, response)=> {
    const menuResults = await menuresult();
    const resObj = {menu: menuResults}
    response.json(resObj)
    })
    


// /api/account/signup	POST	Skapar ett användarkonto
app.post('/api/account/signup', async (request, response)=> {
    const credentials = request.body
    const resObj = {}
    if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('username') && credentials.hasOwnProperty('password')) {
        const result = await checkAccount(credentials)
        if (result.length < 1) {
            const result = createAccount(credentials)
            resObj.message = "success"
            resObj.account = result
        } else {
            resObj.message = "Account already exists"
        }
    } else {
        resObj.message = "No valid credentials " 
    }
    response.json(resObj)
})


// /api/account/login	POST	Logga in
app.post('/api/account/login', async (request, response)=> {
    const credentials = request.body
    const resObj = {}
    if (credentials.hasOwnProperty('username') && credentials.hasOwnProperty('password')) {
        const result = await loginAccount(credentials)
        if (result.length > 0) {
            resObj.message = "Account successfully logged in!"
        } else  resObj.message = "Wrong username/password"
    } else {
        resObj.message = "No credentials BIFOGAT"
    }
    response.json(resObj)
})

function authenticate(){
    // GÖR EN AUTH FUNKTION
}

app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
    console.log("Listening to orders")
})
