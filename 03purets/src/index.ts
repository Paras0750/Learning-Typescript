class User {
  name: string;
  email: string;
  readonly city: string = "Delhi";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

// Access Modifiers - private, public(default), protected
class User2 {
//   private _courseCount: number = 1;
  protected _courseCount: number = 1; //Protected properties can be accessed by the class and its child classes(SubUser)

  readonly city: string = "Delhi";
  constructor(public name: string, public email: string) {}

  get getAppleEmail(): string {
    return `apple.${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(count: number) {
    if (count <= 1) {
      throw new Error("Invalid course count");
    }
    this._courseCount = count;
  }
  private deleteToken() {
    console.log("Deleted token");
  }

}

const paras = new User("paras", "prx@gmail.com");
// paras.city = "Mumbai";

// paras.deleteToken();

class SubUser extends User2{  //Using extends keyword to inherit the properties of User2 class (private properties are not inherited)
    isFamily: boolean = true;
    changeCourseCount(courseCount: number): void{
        this._courseCount = courseCount;
    }
}