var student = {
  name: "Lee",
  score: 90,
};
console.dir(student);


function Person(name) {
  this.name = name;
}

var foo = new Person("Lee");

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo); // prototype 프로퍼티가 없다.
