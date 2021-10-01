let x = 1;
let y = 2;

console.log('globel', x); //1
console.log('globel', y); //2

{
  //local scope
  let x = 3;
  let y = 4;
  let z = 5;
  console.log('block', x); //3
  console.log('block', y); //4
}

console.log(z); //ReferenceError: z is not defined
