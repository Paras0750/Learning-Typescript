"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number = 5;
number = "5";
number = 5;
function getDBId(id) {
    // id.toLowerCase(); //❌ throws error because id can be number also and toLowerCase() is a string method
    if (typeof id === "string") { // strict type checking
        return id.toLowerCase();
    }
    else {
        return id + 2;
    }
}
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
// const data3: number | string[] = ['1','2',3]; //❌ Array can either be all numbers or all strings
var data3 = ['1', '2', 3]; //✅ Wrap types in parenthesis to make array of multiple types
// const data3: any[] = ['1','2',3]; //❌ Bad practice to use any goal to ts is to make types more strict
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "crew";
