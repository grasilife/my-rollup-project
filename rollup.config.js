// rollup.config.js
import json from "rollup-plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
export default {
  input: "src/main.js",

  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/index.ems.js",
      format: "esm",
      exports: "auto",
    },
  ],

  plugins: [
    resolve(),
    babel({
      babelHelpers: "bundled",
    }),
    json(),
  ],
};
