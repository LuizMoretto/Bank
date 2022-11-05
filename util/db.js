const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'bank',
    multipleStatements: true
});

db.connect((error) => {
    if(error){
        throw error;
    }
});

global.db = db;

module.exports = db;