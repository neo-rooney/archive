var x = 'global';

function foo () {
  var y = "function"
  function bar(){
    console.log("inner >>>>>", y)
  }
  bar()
  console.log("1 >>>>>>>",x);
  console.log("2 >>>>>>>",y);
}

foo(); 
console.log("3 >>>>>>>",x); 
console.log("4 >>>>>>>",y); 