const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(5);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  type: string;
  brand: string;
}

identityFour<Bottle>({ type: "water", brand: "bisleri" });

const getMoreSearchProducts = <T>(products: T[]): T => {
  //T is a generic type & , is used to specify that T is a generic type and not a HTML or react tag
  return products[0];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U, V extends Database>(
  firstParam: T,
  secondParam: U,
  thirdParam: V
): object {
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

interface Quiz{
  name: string
  type: string
}

interface Course{
  name: string
  author: string
  subject: string
}

class Sellable<T>{
  public cart: T[] = []

  addToCart(item: T){
    this.cart.push(item)
  }
  
}