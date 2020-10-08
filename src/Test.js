//this will be the test file to ensure that Functions.js works

import { createTable, AddUser } from '../src/Functions.js';
import { User } from '../src/User.js';

var testUser = new User(0, 'Mark', 'Rubio', 'jeeves@gmail.com', 'Admin');

createTable();
AddUser(testUser.userId, testUser.userName, testUser.userPass, testUser.userEmail, testUser.userRole);
//funcs.AddUser(testUser);