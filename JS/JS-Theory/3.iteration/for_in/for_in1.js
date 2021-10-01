const obj = {
  name: 'rooney',
  age: 20,
  city: 'Seoul',
  message: 'Hi',
  isStudent: false,
};

for (const ele in obj) {
  console.log(`key : ${ele}, value : ${obj[ele]}`);
}
