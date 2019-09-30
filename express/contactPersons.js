// contactPersons
const express = require("express");
var db = require("./db");
const contactPersons = express.Router();
const fileUpload = require("express-fileupload");
const fs = require("fs");

contactPersons.use(fileUpload());

// getting contact person data
contactPersons.get("/", (req, res) => {
  const SELECT_QUERY = "SELECT * FROM contact_persons";
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

// updating contact persons
contactPersons.post("/update", (req, res) => {
  let imgFile = req.body.img;
  let { id, name, email, role, phone } = req.body;
  let UPDATE_QUERY = `UPDATE contact_persons 
    SET 
      name = '${name}',
      email='${email}',
      role='${role}',
      phone='${phone}'
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
        let buf = Buffer.from(imgFile.substring(23), "base64"); // Ta-da imgFile.mv(

        fs.writeFile(
          `${__dirname}/../react-app/src/uploadedImg/contactPersonImg/${id}`,
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

module.exports = contactPersons;
