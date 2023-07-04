let greetings: string = "Hello Paras";

// greetings = 6; // can't assign number to string
// let num = 6;  
// num.toUppercase();  // can't use string methods on number

// greetings.toLowercase(); // tells typos in code

console.log(greetings);

//number

// let userId: number = 12321;
let userId = 12321; //Typescript automatically infers the type of variable

userId.toFixed();  // shows all the methods available on number

//boolean

let isMale: boolean = true;

isMale.valueOf(); // shows all the methods available on boolean


// let hero; // hero is of type any
let hero: string; // hero is of type string

function getHero(){
    return 'thor';
}

hero = getHero(); // error is thrown if we try to assign any other type to hero

export {}

// There is no int and float in typescript - everything is simply number