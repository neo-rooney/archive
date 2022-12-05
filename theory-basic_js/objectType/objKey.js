const obj = {
  "first-name": "rooney",
  last_name: "Bae",
};

console.log("obj >>>", obj);

delete obj.last_name

console.log("obj >>>", obj);

delete obj['first-name']

console.log("obj >>>", obj);
