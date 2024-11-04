import pluginJs from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        envs: ["node"],
        rules: {
            "no-undef": "error",
            "no-unused-vars": ["error", { args: "none" }],
            "no-console": ["error", { allow: ["warn", "error"] }],
            "linebreak-style": ["error", "windows"],
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
];
