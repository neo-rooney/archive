// Plugins
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import generatePackageJson from "rollup-plugin-generate-package-json";

// at Project
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
  typescript({ tsconfig: "./tsconfig.json", useTsconfigDeclarationDir: true }),
];

const subfolderPlugins = (folderName) => [
  ...plugins,
  generatePackageJson({
    baseContents: {
      name: `${pkg.name}/${folderName}`,
      private: true,
      main: "../cjs/index.js",
      module: "./index.js",
      types: "../index.d.ts",
    },
  }),
];

const folderBuilds = getFolders("./src/components/Atoms").map((folder) => {
  return {
    input: `src/components/Atoms/${folder}/index.ts`,
    output: {
      file: `core/${folder}/index.js`,
      sourcemap: true,
      exports: "named",
      format: "esm",
    },
    plugins: subfolderPlugins(folder),
  };
});

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
  ...folderBuilds,
];

export default config;
