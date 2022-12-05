# Nuxt 프로젝트 초기 세팅방법
작성일시: 2021년 4월 29일 오후 2:37
작성자: rooney bae
최종 편집일시: 2021년 5월 3일 오후 3:03
최종 편집자: rooney bae

# Nuxt & Vue

```jsx
npm i vue nuxt
```

## babel WRANNING 해결방법

```css
WARN  Though the "loose" option was set to "false" in your @babel/preset-env config, it will not be used for @babel/plugin-proposal-private-methods since the "loose" mode option was set to "true" for @babel/plugin-proposal-class-properties.                                                      16:13:06
The "loose" option must be the same for @babel/plugin-proposal-class-properties, @babel/plugin-proposal-private-methods and @babel/plugin-proposal-private-property-in-object (when they are enabled): you can silence this warning by explicitly adding
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
to the "plugins" section of your Babel config.
```

위와 같은 경고가 등장하는 경우 , 작동에는 문제가 없으나 경고를 해결하기 위해 아래 3가지 방법을 사용 할 수 있다. 

### 첫번째 방법

nuxt를 v.2.15.2 이하 버전을 설치해주도록 한다. 해당 babel과 nuxt 최신 버전간의 호환성 문제인것으로 추정하고 있는데, 지속적인 관찰을 통해서 해당 문제가 해결되었는지 확인해 보도록 한다. (비추천)

```jsx
npm uninstall nuxt
npm i nuxt@2.15.2
```

### 두번째 방법

`nuxt.config.js` 파일에 아래 babel 옵션에 관한 코드를 추가해서 경고문구를 지워준다.(추천)

```jsx
// nuxt.config.js
export default {
	build: {
		babel: {
			plugins: [ [ '@babel/plugin-proposal-private-methods', { loose: true } ] ]
		}
	}
};
```

### 세번째 방법

`package.json` 파일에 아래 코드를 추가하고 모듈을 재 설치한다. 모듈을 설치할때 `yarn` 을 사용해야만한다. npm으로 하면 경고가 사라지지 않는다.(이유는 모름)

```jsx
{
...
"resolutions": {
  "@babel/core": "7.13.15",
  "@babel/preset-env": "7.13.15"
}
...
}
```

# Vuex

```jsx
npm i vuex
```

Vuex는 모듈 형식으로 분리해 사용합니다. 

[Vuex 모듈 공식문서]([https://vuex.vuejs.org/guide/modules.html](https://vuex.vuejs.org/guide/modules.html))

# Reset CSS

```css
/* css/global.css */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

```jsx
// nuxt.config.js
export default {
...
	css:[css/global.css],
...
}
```

# SCSS

```jsx
npm i -D node-sass @nuxtjs/style-resources sass-loader@10
//sass-loader 11.0.0 이상 버전에서 에러 발생. 10 버전 설치
```

```jsx
//nuxt.config.js
export default {
...
	modules: [ '@nuxtjs/style-resources' ],
	styleResources: {
		scss: [ '~/css/scss/main.scss' ]
	}
...
};
```

# 환경 변수

배포 서버에 있는 환경 변수를 사용 할 것. 따라서, `||` 이후에 개발 서버에 관한 환경변수를 쓰면된다.

```jsx
// utils/const/index.js

export const SERVER_API_URL = `${process.env.SERVER_API_URL || '개발 서버 api url'}`;
```

# Axios

```jsx
npm i @nuxtjs/axios
```

```jsx
// plugins/axios.js

export default ({ $axios, store, redirect }) => {
	$axios.onRequest(async (config) => {
		if (store.state.accessToken && store.state.refreshToken) {
			config.headers.common['Authorization'] = `Bearer ${store.state.accessToken}`;
			config.headers.common['refreshtoken'] = store.state.refreshToken;
		}

		return config;
	});

	$axios.onResponse((response) => {
		return response;
	});

	$axios.onError((error) => {
		if (error.response) {
			throw error.response.data.message;
		}
	});
};
```

```jsx
//nuxt.config.js
import { SERVER_API_URL } from './utils/const/index.js';

export default {
...
	modules: [ '@nuxtjs/axios' ],
	axios: {
		baseURL: process.env.SERVER_API_URL || SERVER_API_URL,
		retry: {
			retries: 3
		}
	},
	plugins: [ { src: '~/plugins/axios.js' } ],
...
};
```