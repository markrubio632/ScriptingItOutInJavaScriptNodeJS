//page to hold validation

import { FindAllUserCount, FindUserById } from "../src/Functions.js";
import { User } from "./User.js";
var UserList = [];
function ArrayPusher() {
    
    console.log(FindAllUserCount());

    for (var i = 0; i <= FindAllUserCount(); i++) {

        var userFound = FindUserById(i);
        UserList.push(userFound);

    }
    //console.log(UserList);
   //console.log(userFound);

    return UserList;

}

export { ArrayPusher };