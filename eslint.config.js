import pluginJs from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: globals.node,
            ecmaVersion: "latest",
            envs: ["node"],
            sourceType: "module",
        },
        rules: {
            "no-undef": "error",
            "no-unused-vars": ["error", { args: "none" }],
            "no-console": ["error", { allow: ["warn", "error"] }],
            "line-break-style": ["error", "windows"],
            ident: ["error", 2],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
];
