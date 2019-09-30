const express = require('express');
var db = require('./db');
const navbar = express.Router()

navbar.get('/', (req, res) => {
  let year = 2018
  let NAVBAR_SQL = `SELECT year FROM review ORDER BY year`

  db.query(NAVBAR_SQL, (err, results) => {
    if(err) throw err
    return res.json({ data: results })
  })
});

module.exports = navbar