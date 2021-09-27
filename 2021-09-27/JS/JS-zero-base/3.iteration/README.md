# iteration

# 1.  for

- 선언문 , 조건문, 증감문 형태로 이루어진 반복문
- 조건문이 fail이 되기 전까지 코드 블록을 계속적으로 반복 수행
- 선언문, 조건문, 증감문 자리에 공백 입력 가능

# 2. for ...in

- 객체의 key, value 형태를 반복하여 수행하는데 최적화 된 유형
- 첫번째부터 마지막까지, 객체의 키 개수만큼 반복

# 3. for ...of

- Collection 객체 자체가 `Symbol.iterator` 속성을 가지고 있어야 동작 가능한 유형
- ES6에 새로 추가된 Collection 기반의 반복 구문

# 4. while

- 조건문이 참일 때 코드 블록을 계속해서 반복 수행하는 반복문
- for 문에 비해 선언문과 증감문 없이 loop를 수행하며, 무한 loop등 수행 시 많이 사용
- 조건문을 코드 블록보다 아래로 옮긴 do ...while 반복문도 존재(한번은 do 실행)

```jsx
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

//0
//1
//2
```

```jsx
let i = 4;
do {
  console.log(i);
  i++;
} while (i < 3);
//4
```

# 5. 반복문 제어

## break

- 반복문 수행시 코드 블록을 탈출할 떄 사용되는 식별자
- 다중 반복문일 경우 가장 안쪽의 반목문을 종료
- Label을 통하여 다중 반복문을 한번에 종료 가능

```jsx
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text = text + i;
}

console.log(text);
//012
```

## continue

- 반복문 수행 시 코드 블록 실행을 해당 라인에서 중지하고 블록 코드를 종료 시킨 후 반복문 내 명시된 조건 판단

```jsx
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text = text + i;
}

console.log(text);
//012456789
```

## Label

- 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
- break와 continue를 사용하는 반복문 안에서만 사용 가능하며, break나 continue 지시자 위에 있어야 함
- 현업에서 잘 사용하지는 않음

```jsx
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
    break end;
  }
}
```