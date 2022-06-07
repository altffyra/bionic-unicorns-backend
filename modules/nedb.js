const nedb =  require('nedb-promise')
const userdatabase = new nedb({filename: 'userdatabase.db', autoload:true})
const orderdatabase = new nedb({filename: 'orderdatabase.db', autoload:true})
const menudatabase = new nedb({filename: 'menuedatabase.db', autoload:true})


//MENU KLAR I MENUDATABASEN

function menuresult(){
const result = menudatabase.find({})
return result
}

function checkaccount(credentials){
    const result = userdatabase.find({ $or: [ {email: credentials.email}, {username: credentials.username} ] })
    return result
}

function createaccount(credentials){
    const result = userdatabase.insert({ email: credentials.email , username: credentials.username, password: credentials.password })
    return result
}

function loginaccount(credentials){
    const result = userdatabase.find({$and: [{email: credentials.email} , {username: credentials.username}, {password: credentials.password}] })
    return result
}
function findOrders(credentials){
    const result = orderdatabase.find({id: credentials })
    return result
}


module.exports = {menuresult, checkaccount, createaccount, loginaccount, findOrders}
