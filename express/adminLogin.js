//This file handles login and logout for users

const express = require('express');
var db = require('./db');
const adminLogin = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

//Function that tries to log in the user
adminLogin.post("/", (req, res) => {
    console.log('du prøver å logge inn');
    const { email, password } = req.body
    const SELECT_USER_QUERY = `SELECT * FROM users WHERE email='${email}'`;//select all user info
    db.query(SELECT_USER_QUERY, (err, results) => {
        if (err) {
            return res.status(400).send("error in user login");//if error
        } else if (results.length == 0) {
            return res.status(400).send("user does not exist");//If user does not exists
        } else {
            bcrypt.compare(password, results[0].password, function (error, result) {//Check if password is correct
                if (error) {
                    return res.status(400).send("error in user login");//if error
                } else if (!result) {
                    console.log(result);
                    return res.status(400).send("passwords do not match");//If passwords do not match
                } else {
                    console.log('logg inn fungerer');
                    const JWTToken = jwt.sign({
                        email: results[0].email,
                        id: results[0].id
                    },
                        'secret',
                        {
                            expiresIn: '2h'
                        });
                    console.log(JWTToken);
                    res.send({ token: JWTToken });
                }
            });
        }
    });
});


module.exports = adminLogin