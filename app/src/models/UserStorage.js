"use strict"

const objectInspect = require("object-inspect");

class UserStorage {
  static #users = {
    id: ["dltmdgjs", "hello", "나에요"],
    passwd: ["1234", "1234", "123456"],
    name: ["이승헌", "안녕", "나에요"]
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
        }
        return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); /* => [id, passwd, name] */
    const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
    }, {});

    return userInfo;
  }
};

module.exports = UserStorage;