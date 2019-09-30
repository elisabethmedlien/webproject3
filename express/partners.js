const express = require("express");
var db = require("./db");
const partners = express.Router();

// gets all the data from table partners
partners.get("/", (req, res) => {
  const SELECT_QUERY = "SELECT * FROM partners";
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

//  add new partner
partners.post("/add", (req, res) => {
  let { partner_name, type } = req.body;
  let INSERT_QUERY = `
        INSERT INTO 
          partners 
              (partner_name, type) 
          VALUES 
              ('${partner_name}', '${type}')
         `;
  db.query(INSERT_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

// updates the partner where id = ?
partners.post("/update", (req, res) => {
  let { id, partner_name, type } = req.body;
  let UPDATE_QUERY = `
      UPDATE partners
      SET 
        partner_name = '${partner_name}',
        type = '${type}'
      WHERE
          id = '${id}'`;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

//  delete partner
partners.post("/delete", (req, res) => {
  let { id } = req.body;
  let DELETE_QUERY = `DELETE FROM partners WHERE id = '${id}'`;
  db.query(DELETE_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

//  update official partner text
partners.post("/UpdateOfficialPartnerText", (req, res) => {
  let { partner_txt_official } = req.body;
  let UPDATE_QUERY = `
          UPDATE general 
          SET partner_txt_official ='${partner_txt_official}' 
          WHERE id = '1'`;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

//  update private partner text
partners.post("/UpdatePrivatePartnerText", (req, res) => {
  let { partner_txt_private } = req.body;
  let UPDATE_QUERY = `
            UPDATE general 
            SET partner_txt_private ='${partner_txt_private}' 
            WHERE id = '1'`;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

module.exports = partners;
