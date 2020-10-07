
//main page to handle functions

//to run - node Functions.js ( when in the src directory)

//IMPORTANT NOTES - 
//had to run the command "npm install mysql" prior to importing create connection

import { User } from './User';
import { createConnection } from 'mysql';

//const u = require('./User');

//var idIncrementer = 0;

// 2 test users
//var emptyUser = new User(++idIncrementer, 'jeeves', 'jj', 'jeeves@gmail.com', 'admin');
//var me = new User(++idIncrementer, 'mark', 'rubio', 'mark@gmail.com', 'loser');

//var userList = [];
//userList.push(emptyUser);
//userList.push(me);

//console.log(userList);

//establishes connection with MySQL
var con = createConnection({
	host: "localhost://3306/test",
	user: "root",
	password: "root",
	database: "test",
	multipleStatements: true
});

//function to create a user table in MySQL
function createTable() {
	con.connect(function (err) {
		if (err) throw err;
		console.log("connected!");
		var createUserTable = "CREATE TABLE Users(userId int auto_increment primary key, userName varchar(20)," +
			"userPass varchar(20), userEmail varchar(30), userRole varchar(15))";
		con.query(createUserTable, function (err) {
			if (err) throw err;
			console.log("user table created!");
		});
	})
}

//function to find a specific user in MySQL
function findUserById(userId) {

	con.connect(function (err) {
		if (err) throw err;
		con.query("SELECT * from User WHERE userId=?", function (err, result, fields) {
			if (err) throw err;
			console.log(result);
		});
	});

}

//function to add a new user in MySQL
function AddUser(userId, userName, userPass, userEmail, userRole) {

	var newUserLocal = new User(userId, userName, userPass, userEmail, userRole);

	con.connect(function (err) {
		if (err) throw err;
		console.log("connected!");

		var newUserMySQL = "INSERT INTO User(userId, userName, userPass, userEmail, userRole) values ?"

		con.query(newUserMySQL, newUserLocal, function (err) {
			if (err) throw err;
			console.log('New User was inserted! New User Name is: ' + newUserLocal.userName);
		});
	})
}

//function to update the user in MySQL
function updateUser(User) {

	con.connect(function (err) {
		if (err) throw err;
		console.log("connected!");
		let tempUser = findUserById(User.userId);
		var updateUserSQL = "UPDATE User SET userName=?, userPass=?, userEmail=?, userRole=? WHERE userId=?"

		con.query(updateUserSQL,[userName, userPass, userEmail, userRole, tempUser.userId], function (err, result, rows, fields){
			if(err) throw err;
			console.log("User updated successfully!");
		});
	});
}