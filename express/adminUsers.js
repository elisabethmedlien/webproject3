const express = require('express');
var db = require('./db');
const adminUsers = express.Router();
var bcrypt = require('bcryptjs');

//Gets all users, admin and publishers
adminUsers.get("/", (req, res) => {
    const SELECT_ALL_USERS_QUERY = `SELECT * FROM users`;
    db.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(results);
        }
    });
});
//creates a new user
adminUsers.post("/add", (req, res) => {
    const { name, email, type } = req.body

    bcrypt.genSalt(10, function (err, salt) {//hash the password
        bcrypt.hash(req.body.password, salt, (err, hash) => {//hash the password
            const password = hash;
            const INSERT_QUERY = `
            INSERT INTO users (name, email, password, type) 
            VALUES ('${name}', '${email}', '${password}', '${type}')`
            db.query(INSERT_QUERY, (err, results) => {//sends information about user to database
                if (err) {
                    return res.status(400).send("Database not updated");
                } else {
                    return res.json(results);
                }
            });
            if (err) {
                return res.status(400).send("Database not updated");
            }
        });
        if (err) {
            return res.status(400).send("Database not updated");
        }
    });
});
//Updates information about the user FIX
adminUsers.post("/update", (req, res) => {
    const { id, name, email, type } = req.body

    const UPDATE_QUERY = `
      UPDATE users 
      SET name = '${name}', email = '${email}', type='${type}'
      WHERE id = ${id}
    `
    db.query(UPDATE_QUERY, (err, results) => {
        if (err) {
            return res.status(400).send("Database not updated");
        } else {
            return res.json(results);
        }
    });

});
//Updates password of the user
adminUsers.post("/updatepwd", (req, res) => {
    const { id } = req.body
    bcrypt.genSalt(10, function (err, salt) {//hash the password
        bcrypt.hash(req.body.password, salt, (err, hash) => {//hash the password
            const password = hash;
            const UPDATE_QUERY = `UPDATE users SET password = '${password}' WHERE id = ${id}`
            db.query(UPDATE_QUERY, (err, results) => {//sends information to database
                if (err) {
                    return res.status(400).send("Database not updated");
                } else {
                    return res.json(results);
                }
            });
            if (err) {
                return res.status(400).send("Database not updated");
            }
        });
        if (err) {
            return res.status(400).send("Database not updated");
        }
    });

});
//Deletes a user from the system FIX-alle brukere kan ikke bli slettet. 
adminUsers.post("/delete", (req, res) => {
    const { id } = req.body
    const DELETE_QUERY = `DELETE FROM users WHERE id = ${id}`
    db.query(DELETE_QUERY, (err, results) => {
        if (err) {
            return res.status(400).send("Database not updated");
        } else {
            return res.json(results);
        }
    });
});

module.exports = adminUsers