//var mysql = require('mysql');
var mysql = require('promise-mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'practice'
})


module.exports = pool;
