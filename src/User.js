
//this should export the whole class of User
module.exports.User = class User {
	constructor(userId, userName, userPass, userEmail, userRole){
	this.userId = userId;
	this.userName = userName;
	this.userPass = userPass;
	this.userEmail = userEmail;
	this.userRole = userRole;
	}
	
	get getUserId(){
		return userId;
	}
	
	set setUserId(userId){
		this.userId = userId;
	}
	
	get getUserName(){
		return userName;
	}
	
	set setUserName(userName){
		this.userName = userName;
	}
	
	get getUserPass(){
		return userPass;
	}
	
	set setUserPass(userPass){
		this.userPass = userPass;
	}
	
	get getUserEmail(){
		return userEmail;
	}
	
	set setUserEmail(userEmail){
		this.userEmail = userEmail;
	}
	
	get getUserRole(){
		return userRole;
	}
	
	set setUserRole(userRole){
		this.userRole = userRole;
	}
}
// example of EMSA 5 getters and seter
// Object.defineProperty(User, userId, {get: function () {return userId;}});
// Object.defineProperty(User, userId, {set: function () {return this.userId =
// userId;}});
