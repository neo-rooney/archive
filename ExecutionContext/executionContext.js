var a = 1;

function foo () {
  function bar () {
    console.log("1", a); //----------(1) 결과: undefined
    var a = 100;
    console.log("1-1", a); //----------(1) 결과: undefined
  }
  bar();
  console.log("2",a); //-------------(2) 결과: 1
}
foo();
console.log("3",a) //-------------(3) 결과: 1
