# Extract elements from array

# Array.splice()

## 개요

배열의 기존 요소를 **삭제** 또는 **교체**하거나 **새 요소를 추가**하여 **배열의 내용을 변경**합니다.

- splice() 메서드는 원본 배열을 변경한다는 점이 특징이다.

## 구문

```jsx
array.splice(start, deleteCount, item)
```

### start

- 변경을 시작할 인덱스
- 배열의 길이보다 큰 값을 할당  배열의 길이로 설정

### deleteCount(Optional)

- 제거할 요소의 수
- 생략하는 경우 start부터 모든 요소를 제거
- array.length - start보다 크면 start부터의 모든 요소를 제거
- 0 인경우 어떤 요소도 제거하지 않음
- 지정하지 않고, item만 있다면 추가 하기만함

### item(Optional)

- 배열에 추가할 요소
- 제거한 요소의 자리에 요소를 추가함
- item이 2개 이상이라면 제거한 요소의 자리부터 추가됨, 제거된 요소 뒤에 있던 기존값들은 위치가 밀림
- 지정하지 않고, deleteCount만 있다면 제거하기만함

## 사용법

### 1. 배열에서 요소 추출 및 제거

```jsx
const arr = ['1', '2', '3', '4', '5'];
const removed = arr.splice(3, 1);
console.log('removed' , removed)
console.log('arr' , arr)
```

![splice.png](Extract%20elements%20from%20array%2013bbf46f9f0a4834b1edc52f08cfcefa/splice.png)

### 2. 배열에서 요소 추출하고 교체

```jsx
const arr = ['1', '2', '3', '4', '5'];
const removed = arr.splice(3, 1, '99');
console.log('removed', removed);
console.log('arr', arr);
```

![splice2.png](Extract%20elements%20from%20array%2013bbf46f9f0a4834b1edc52f08cfcefa/splice2.png)

### 3. 배열의 특정 인덱스에 새로운 값 추가

 

```jsx
const arr = ['1', '2', '3', '4', '5'];
const removed = arr.splice(3, 0, '99');
console.log('removed', removed);
console.log('arr', arr);
```

![splice3.png](Extract%20elements%20from%20array%2013bbf46f9f0a4834b1edc52f08cfcefa/splice3.png)

# Array.slice()

## 개요

배열에서 요소 추출

- splice 메서드와는 달리 원본 배열에 변경을 발생시키지 않는다.
- 배열의 요소가 객체인 경우 얕은 복사가 일어나기 때문에 어느 하나의 변경이 다른 하나에 영향을 미친다.

```jsx
const arr = [{ name: 'rooney' }, 2, 3, 4, 5];
const newArray = arr.slice(0, 1);
arr[0].name = 'hun';
console.log('newArray', newArray);
console.log('arr', arr);
```

![slice1.png](Extract%20elements%20from%20array%2013bbf46f9f0a4834b1edc52f08cfcefa/slice1.png)

## 구문

```jsx
arr.slice(begin,end)
```

### begin(Optional)

- 추출 시작점
- 음수를 지정하면 배열의 끝에서부터 시작점이 계산된다. -1인 경우 배열의 맨 마지막 요소를 의미
- 값이 없는 경우 0번째 인덱스가 시작점
- 배열의 길이보다 큰 값인 경우 빈 배열 반환

### end(Optional)

- 추출을 종료할 기준, end 번째 요소는 추출에서 제외된다. `slice(0, 2)`인 경우 0번째 , 1번째 요소까지 추출된다.
- 음수를 지정하면 배열의 끝에서부터 시작점이 계산된다. `slice(0, -1)` 인 경우 0번째 부터 배열의 뒤에서 두번째 요소까지 추출된다.
- 값이 없는 경우 begin부터 배열의 끝까지 추출한다.
- 배열의 길이보다 큰 값인 경우 배열의 끝까지 추출한다.

## 사용법

```jsx
const arr = [1, 2, 3, 4, 5];
const newArray = arr.slice(0, 2);

console.log('newArray', newArray);
console.log('arr', arr);
```

![slice.png](Extract%20elements%20from%20array%2013bbf46f9f0a4834b1edc52f08cfcefa/slice.png)