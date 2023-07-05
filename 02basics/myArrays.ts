const superHeros: string[] = [];    //✅ Array of strings
const heroPowers: Array<number> = [];  //✅ Array of numbers
//Can be declared as both string[] and Array<string>

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = [];    //✅ Array of objects

const MLModel: number[][] = [
    [1, 2, 3],
    [255,255,255],
]

superHeros.push("Spiderman");
heroPowers.push(100);

allUsers.push({name: "Hi", isActive: true});