const express = require('express');
var db = require('./db');
const newsArticle = express.Router();

newsArticle.get("/", (req, res) => {
    const { id } = req.query;
    const SELECT_NEWSDATA_QUERY = `SELECT id, title, text, date FROM posts WHERE id='${id}'`;
    db.query(SELECT_NEWSDATA_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});

module.exports = newsArticle