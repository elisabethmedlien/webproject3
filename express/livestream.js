const express = require("express");
var db = require("./db");
const livestream = express.Router();

//Gets the YouTube API KEY  and YT channel id from table general in db
livestream.get("/", (req, res) => {
  let SELECT_QUERY = `SELECT id, livestream_id, YouTube_API_KEY FROM general`;

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

// updates the API KEy and youtube channel id in table general
livestream.post("/update", (req, res) => {
  let { livestream_id, YouTube_API_KEY } = req.body;
  let UPDATE_QUERY = `
  UPDATE general
  SET 
    livestream_id = '${livestream_id}',
    YouTube_API_KEY = '${YouTube_API_KEY}'`;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

module.exports = livestream;
