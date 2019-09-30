// about.js
const express = require("express");
var db = require("./db");
const general = express.Router();

general.get("/", (req, res) => {
  let SELECT_QUERY =
    "SELECT id, pitch, dateHeader_txt, address, vision_txt, partner_txt_official, partner_txt_private, organization_txt FROM general";
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

general.post("/aboutUsUpdate", (req, res) => {
  let { vision_txt, organization_txt, address } = req.body;
  let UPDATE_QUERY = `
  UPDATE general
  SET 
    vision_txt = '${vision_txt}',
    organization_txt = '${organization_txt}',
    address = '${address}'`;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

general.post("/frontpageUpdate", (req, res) => {
  let { pitch, dateHeader_txt } = req.body;
  let UPDATE_QUERY = `
  UPDATE general
  SET 
    pitch = '${pitch}',
    dateHeader_txt = '${dateHeader_txt}'`;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

module.exports = general;
