function detectType(val: number | string) {
  if (typeof val === "string") return val.toLowerCase();

  return val + 4;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide a ID");
    return;
  }
  id.toLowerCase();
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAcc(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

// new Date() - creating an instance of Date class

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else console.log(x.toUpperCase());
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}

//Discriminated Unions

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //   return shape.sideLength ** 2;
}

function getArea(shape: Shape) {
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
      const _defaultShape: never = shape;
      return _defaultShape;
      break;
  }
}
