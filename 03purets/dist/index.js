"use strict";
class User {
    constructor(name, email) {
        this.city = "Delhi";
        this.name = name;
        this.email = email;
    }
}
// Access Modifiers - private, public(default), protected
class User2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        //   private _courseCount: number = 1;
        this._courseCount = 1; //Protected properties can be accessed by the class and its child classes(SubUser)
        this.city = "Delhi";
    }
    get getAppleEmail() {
        return `apple.${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(count) {
        if (count <= 1) {
            throw new Error("Invalid course count");
        }
        this._courseCount = count;
    }
    deleteToken() {
        console.log("Deleted token");
    }
}
const paras = new User("paras", "prx@gmail.com");
// paras.city = "Mumbai";
// paras.deleteToken();
class SubUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount(courseCount) {
        this._courseCount = courseCount;
    }
}
