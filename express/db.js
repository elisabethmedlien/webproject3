const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'drammensacred'
})

db.connect((err) => {
    if (err) {
        return err;
    } else {
        console.log('You are connected to the database');
    }
});

module.exports = db;