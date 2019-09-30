const express = require("express");
var db = require("./db");
const event = express.Router();
const fileUpload = require("express-fileupload");
var fs = require("fs");

event.use(fileUpload());
// get data for events
event.get("/", (req, res) => {
  const { id } = req.query;
  const SELECT_EVENTDATA_QUERY = `SELECT events.id, events.title, events.text, events.time, events.price, DATE_FORMAT(events.date, '%d-%m-%y') AS date, venues.address, events.payment_link, events.youtube_link FROM events, venues where venues.id=events.v_id AND events.id='${id}' `;
  db.query(SELECT_EVENTDATA_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
// add event
event.post("/add", (req, res) => {
  const INSERT_QUERY = `
      INSERT INTO events (title, text, time, date, price, youtube_link, payment_link, v_id, livestream) 
      VALUES ('${req.body.title}', '${req.body.text}', '${req.body.time}', '${
    req.body.date
  }', ${req.body.price}, '${req.body.youtube_link}', '${
    req.body.payment_link
  }', '${req.body.venue}', '${req.body.livestream}' )`;
  db.query(INSERT_QUERY, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send("Database not updated");
    } else {
      let imgFile = req.body.img;
      let buf = Buffer.from(imgFile.substring(23), "base64");
      fs.writeFile(
        `${__dirname}/../react-app/src/uploadedImg/eventImg/${
          results.insertId
        }`,
        buf,
        function(err) {
          if (err) {
            return console.log(err);
          }

          console.log("The file was saved!");
        }
      );
    }
  });
});
//deletes event from database, and the event image in the folder
event.post("/delete", (req, res) => {
  const { id } = req.body;

  const DELETE_QUERY = `DELETE FROM events WHERE id = ${id}`;
  db.query(DELETE_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      //delete the image from the folder
      fs.unlink("../react-app/src/uploadedImg/eventImg/" + req.body.id, err => {
        if (err) {
          console.log("image was not deleted");
        }
      });
      return res.json(results);
    }
  });
});
// update event
event.post("/update", (req, res) => {
  let {
    id,
    title,
    text,
    time,
    date,
    price,
    youtube_link,
    payment_link,
    livestream,
    v_id
  } = req.body;

  let UPDATE_QUERY = `UPDATE events 
    SET 
      title = '${title}',
      text='${text}',
      time='${time}',
      date='${date}',
      price='${price}',
      youtube_link='${youtube_link}',
      payment_link='${payment_link}',
      livestream='${livestream}',
      v_id='${v_id}'
    WHERE
      id = '${id}'
  `;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(400).send("Database not updated");
    } else {
      if (req.body.img !== "undefined") {
        let imgFile = req.body.img;
        let buf = Buffer.from(imgFile.substring(23), "base64");
        fs.writeFile(
          `${__dirname}/../react-app/src/uploadedImg/eventImg/${id}`,
          buf,
          function(err) {
            if (err) {
              return console.log(err);
            }

            console.log("The file was saved!");
          }
        );
      }
    }
  });
});

module.exports = event;
