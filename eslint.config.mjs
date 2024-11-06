import pluginJs from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    { languageOptions: { globals: globals.node } },
    {
        rules: {
            "no-console": "off",
            "no-unused-vars": [3],
            quotes: ["error", "double"],
            indent: ["error", 4],
            semi: ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
];
