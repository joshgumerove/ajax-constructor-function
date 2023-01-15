// construct functions

// creating an object literal:
let user = { email: "example@example.com", password: "some!password" };
// problematic at times because may need to create many similar objects

// purpose of constructor functions --> create objects
// normally define a constructor function with a capital letter
// should gennerally require the new keyword to be used when executing the constructor function

// use a constructor function to create a new user everytime someone signs up for application
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const newUser = new User("Josh", "somepassword");
console.log(newUser);

console.log(newUser.email);
