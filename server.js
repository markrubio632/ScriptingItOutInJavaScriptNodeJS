//pseudo controller  -reference article

//modules installed - nodemon, express, body-parser, cookie-parser, multer 

import express from 'express';
import { AddUser, DeleteUser, ReturnUser, UpdateUser } from './src/Functions.js';
import bodyParser from 'body-parser';
import { User } from './src/User.js';

var con = express();

con.use(bodyParser.json());

con.get('/get', function (req, res) {
    console.log("got a GET request");
    ReturnUser(req.body.id).then(function (user){
        //res.send(user);
        res.json(user);
    }).catch((err) => setImmediate(() => {throw err;}))
    
})

con.post('/post', function (req, res){
    console.log('got a POST request');
    res.send(AddUser(req.body.userName, req.body.userPass, req.body.userEmail, req.body.userRole));
})

con.put('/put', function(req, res){
    console.log('got a PUT request');
    res.send(UpdateUser(req.body.userName, req.body.userPass, req.body.userEmail, req.body.userRole, req.body.userId))
})

con.delete('/delete', function (req, res){
    console.log('got a DELETE request');
    res.send(DeleteUser(req.body.userId));
})

var server = con.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("con is listening at http://%s:%s", host, port)
})