const nedb =  require('nedb-promise')
const userdatabase = new nedb({filename: 'userdatabase.db', autoload:true})
const orderdatabase = new nedb({filename: 'orderdatabase.db', autoload:true})
const menudatabase = new nedb({filename: 'menudatabase.db', autoload:true})






// function firstpushmenu(){
// const result = menudatabase.()
// }


module.exports = {}
