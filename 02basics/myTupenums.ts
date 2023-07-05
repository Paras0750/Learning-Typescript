let tUser: [number, string , boolean] //✅ Tuple of number, string and boolean  //Use , instead of |(union)

tUser = [1, "John", true]; //✅

let rgb:[number, number, number] = [255, 255, 255]; //✅


type tpUser = [number,string];

let newUser: tpUser = [1, "John"]; 

newUser[1] = "Jake"; 

newUser.push(); // This should not be allowed but it is allowed in tuples reason -stackoverflow.com/questions/52482154/why-does-typescript-allow-pushing-to-a-tuple



export {};
