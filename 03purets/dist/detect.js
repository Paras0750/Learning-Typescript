"use strict";
function detectType(val) {
    if (typeof val === "string")
        return val.toLowerCase();
    return val + 4;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide a ID");
        return;
    }
    id.toLowerCase();
}
function isAdminAcc(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// new Date() - creating an instance of Date class
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else
        console.log(x.toUpperCase());
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //   return shape.sideLength ** 2;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
            break;
        case "square":
            return shape.sideLength ** 2;
            break;
        case "rectangle":
            return shape.length * shape.width;
            break;
        default:
            const _defaultShape = shape;
            return _defaultShape;
            break;
    }
}
