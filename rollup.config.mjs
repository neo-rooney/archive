import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { getFolders } from "./scripts/buildUtils.mjs";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const plugins = [
  // 바벨 트랜스파일러 설정
  babel({
    babelHelpers: "bundled",
    // presets에 typescript 추가
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  }),
  // 타입스크립트
  typescript({ tsconfig: "./tsconfig.json" }),
];

const config = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
        exports: "named",
      },
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins,
  },
];

export default config;
