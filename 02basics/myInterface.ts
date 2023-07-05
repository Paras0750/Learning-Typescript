interface iUser {
  readonly DBid: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string): number;
}

const paras: iUser = {
  DBid: 123,
  email: "p@p.com",
  userId: 123,
  startTrial: () => {
    return "Hi";
  },
  getCoupon: () => {
    return 10;
  },
};

// Interfaces vs Types

// 1. Interfaces can be used to describe objects, arrays, functions
// 2. Interfaces can be extended
// 3. Interfaces are open for extension
// 4. Interfaces are better for OOP
// 5. Interfaces can be implemented by a class

// 1. Types can be used to describe objects, arrays, functions
// 2. Types can be extended
// 3. Types are closed for extension
// 4. Types are better for functional programming
// 5. Types can not be implemented by a class


