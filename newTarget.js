function Member(name, age) {
  if (!new.target) {
    throw new Error("Error: must call function with new keyword");
  }
  this.name = name;
  this.age = age;
}

let user1 = new Member("Wally", 30);
console.log(user1);

// let user2 = Member("Jason", 31);
let user2 = new Member("Jason", 31);
console.log(user2);
