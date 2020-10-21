
//this exports the whole class of User
 class User {
	constructor(userId, userName, userPass, userEmail, userRole){
	this.userId = userId;
	this.userName = userName;
	this.userPass = userPass;
	this.userEmail = userEmail;
	this.userRole = userRole;
	}
}
const _User = User;
export { _User as User };
