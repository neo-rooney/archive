let x = 1;
let y = 2;

console.log('globel', x); //1
console.log('globel', y); //2

{
  //local scope
  let x = 3;
  let y = 4;
  console.log('block', x); //3
  console.log('block', y); //4
  {
    let x = 5;
    let y = 6;
    console.log('inner', x); //5
    console.log('inner', y); //6
  }
}
