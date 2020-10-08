
//main page to handle functions

//to run - node Functions.js ( when in the src directory)

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
function createTable() {
	con.getConnection(function (err) {
		if (err) throw err;
		else {
			console.log("connected!");
			var createUserTable = "CREATE TABLE if not exists User(userId int auto_increment primary key, userName varchar(20), userPass varchar(20), userEmail varchar(30), userRole varchar(15))";
			con.query(createUserTable, function (err) {
				if (err) throw err;
				else {
					console.log("user table created!");
				}

			});
		}

	})
}

//function to find a specific user in MySQL
function findUserById(userId) {

	//establishes a user object to be worked with
	let userFound = new User();

	//finds and assigns the user object and its components
	con.connect(function (err) {
		if (err) throw err;
		else {
			userFound = con.query("SELECT * from User WHERE userId=?", function (err, result, fields) {
				if (err) throw err;
				console.log(result);
			});
		}

	});
	//should return the user object post pulling from DB and return user when method is used
	return userFound;

}

//function to add a new user in MySQL
function AddUser(userId, userName, userPass, userEmail, userRole) {

	var newUserLocal = new User(userId, userName, userPass, userEmail, userRole);

	con.getConnection(function (err) {
		if (err) throw err;
		else {
			console.log("connected!");

			var newUserMySQL = "INSERT INTO User(userId, userName, userPass, userEmail, userRole) values (?,?,?,?,?)"

			con.query(newUserMySQL, [newUserLocal.userId, newUserLocal.userName, newUserLocal.userPass, newUserLocal.userEmail, newUserLocal.userRole], function (err) {
				if (err) throw err;
				console.log('New User was inserted! New User Name is: ' + newUserLocal.userName);
			});
		}

	})
}

//function to update the user in MySQL
function updateUser(userId) {

	let tempUser = new User();

	con.connect(function (err) {
		if (err) throw err;
		else {
			console.log("connected!");
			tempUser = findUserById(userId);
			var updateUserSQL = "UPDATE User SET userName=?, userPass=?, userEmail=?, userRole=? WHERE userId=?"

			con.query(updateUserSQL, [userName, userPass, userEmail, userRole, tempUser.userId], function (err, result, rows, fields) {
				if (err) throw err;
				console.log("User updated successfully!");
			});
		}

	});
}
export { AddUser, createTable, updateUser, findUserById };