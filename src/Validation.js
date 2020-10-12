//page to hold validation

import { FindAllUserCount, FindUserById } from "../src/Functions.js";

var UserList = [];

function ArrayPusher() {

    var userFound

    for (let i = 0; i <= FindAllUserCount(); i++) {

        userFound = FindUserById(i);
        UserList.push(userFound);

    }

    return UserList;

}

export { ArrayPusher, UserList };