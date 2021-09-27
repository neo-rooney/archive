// String() : string으로 형 변환
console.log(String(123)); //'123'
console.log(String(1 / 0)); //'infinity'
console.log(String(-1 / 0)); //'-infinity'
console.log(String(NaN)); //'NaN'
console.log(String(true)); //'true'
console.log(String(false)); //'false'
console.log(String(undefined)); //'undefined'
console.log(String(null)); //'null'
console.log(String('hello')); //'hello'
// Number() : number 으로 형 변환
console.log(Number('')); //0
console.log(Number('123')); // 123
console.log(Number('hello')); //NaN
console.log(Number('123hello')); //NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); //NaN
//parseInt() parseFloat()
console.log(parseInt('123.123')); //123
console.log(parseFloat('123.123')); //123.123
// Boolean() : boolean으로 형 변환
console.log(Boolean('')); //false
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('hello')); //true
console.log(Boolean(1)); //true
console.log(Boolean({})); //true
console.log(Boolean([])); //true
