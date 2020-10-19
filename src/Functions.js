
//main page to handle functions

//IMPORTANT NOTES - 
//had to run the command "npm install mysql" prior to importing create connection

import { User } from '../src/User.js';
import createPool from "mysql";

const pkg = createPool;

var user = new User();

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

//Finds User with the ID given
async function ReturnUser(id, user) {
	//create promise with resolve and reject as params

	let prom = new Promise((resolve, reject) => {
		const sql = "SELECT * FROM User where userId=?";

		var r = con.query(sql, [id], (err, row) => {
			if (err) {
				reject(err);
			}
			else {
				console.log("fetched user successfully");
				user.userId = row[0].userId;
				user.userName = row[0].userName;
				user.userPass = row[0].userPass;
				user.userEmail = row[0].userEmail;
				user.userRole = row[0].userRole;
				resolve(user);
			}
		})
	})

	let result = await prom;
	console.log(result);
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

	con.getConnection(function (err) {
		if (err) throw err;
		else {
			let updateUserSQL = "UPDATE User SET userName=?, userPass=?, userEmail=?, userRole=? WHERE userId=?"

			con.query(updateUserSQL, [userName, userPass, userEmail, userRole, userId], function (err) {
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

export { AddUser, CreateTable, UpdateUser, FindAllUserCount, ReturnUser };