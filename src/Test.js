//this will be the test file to ensure that Functions.js works

//to run - cd to the source file (Test.js is located in the source file)
//node Test.js

import { CreateTable, AddUser, UpdateUser, ReturnUser } from '../src/Functions.js';
import { User } from '../src/User.js';


//update user example
//UpdateUser('Beck', 'anderson', 'Beck@gmail.com', 'loser', 1);

//example to search for a user. console write is in the promise
var myuser = new User();
ReturnUser(1, myuser);