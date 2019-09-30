const express = require("express");
var db = require("./db");
const contactAddress = express.Router();

const SELECT_ALL_CONTACT_ADDRESS_QUERY =
  "SELECT address FROM general";

contactAddress.get("/", (req, res) => {
  db.query(SELECT_ALL_CONTACT_ADDRESS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
})

module.exports = contactAddress;
