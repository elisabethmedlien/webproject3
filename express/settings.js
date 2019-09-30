const express = require("express");
var db = require("./db");
const settings = express.Router();

settings.get("/", (req, res) => {
  const SELECT_QUERY = `
    SELECT anniversary, status
    FROM status WHERE id = '1'
  `;
  db.query(SELECT_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

settings.post("/updateStatus", (req, res) => {
  const { status } = req.body;
  let UPDATE_QUERY = `
  UPDATE status
  SET 
    status = '${status}'
    `;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

settings.post("/updateAnniversary", (req, res) => {
  const { anniversary } = req.body;
  let UPDATE_QUERY = `
  UPDATE status
  SET 
    anniversary = '${anniversary}'
    `;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

module.exports = settings;
