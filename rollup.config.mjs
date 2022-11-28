import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/bundle.js",
    format: "es",
    sourcemap: true,
  },
  plugins: [
    // 바벨 트랜스파일러 설정
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
  ],
};
