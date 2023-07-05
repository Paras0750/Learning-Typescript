const User = {
  name: "John",
  email: "John@abc.com",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "Paras", isPaid: true });

// function createCourse({ name: string, price: number }) {}

// let newCourse = { name: "reactjs", price: 400, email: "prx@g.com" };

// createCourse({ name: "reactjs", price: 400, email: "prx@g.com" }); //Gives error because of email property is not defined in createCourse
// createCourse(newCourse); //Gives no error (Bad Practice)

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

let myUser: User = {
  _id: "abc123",
  name: "John",
  email: "J@j.com",
  isActive: false,
};

myUser.email = "j@gmail.com";
// myUser._id = "123sdv"; //Gives error because of readonly property

export {};
