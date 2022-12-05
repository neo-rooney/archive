# study_typescript-for-vue_typescript-vue

## TypeScript 등장배경

TypeScript는 MS에서 발표한 오픈소스 프로젝트로, 자바스크립트의 Superset(상위확장)입니다.

![typescript1](https://user-images.githubusercontent.com/52039229/105939939-873d3700-609d-11eb-92e7-ffa249593e57.png)

느슨한(동적) 타입의 언어인 자바스크립트를 통해 프로젝트를 진행 할 경우 코드가 복잡해지고, 디버그와 테스트 공수가 증가하는 문제가 있어 이를 극복하고자 TypeScript가 등장하였습니다.

## TypeScript 장점

1. 컴파일 단계에서 에러 감지

```javascript
function add(a, b) {
  return a + b;
}

sum("10", "20"); // "1020"
```

```typescript
function add(a: number, b: number) {
  return a + b;
}

add("10", "20");
```

![스크린샷 2021-01-27 오후 8 44 02](https://user-images.githubusercontent.com/52039229/105986556-71049a80-60e0-11eb-8b80-b9ef6e0d96e8.png)

2. 생산성 향상

- IDE 기능 최대한 활용 가능
  ![다운로드](https://user-images.githubusercontent.com/52039229/105988051-75ca4e00-60e2-11eb-82ae-8f8d2b679a9d.png)
- 협업시 용이
- 예측가능한 코드 작성 가능

3. 결국 javascript

- 프로젝트의 모든 코드를 한번에 바꿀 필요가 없습니다.
- 점진적인 변경(예를 들어 컴포넌트 단위의 변경)이 가능합니다.

## typescript for Vue

typescript를 vue에 적용하는 방법은 2가지 방법이 있습니다.

1. Vue.extend(추후 보강하기)

2. Class style

Vue Property Decorator 라이브러리를 사용합니다.

```
This library fully depends on vue-class-component
```

### vue-class-component?

Vue 클래스 컴포넌트는 클래스 스타일 구문으로 Vue 컴포넌트를 만들 수있는 라이브러리입니다.
기존 Vue는 객체 스타일의 컴포넌트 코드 정의 방식을 사용했습니다. 객체 기반 코드 작성 방법은 입문자들으 러닝커브를 낮추는 장점과 코드의 가독성을 높이는 장점이 있었습니다.

다만 객체스타일의 코드 작성 방식은 타입스크립트를 지원하기에는 좀 버거운 구조를 갖게 됩니다. 타입스크립트의 타입 추론 방식은 객체 구조보다 함수 구조에서 더 이점이 있기 때문입니다.
(앵귤러의 코드스타일과 비슷하다는 의견이 존재!)

### @Component

```vue
<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      message: "메세지를 입력해주세요",
    };
  },
};
</script>

<style scoped></style>
```

위와 같은 기존 vue 코드는 아래와 같이 class 스타일로 작성 할 수 있습니다.

```vue
<template>
  <div>
    <input type="text" v-model="message" />
    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Message extends Vue {
  message: string = "메세지를 입력해주세요";
}
</script>

<style scoped></style>
```

data는 클래스의 member로 정의해서 사용 할 수 있습니다. 기존과 동일하게 템플릿에서 데이터를 바로 사용 할 수 있습니다.

### @Prop

```vue
<template>
  <div>
    {{ parentMessage }}
  </div>
</template>

<script>
export default {
  props: {
    parentMessage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
```

위와 같은 기존 vue 코드는 아래와 같이 class 스타일로 작성 할 수 있습니다.

```vue
<template>
  <div>
    {{ parentMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Children extends Vue {
  @Prop({ type: String, default: "" }) parentMessage?: string;
}
</script>

<style scoped></style>
```

### @Watch

@Watch 는 Method Decorator로 지정한 속성의 변경을 감지합니다.

```vue
<template>
  <div>
    <p>{{ alertMessage }}</p>
    {{ parentMessage }}
  </div>
</template>

<script>
export default {
  props: {
    parentMessage: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      alertMessage: "",
    };
  },
  watch: {
    parentMessage: function() {
      this.alertMessage = "메세지를 업데이트 했습니다.";
    },
  },
};
</script>

<style scoped></style>
```

위와 같은 기존 스타일의 코드를 아래와 같이 사용 할 수 있습니다.

```vue
<template>
  <div>
    <p>{{ alertMessage }}</p>
    {{ parentMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Children extends Vue {
  @Prop() parentMessage?: string;
  alertMessage: string = "";
  @Watch("parentMessage")
  update(value: string, oldValue: string) {
    this.alertMessage = "메세지를 업데이트 했습니다.";
  }
}
</script>

<style scoped></style>
```

### @Emit

자식 컴포넌트에서 부모컴포넌트로 데이터를 전달할 경우 @Emit 데코레이터를 사용합니다.

```vue
<template>
  <div>
    <button @click="counter">자식에서 숫자를 증가시킵니다.</button>
  </div>
</template>

<script>
export default {
  methods: {
    counter() {
      this.$emit("counter");
    },
  },
};
</script>

<style scoped></style>
```

```vue
<template>
  <div>
    <button @click="counter">자식에서 숫자를 증가시킵니다.</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";

@Component
export default class Children extends Vue {
  @Emit()
  counter() {
    console.log("count");
  }
}
</script>

<style scoped></style>
```
