import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
    ...nextVitals,
    ...nextTypescript,
    {
        rules: {
            eqeqeq: "error",
            "no-var": "error",
            "prefer-const": "off",
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
