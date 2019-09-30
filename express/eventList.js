//Gets list of events that can be deleted and updated in admin panel
const express = require("express");
var db = require("./db");
const eventList = express.Router();

//Gets all events in a given year
eventList.get("/", (req, res) => {
  const { year } = req.query;
  let SELECT_ALL_EVENTS_QUERY;
  if (year) {
    SELECT_ALL_EVENTS_QUERY = `SELECT * FROM events WHERE year(date)='${year}' ORDER BY id DESC`;
  } else {
    SELECT_ALL_EVENTS_QUERY = `SELECT * FROM events WHERE year(date)=(SELECT MAX(year(date)) FROM events) ORDER BY id DESC`;
  }

  db.query(SELECT_ALL_EVENTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

module.exports = eventList;
