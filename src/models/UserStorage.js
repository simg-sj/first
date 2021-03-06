"use strict";

class UserStorage {
    static #users = {
        id : ["kibs0327","나개발","김팀장"],
        psword:["1234","1234","123456"],
        name:["성준","j","s"],
    };
    static getUsers(...fields){
        
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        },{})
       return  newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //
        const userInfo = userKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }

    static save(userInfo){
       const users = this.#users;
       users.id.push(userInfo.id);
       users.psword.push(userInfo.psword);
       users.name.push(userInfo.name_);
      // console.log(users);
      return {success : true}
    }
}

module.exports = UserStorage;