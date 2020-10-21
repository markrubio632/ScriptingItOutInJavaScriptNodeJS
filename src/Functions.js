
//main page to handle functions

//IMPORTANT NOTES - 
//had to run the command "npm install mysql" prior to importing create connection

import { User } from '../src/User.js';
import createPool from "mysql";

var user = new User();

const pkg = createPool;

//establishes connection with local MySQL
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
async function ReturnUser(id) {
	
	//create promise with resolve and reject as params

	let prom = new Promise((resolve, reject) => {
		const sql = "SELECT * FROM User where userId=?";

		var r = con.query(sql, [id], (err, row) => {
			if (err) {
				reject(err);
			}
			else {
				//inserts the returned params into the user (user declared outside of method)
				user.userId = row[0].userId;
				user.userName = row[0].userName;
				user.userPass = row[0].userPass;
				user.userEmail = row[0].userEmail;
				user.userRole = row[0].userRole;
				console.log("fetched user successfully");
				resolve(user);
			}
		})
	})

	let result = await prom;
	//console.log(result);
}

//function to add a new user in MySQL
function AddUser(userName, userPass, userEmail, userRole) {

	//ID is 0 because the id in database is auto-incrementing
	var newUserLocal = new User(0,userName, userPass, userEmail, userRole);

	con.getConnection(function (err) {
		if (err) throw err;
		else {
			let newUserMySQL = "INSERT INTO User(userName, userPass, userEmail, userRole) values (?,?,?,?)"

			con.query(newUserMySQL, [newUserLocal.userName, newUserLocal.userPass, newUserLocal.userEmail, newUserLocal.userRole], function (err) {
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

//deletes a user if the ID input exists
function DeleteUser(userId){
	con.getConnection(function (err){
		let deletesql = "DELETE FROM User WHERE userId=?";
		if (err) throw err;
		else{
			con.query(deletesql, [userId], function (err, result){
				if (err) throw err;
				console.log("User Deleted");
			})
		}
	})
}

//exports these functions for use elsewhere
export { AddUser, CreateTable, UpdateUser, ReturnUser, DeleteUser };