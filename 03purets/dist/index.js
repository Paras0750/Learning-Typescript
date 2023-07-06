"use strict";
class User {
    constructor(name, email) {
        this.city = "Delhi";
        this.name = name;
        this.email = email;
    }
}
const paras = new User("paras", "prx@gmail.com");
paras.city = "Mumbai";
