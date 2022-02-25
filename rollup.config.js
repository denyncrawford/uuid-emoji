import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./dist/index.js",
    plugins: [nodeResolve(), commonjs(), terser()],
    output: [
      {
        file: "lib/uuid-emoji.js",
        format: "es",
      },
    ],
  },
  {
    input: "./dist/index.js",
    plugins: [nodeResolve(), commonjs(), terser()],
    output: [
      {
        name: "emojid",
        file: "lib/uuid-emoji-iife.js",
        format: "iife",
      },
    ],
  },
  {
    input: "./dist/index.d.ts",
    plugins: [dts()],
    output: {
      file: "lib/emojid.d.ts",
      format: "es",
    },
  },
];
