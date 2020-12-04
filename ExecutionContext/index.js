var x = 1;

function foo (a) {
  var y = a;

  function bar (b) {
    var z = b;
    console.log(x+y+z);
  }
  bar(3);
}
foo(2);
