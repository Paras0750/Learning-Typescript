"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Paras";
// greetings = 6; // can't assign number to string
// let num = 6;  
// num.toUppercase();  // can't use string methods on number
// greetings.toLowercase(); // tells typos in code
console.log(greetings);
//number
// let userId: number = 12321;
var userId = 12321; //Typescript automatically infers the type of variable
userId.toFixed(); // shows all the methods available on number
//boolean
var isMale = true;
isMale.valueOf(); // shows all the methods available on boolean
// There is no int and float in typescript - everything is simply number
