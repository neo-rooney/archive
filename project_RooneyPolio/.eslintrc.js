module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	root: true,
	extends: [
		// add more generic rulesets here, such as:
		'eslint:recommended',
		'next/core-web-vitals',
		'plugin:prettier/recommended',
		// Make sure "prettier" is the last element in this list.
		'prettier',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
};
