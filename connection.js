var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'shaileshk@dwise',
    database: 'sys'
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('connected...');
});

module.exports = connection;