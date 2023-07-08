"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(5);
function identityFour(val) {
    return val;
}
identityFour({ type: "water", brand: "bisleri" });
const getMoreSearchProducts = (products) => {
    //T is a generic type & , is used to specify that T is a generic type and not a HTML or react tag
    return products[0];
};
function anotherFunction(firstParam, secondParam, thirdParam) {
    return {
        firstParam,
        secondParam,
        thirdParam,
    };
}
anotherFunction(4, "5", {
    connection: "connection",
    username: "username",
    password: "password",
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
