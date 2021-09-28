# advance

# 1. 생성자 함수

- 유사한 객체를 다중으로 만들 때 사용되는 함수
- 일반적으로 생성자 함수의 첫 글자는 대문자로 시작
- 생성자 함수로 객체 생성시  new 연산자를 통해 객체 생성

```jsx
function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = 'flour';
}

let bread_1 = new FishBread('cream', 1000);

console.log(bread_1); //FishBread { flavor: 'cream', price: 1000, base: 'flour' }
```

# 2. Map

- 다양한 자료형의 key를 허용하고 , key-value 형태의 자료형을 저장 가능할 수 있는 Collection

```jsx
let map = new Map();

map.set('name', 'rooney');
map.set(123, 456);
map.set(true, 'boolean');

console.log(map);

console.log(map.get(123));
console.log(map.size);

map.delete(123);
console.log(map);
map.clear();
console.log(map);
```

## Map 반복문

```jsx
let map = new Map([
  ['strawberry', 50],
  ['banana', 100],
  ['ice', 150],
]);

for (let item of map.keys()) {
  console.log(item);
}

for (let item of map.values()) {
  console.log(item);
}

for (let item of map) {
  console.log(item);
}
```

## Map ←→ Object 변환

```jsx
let map = new Map([
  ['strawberry', 50],
  ['banana', 100],
  ['ice', 150],
]);

let obj = Object.fromEntries(map);
console.log(obj); //{ strawberry: 50, banana: 100, ice: 150 }

let key_value = Object.entries(obj);
console.log(key_value); //[ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]

let new_map = new Map(key_value);
console.log(new_map); //Map { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
```

# 3. Set

- value만 저장하며 중복을 허용하지 않은 Collection

```jsx
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set('hello');

console.log(set); //Set {}
console.log(num); //Set { 1, 2, 3, 4, 5 }
console.log(str); //Set { 'h', 'e', 'l', 'o' }

set.add(1).add(1).add(10); // 중복 무시
console.log(set); //Set { 1, 10 }
console.log(set.has(10)); // true
console.log(set.has(2)); // false

set.delete(1);
set.delete(2); // 없는 값 제거 무시
console.log(set); //Set { 10 }
```

## Set 반목문

```jsx
let str = new Set('hello');

for (let item of str) {
  console.log(item);
}
//h
//e
//l
//o
```

# 4. Math

- 표준 Built-in 객체로써 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체

## (1) 최대/최소/절대값

```jsx
console.log(Math.max(1, -1)); // 1
console.log(Math.min(1, -1)); //-1

console.log(Math.max(1, -1, 100, 30, 20)); //100
let num = [1, -1, 100, 30, 20];
console.log(Math.max(num)); //NaN
console.log(Math.max.apply(null, num)); //100
console.log(Math.max(...num)); //100

console.log(Math.abs(1)); //1
console.log(Math.abs(-1)); //1
console.log(Math.abs(-Infinity)); //Infinity
```

## (2) 속성 및 랜덤

```jsx
console.log(Math.E);
console.log(Math.PI);

console.log(Math.random());
console.log(parseInt(Math.random() * 10));
```

## (3) 제곱 / 제곱근 / 소수점 처리

```jsx
// 제곱
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

// 제곱근
console.log(Math.sqrt(4)); //2
console.log(Math.sqrt(2)); //1.4142135623730951

// 반올림
console.log(Math.round(3.5)); //4
console.log(Math.round(3.4)); //3

// 올림
console.log(Math.ceil(3.5)); //4
console.log(Math.ceil(3.4)); //4

// 버림
console.log(Math.floor(3.5)); //3
console.log(Math.floor(3.4)); //3
```

# 5. Date

- 표준 Built-in 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
- Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현

## (1) 생성자

```jsx
let date_new = new Date();
let date_str = Date();

console.log(date_new); //2021-09-28T14:04:55.734Z
console.log(typeof date_new); //object
console.log(date_str); //Tue Sep 28 2021 23:04:55 GMT+0900 (GMT+09:00)
console.log(typeof date_str); //string

let date_ms_1 = new Date(0);
console.log(date_ms_1); //1970-01-01T00:00:00.000Z

let date_ms_2 = new Date(1000 * 3600 * 24);
console.log(date_ms_2); //1970-01-02T00:00:00.000Z

let date_string = new Date('2020-09-28');
console.log(date_string); //2020-09-28T00:00:00.000Z

//month : 0(1월) - 12월(11)
let date_params_1 = new Date(2021, 0, 1);
console.log(date_params_1); //2020-12-31T15:00:00.000Z
let date_params_2 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_2); //2021-01-01T00:00:00.000Z
```

## (2) 날짜 정보 얻기

```jsx
let date = new Date();

console.log(date);
console.log(date.getFullYear()); //2021
console.log(date.getMonth()); //8
// 0(일) - 6(토)
console.log(date.getDay()); //2
console.log(date.getHours()); //23
//9시간 차이
console.log(date.getUTCHours()); //14
console.log(date.getTime()); //1632838593015
```

## (3) parse

```jsx
let ms_parse = Date.parse('2020-03-21T00:00:00.000');
console.log(ms_parse);

console.log(new Date(ms_parse));
```