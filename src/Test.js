//this will be the test file to ensure that Functions.js works

//to run - cd to the source file (Test.js is located in the source file)
//node Test.js

import { CreateTable, AddUser, FindUserById, UpdateUser } from '../src/Functions.js';
import { User } from '../src/User.js';
import { ArrayPusher } from "../src/Validation.js";

var List = [];

/* var testUser = new User(0, 'Mark', 'Rubio', 'jeeves@gmail.com', 'Admin');

CreateTable();
AddUser(testUser.userId, testUser.userName, testUser.userPass, testUser.userEmail, testUser.userRole);

var myUser = FindUserById(1);
console.log(myUser);

UpdateUser('jeeves', 'anderson', 'anderson@gmail.com', 'loser', 1); */

List = ArrayPusher();
console.log("list is: " + List.toString());