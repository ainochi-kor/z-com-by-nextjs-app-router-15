import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      camelcase: ["error", { allow: ["^_"], properties: "never", ignoreDestructuring: false, ignoreImports: false, allowInParams: true }], // 변수 이름 첫 글자에 _ 허용 및 params에서도 허용
    },
  },
];

export default eslintConfig;
