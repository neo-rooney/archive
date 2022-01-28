## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. JSDoc로 타입스크립트처럼 JS 변경하기
   - 코드가 많고 코드를 잘 모르는 경우 TS 적용의 대안이 될 수 있다.
1. 타입스크립트의 기본 환경 구성
   - [x] NPM 초기화
   ```
   npm init
   ```
   - [x] 타입스크립트 라이브러리 설치
   ```
   npm i typescript
   ```
   - [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
         `tsconfig.json`
   - [x] 자바스크립트 파일을 타입스크립트로 확장자 변경하기
         `js -> ts`
   - [x] tsc 명령어로 타입스크립트 컴파일 하기
2. 명시적인 `any` 선언하기
   - `tsconfig.json`파일에 `noImplicitAny` 값을 `true`로 추가

## 타입스크립트 프로젝트 환경 구성

1. 프로젝트 폴더 생성
2. `npm init -y`로 `package.json` 파일 생성
3. 아래 명령어로 타입스크립트 및 문법 검사, 코드 정리 도구 라이브러리 추가

```sh
npm i -D typescript @babel/core @babel/preset-env @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier eslint-plugin-prettier
```

4. 프로젝트 폴더 바로 아래에 ESLint 설정 파일 추가

```js
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: "avoid",
      },
    ],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
```

5. ESLint 이그노어 파일 추가

```
// .eslintignore
node_modules
```

## VSCode ESLint 플러그인 관련 설정

1. VSCode의 [ESLint 플러그인](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 설치
2. VSCode에서 `ctrl` + `shift` + `p` / `cmd` + `shift` + `p` 키를 이용하여 명령어 실행 창 표시
3. 명령어 실행 창에 `open settings (json)` 입력 후 선택

![find-user-settings-on-command-palette](./command-palette.png)

4. VSCode 사용자 정의 파일인 `settings.json` 파일의 내용에 아래와 같이 ESLint 플러그인 관련 설정 추가.

```js
{
  // ... <-- 기존 내용을 꼭 유지한 상태에서 아래 내용을 추가하고 이 주석은 제거할 것
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "eslint.workingDirectories": [
      {"mode": "auto"}
  ],
  "eslint.validate": [
      "javascript",
      "typescript"
  ],
}
```

5. `ctrl` + `,` 또는 `cmd` + `,` 눌러서 VSCode 설정 파일(Settings)에 들어간 후 `format on save` 검색. 아래와 같이 체크가 안되어 있는지 확인.

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
