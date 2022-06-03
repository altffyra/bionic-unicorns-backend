const nedb =  require('nedb-promise')
const userdatabase = new nedb({filename: 'userdatabase.db', autoload:true})
const orderdatabase = new nedb({filename: 'orderdatabase.db', autoload:true})
const menudatabase = new nedb({filename: 'menuedatabase.db', autoload:true})


//MENU KLAR I MENUDATABASEN

function menuresult(){
const result = menudatabase.find({})
return result
}




module.exports = {menuresult}
