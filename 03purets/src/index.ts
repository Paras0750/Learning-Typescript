class User {
  name: string;
  email: string;
  readonly city: string = "Delhi";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const paras = new User("paras", "prx@gmail.com");
// paras.city = "Mumbai";
