"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addsTwo(num) {
    // return "hello";
    return num + 2;
}
addsTwo(2); // no error is thrown
// function signUpUser(name,email,password){}  ❌
function signUpUser(name, email, isPaid) { } //✅
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //Setting default value of isPaid
// signUpUser(1,2,3); // Is valid in javascript but not in typescript
signUpUser("Paras", "traboprx0@gmail.com", false);
loginUser("Paras", "traboprx0@gmail.com");
// function getValue(myVal: number): string  {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "Hello " + s;
};
var heros = ["thor", "ironman", "spiderman"];
// const heros = [1,2,3];
heros.map(function (hero) {
    // Always returns a string else throws error
    return "Hero is ".concat(hero);
});
function consoleError(errMsg) {
    // never means function throws an exception or terminates the execution of program
    throw new Error(errMsg);
}
