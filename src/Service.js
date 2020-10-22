
import { AddUser, UpdateUser, FindById, DeleteUser, FindAllUsers } from './Dao.js';

//function for login
function Login(userName, userPass){
    let userArray = [FindAllUsers()];

    //userArray.push(FindAllUsers());

    userArray.forEach(element => {
        if(element.userName == userName && element.userPass == userPass){
            console.log("userfound");
        }
        else{
            console.log("user not found");
        }
    });

}

export{Login};