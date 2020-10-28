//pseudo controller  -reference article

//modules installed - nodemon, express, body-parser, cookie-parser, multer 

import express from 'express';
import { AddUser, DeleteUser, FindById, UpdateUser, FindAllUsers } from './src/Dao.js';
import bodyParser from 'body-parser';
import { User } from './src/User.js';
import { Login } from './src/Service.js';
import cors from "cors";

var con = express();
var userArray = FindAllUsers();

con.use(bodyParser.json());
con.use(cors(corsOptions));

var corsOptions ={
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

//Find a user
con.get('/get', function (req, res) {
    console.log("got a GET request");
    //finds a single user
    /* FindById(req.body.id).then(function (user){
        res.send(user);
    }).catch((err) => setImmediate(() => {throw err;})) */

    //finds all users
    /* FindAllUsers().then(function (result) {
        res.json(result);
    }).catch((err) => setImmediate(() => { throw err; })); */

    //THIS RETURNS BLANK ARRAY IN POSTMAN - REFINE FURTHER
    //var userArray = FindAllUsers();
    //console.log(userArray);
    res.json(userArray);
})

//new user
con.post('/post', function (req, res) {
    console.log('got a POST request');
    res.send(AddUser(req.body.userName, req.body.userPass, req.body.userEmail, req.body.userRole));
})

//update a user
con.put('/put', function (req, res) {
    console.log('got a PUT request');
    res.send(UpdateUser(req.body.userName, req.body.userPass, req.body.userEmail, req.body.userRole, req.body.userId))
})

//delete a user
con.delete('/delete', function (req, res) {
    console.log('got a DELETE request');
    res.send(DeleteUser(req.body.userId));
})

//used to establish the server
var server = con.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("con is listening at http://%s:%s", host, port)
})