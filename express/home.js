const express = require('express')
var db = require('./db')
const home = express.Router()

//Gets all home in a given year
home.get("/", (req, res) => {
  const QUERY = `
    SELECT 
      general.pitch, 
      general.dateHeader_txt, 
      general.inactiveHeader_txt, 
      status.anniversary, 
      status.status 
    FROM general, status 
    WHERE general.id = status.id`;

  db.query(QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else{
      return res.json({
        data: results
      })
    }
  })
})

home.get("/latestReview", (req, res) => {
  const QUERY = `
    SELECT DISTINCT MAX(year) AS year
    FROM review
  `
  db.query(QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else{
      return res.json(results)
    }
  })
})

module.exports = home