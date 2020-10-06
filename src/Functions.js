
//main page to handle functions

const u = require('./User');

var idIncrementer = 0;

//2 test users
var emptyUser = new u.User(++idIncrementer, 'jeeves', 'jj', 'jeeves@gmail.com', 'admin');
var me = new u.User(++idIncrementer, 'mark', 'rubio', 'mark@gmail.com', 'loser');

var userList = [];
userList.push(emptyUser);
userList.push(me);

console.log(userList);
