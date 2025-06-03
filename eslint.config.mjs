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
            eqeqeq: "error",
            "no-var": "error",
            "prefer-const": "off",
            "no-console": "off",
            "require-await": "warn",
            "no-unused-vars": "warn",
            "no-inline-comments": "off",
            "import/no-unresolved": "warn",
            "no-duplicate-imports": "warn",
            "array-callback-return": "off",
        },
    },
];

export default eslintConfig;
