function CreateObj(name, age) {
  this.name = name;
  this.age = age;
}

const obj = new CreateObj("Rooney", 20);

console.log("obj >>>", obj);
