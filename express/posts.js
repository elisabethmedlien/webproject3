//File that handles everything with posts
//Gets all data, adds new data, updates data, and deletes data
const express = require("express");
var db = require("./db");
const posts = express.Router();
const fileUpload = require("express-fileupload");
var fs = require("fs");

posts.use(fileUpload());
//gets data about the posts
posts.get("/", (req, res) => {
  const { year } = req.query;
  let SELECT_ALL_POSTS_QUERY;
  //If year is specified, get the posts from that year
  if (year) {
    SELECT_ALL_POSTS_QUERY = `SELECT id, title, text, date FROM posts WHERE year(date)='${year}' ORDER BY date DESC`;
  } else {
    //If year is not specified get the posts from the most recent year
    SELECT_ALL_POSTS_QUERY = `SELECT id, title, text, date FROM posts WHERE year(date)=(SELECT MAX(year(date)) FROM posts) ORDER BY date DESC`;
  }

  db.query(SELECT_ALL_POSTS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});
//Adds a new post(newsarticle)
posts.post("/add", (req, res) => {
  const INSERT_QUERY = `
      INSERT INTO posts (title, text, date) 
      VALUES ('${req.body.title}', '${req.body.text}', CURDATE())`;

  db.query(INSERT_QUERY, (err, results) => {
    if (err) {
      //if error
      console.log(err);
      return res.status(400).send("Database not updated");
    } else {
      let imgFile = req.body.img;
      let buf = Buffer.from(imgFile.substring(23), "base64");
      fs.writeFile(
        `${__dirname}/../react-app/src/uploadedImg/postImg/${results.insertId}`,
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
//Updates the post
posts.post("/update", (req, res) => {
  const { id, title, text } = req.body;
  console.log(req.body.img);

  const UPDATE_QUERY = `
      UPDATE posts
      SET title = '${title}', text = '${text}'
      WHERE id = '${id}'
    `;
  db.query(UPDATE_QUERY, (err, results) => {
    if (err) {
      return res.status(400).send("Database not updated");
    } else {
      if (req.body.img !== "undefined") {
        let imgFile = req.body.img;
        let buf = Buffer.from(imgFile.substring(23), "base64");
        fs.writeFile(
          `${__dirname}/../react-app/src/uploadedImg/postImg/${id}`,
          buf,
          function(err) {
            if (err) {
              return console.log(err);
            }

            console.log("The file was saved!");
          }
        );
      } else {
        console.log("there is no image");
      }
    }
  });
});
//Deletes post
posts.post("/delete", (req, res) => {
  const { id } = req.body;
  const DELETE_QUERY = `DELETE FROM posts WHERE id = ${id}`;
  db.query(DELETE_QUERY, (err, results) => {
    //deletes post from database
    if (err) {
      return res.send(err);
    } else {
      //delete the image from the folder
      fs.unlink("../react-app/src/uploadedImg/postImg/" + req.body.id, err => {
        if (err) {
          console.log("image was not deleted");
        } else {
          console.log("image was deleted");
        }
      });
      return res.json(results);
    }
  });
});
module.exports = posts;
