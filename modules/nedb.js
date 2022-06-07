const nedb =  require('nedb-promise')
const userDatabase = new nedb({filename: 'userdatabase.db', autoload:true})
const orderDatabase = new nedb({filename: 'orderdatabase.db', autoload:true})
const menuDatabase = new nedb({filename: 'menuedatabase.db', autoload:true})


//MENU KLAR I MENUDATABASEN

function menuResult(){
const result = menuDatabase.find({})
return result
}

function checkAccount(credentials){
    const result = userDatabase.find({ $or: [ {email: credentials.email}, {username: credentials.username} ] })
    return result
}

function createAccount(credentials){
    const result = userDatabase.insert({ email: credentials.email , username: credentials.username, password: credentials.password })
    return result
}

function loginAccount(credentials){
    const result = userDatabase.find({$and: [{username: credentials.username}, {password: credentials.password}] })
    return result
}
function findOrders(credentials){
    const result = orderDatabase.find({username: credentials })
    return result

}

function compareOrder(credentials){
    const result = orderDatabase.find({_id: credentials.id})
    return result

}
function createOrder(credentials){
    const orderTime = new Date().toLocaleTimeString();

        const ETAnumber = Math.floor(Math.random() * 10)
        const newETA = new Date(orderTime.getTime() + ETAnumber*60000)


    const result = orderdatabase.insert({username: credentials.username, order: credentials.id, orderTime: orderTime, ETA: newETA })
    return result
}

module.exports = {menuResult, checkAccount, createAccount, loginAccount, createOrder, findOrders, compareOrder}
