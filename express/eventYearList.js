const express = require('express');
var db = require('./db');
const EventYearList = express.Router();

EventYearList.get("/", (req, res) => {
    const SELECT_ALL_YEARS_QUERY = `SELECT DISTINCT year(date) AS year from events`;
    db.query(SELECT_ALL_YEARS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

module.exports = EventYearList