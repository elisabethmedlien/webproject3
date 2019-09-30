const express = require("express");
var db = require("./db");
const festivalreports = express.Router();

// gselects all the data from festival_reports table
festivalreports.get("/", (req, res) => {
  let SELECT_QUERY = "SELECT * FROM festival_reports";
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

// updates the festivalreport where id = ?
festivalreports.post("/update", (req, res) => {
  let { id, title, link, language } = req.body;
  let UPDATE_QUERY = `
    UPDATE festival_reports
    SET 
      title = '${title}',
      link = '${link}',
      language = '${language}'
    WHERE
        id = '${id}'`;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

//  add new festivalreport
festivalreports.post("/add", (req, res) => {
  let { title, link, language } = req.body;
  let INSERT_QUERY = `
      INSERT INTO 
        festival_reports 
            (title, link, language) 
        VALUES 
            ('${title}', '${link}', '${language}')
       `;
  db.query(INSERT_QUERY, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
});

//  delete festivalreport
festivalreports.post("/delete", (req, res) => {
  let { id } = req.body;
  let DELETE_QUERY = `DELETE FROM festival_reports WHERE id = '${id}'`;
  db.query(DELETE_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

module.exports = festivalreports;
