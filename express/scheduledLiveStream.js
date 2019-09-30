const express = require("express");
var db = require("./db");
const scheduledLiveStream = express.Router();

scheduledLiveStream.get("/", (req, res) => {
  const SELECT_SCHEDULED_LIVE_STREAM_QUERY = `SELECT id, title, time, date FROM events where livestream=1 AND date >= CURDATE();`;
  db.query(SELECT_SCHEDULED_LIVE_STREAM_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

module.exports = scheduledLiveStream;
