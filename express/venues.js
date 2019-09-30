const express = require('express');
var db = require('./db');
const venues = express.Router();

venues.get("/", (req, res) => {

  const SELECT_QUERY = `
    SELECT id, address, capacity 
    FROM venues
  `
  db.query(SELECT_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

venues.post("/add", (req, res) => {
  const {address, capacity} = req.body

  const INSERT_QUERY = `
    INSERT INTO venues (address, capacity) 
    VALUES ('${address}', ${capacity})`
  db.query(INSERT_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

venues.post("/update", (req, res) => {
  const {id, address, capacity} = req.body

  const UPDATE_QUERY = `
    UPDATE venues 
    SET address = '${address}', capacity = ${capacity} 
    WHERE id = ${id}
  `
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    }else{
      return res.json()
    }
  });
 
});

venues.get("/delete", (req, res) => {
  const {id} = req.body

  const DELETE_QUERY = `DELETE FROM venues WHERE venues.id = ${id}`
  db.query(DELETE_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

module.exports = venues