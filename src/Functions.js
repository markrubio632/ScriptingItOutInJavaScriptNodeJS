
//main page to handle functions

//IMPORTANT NOTES - 
//had to run the command "npm install mysql" prior to importing create connection

import { User } from '../src/User.js';
import createPool from "mysql";

const pkg = createPool;

//establishes connection with MySQL
const con = pkg.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'test',
	multipleStatements: true,
	port: 3306
});

//function to create a user table in MySQL
function CreateTable() {
	con.getConnection(function (err) {
		if (err) throw err;
		else {
			let createUserTable = "CREATE TABLE if not exists User(userId int auto_increment primary key, userName varchar(20), userPass varchar(20), userEmail varchar(30), userRole varchar(15))";
			con.query(createUserTable, function (err) {
				if (err) throw err;
				else {
					console.log("user table created or is created!");
				}

			});
		}

	})
}

//function to find a specific user in MySQL
function FindUserById(userId) {

	//establishes a user object to be worked with
	var userFound = new User();

	//finds and assigns the user object and its components
	con.getConnection(function (err) {
		if (err) throw err;
		else {
			con.query("SELECT * from User WHERE userId=?", [userId], function (err, result) {
				if (err) throw err;
				result.forEach((result) => {
					userFound.userId = result.userId;
					userFound.userName = result.userName;
					userFound.userPass = result.userPass;
					userFound.userEmail = result.userEmail;
					userFound.userRole = result.userRole;

					//console.log(`${result.userId}`);
					//console.log(userFound);
				})
			});
		}
	});
	return userFound;
	//console.log(userFound);
	//should return the user object post pulling from DB and return user when method is used
	//return userFound;

}

//function to add a new user in MySQL
function AddUser(userId, userName, userPass, userEmail, userRole) {

	var newUserLocal = new User(userId, userName, userPass, userEmail, userRole);

	con.getConnection(function (err) {
		if (err) throw err;
		else {
			let newUserMySQL = "INSERT INTO User(userId, userName, userPass, userEmail, userRole) values (?,?,?,?,?)"

			con.query(newUserMySQL, [newUserLocal.userId, newUserLocal.userName, newUserLocal.userPass, newUserLocal.userEmail, newUserLocal.userRole], function (err) {
				if (err) throw err;
				console.log('New User was inserted!');
			});
		}

	})
}

//function to update the user in MySQL
function UpdateUser(userName, userPass, userEmail, userRole, userId) {

	//let tempUser = new User();

	con.getConnection(function (err) {
		if (err) throw err;
		else {
			//tempUser = FindUserById(userId);
			let updateUserSQL = "UPDATE User SET userName=?, userPass=?, userEmail=?, userRole=? WHERE userId=?"

			con.query(updateUserSQL, [userName, userPass, userEmail, userRole, userId], function (err, result, rows, fields) {
				if (err) throw err;
				console.log("User updated successfully!");
			});
		}

	});
}

//returns a numerical value from the sql COUNT method
function FindAllUserCount() {

	var userCount;

	con.getConnection(function (err) {
		if (err) throw err;
		else {

			con.query("select Count(userId) as count from User", function (err, result) {
				if (err) throw err;
				userCount = result.count;
				result.forEach(result => {
					console.log(`${result.count}`);
				});
			});
		}
	});

	return userCount;

}

export { AddUser, CreateTable, UpdateUser, FindUserById, FindAllUserCount };