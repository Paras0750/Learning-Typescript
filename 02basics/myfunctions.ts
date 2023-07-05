function addsTwo(num): number {
  // return "hello";
  return num + 2;
}

addsTwo(2); // no error is thrown

// function signUpUser(name,email,password){}  ❌
function signUpUser(name: string, email: string, isPaid: boolean) {} //✅

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; //Setting default value of isPaid

// signUpUser(1,2,3); // Is valid in javascript but not in typescript
signUpUser("Paras", "traboprx0@gmail.com", false);
loginUser("Paras", "traboprx0@gmail.com");

// function getValue(myVal: number): string  {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
  return "Hello " + s;
};

const heros = ["thor", "ironman", "spiderman"];
// const heros = [1,2,3];

heros.map((hero): string => {
  // Always returns a string else throws error
  return `Hero is ${hero}`;
});

function consoleError(errMsg): never {
  // never means function throws an exception or terminates the execution of program
  throw new Error(errMsg);
}

export {};
