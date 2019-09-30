const express = require("express");
var db = require("./db");
const programme = express.Router();

programme.get("/", (req, res) => {
  const {year} = req.query

  let SELECT = `
    SELECT 
      events.id, 
      events.title, 
      events.time, 
      events.payment_link, 
      DATE_FORMAT(events.date, '%Y-%m-%d') as date,
      events.price, 
      events.v_id, 
      venues.address 
    FROM events, venues 
    WHERE venues.id = events.v_id AND YEAR(events.date) = ${year} ORDER BY events.date`;

  db.query(SELECT, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  })
})

programme.post('/update', (req, res) => {
  const {id, title, time, date, price, venue} = req.body

  let UPDATE = `
    UPDATE events
    SET 
      title = '${title}', 
      time =  '${time}',
      date = '${date}', 
      price = ${price}, 
      v_id = ${venue}
    WHERE id = ${id}
  `
  db.query(UPDATE, (err, results) => {
    if (err) res.send(err);
    return res.json(results);
  });
})

module.exports = programme;