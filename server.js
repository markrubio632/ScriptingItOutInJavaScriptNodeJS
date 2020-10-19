//pseudo controller  -reference article

/* var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/'); */

import express  from 'express';
import {ReturnUser } from './src/Functions.js';
import bodyParser from 'body-parser';
var con = express();

con.use(bodyParser.json());

con.get('/', function (req, res){
    console.log("got a GET request");
    res.send(req.body.id);
})

var server = con.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("con is listening at http://%s:%s", host, port)
})